import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export interface IModelIO {
  value: string;
  label: string;
}

export interface IData {
  al: number;
  k: number;
  k1: number;
  k2: number;
  re: number;
  a: 'PCI156C60' | 'PCF60' | 'IO_FLEX' | 'SAF6125' | 'OCUFLEX';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  medidasLentes: IModelIO[] = [
    { label: 'PCI156C60', value: 'PCI156C60' },
    { label: 'PCF60', value: 'PCF60' },
    { label: 'IO_FLEX', value: 'IO_FLEX' },
    { label: 'SAF6125', value: 'SAF6125' },
    { label: 'OCUFLEX', value: 'OCUFLEX' },
    { label: 'Otro', value: '' },
  ];

  seeLeft = true;
  seeRight = false;

  reedDocs = false;

  mode = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      this.mode = false;
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      this.mode = true;
      localStorage.setItem('color-theme', 'light');
    }
  }

  isVisible = false;
  resultsVisible = false;

  results: { left: number | null; right: null | number } = {
    left: null,
    right: null,
  };

  left = this.fb.group({
    al: [null, Validators.required],
    k: [null, Validators.required],
    re: [null, Validators.required],
    a: [this.medidasLentes[0].label, Validators.required],
  });
  right = this.fb.group({
    al: [null, Validators.required],
    k: [null, Validators.required],
    re: [null, Validators.required],
    a: [this.medidasLentes[0].label, Validators.required],
  });

  disclaimerText = [
    {
      title: 'DESCARGO DE RESPONSABILIDAD',
      content: [
        'PMC-CALC es un algoritmo basado en redes neuronales artificiales con estructura perceptrón multicapas, entrenadas y comprobadas según la metodología descrita en el artículo “Using a multilayer perceptron in intraocular lens power calculation” (J Cataract Refract Surg. 2019 Dec;45(12):1753–61), destinada a ser una herramienta adicional para asistir a los oftalmólogos en la selección de la potencia de lente intraocular a implantar en la cirugía de catarata.',
        'El proceso de optimización de su algoritmo, con el uso de biometría óptica (IOL Master 500 y 700) y el lente intraocular biconvexo OCUFLEX, mostró que la discrepancia entre la potencia de la lente predicha y la real postoperatoria fue menor de ± 0.5 dioptrías en más del 95 % de los pacientes. Hasta contar con evidencias que demuestren lo contrario, el uso de biómetros y modelos de LIO  diferentes podría afectar la eficacia del cálculo.',
        'PMC-CALC está aún en fase experimental por lo que recomendamos encarecidamente que siempre verifique el cálculo comparándolo con el sugerido por otras fórmulas conocidas. Ud. debe arribar a sus propias conclusiones después del análisis de cada caso particular y aun cuando se apoye en esta herramienta para su decisión, la selección del LIO a implantar es su total responsabilidad. Al aceptar estos términos, Ud. exime a los desarrolladores de esta herramienta de cualquier reclamo relacionado con un resultado refractivo adverso o no esperado.',
      ],
    },
  ];

  changeMode(value: boolean) {
    if (value) {
      document.documentElement.classList.remove('dark');
      this.mode = true;
    } else {
      document.documentElement.classList.add('dark');
      this.mode = false;
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  calculate() {
    if (this.reedDocs) {
      if (this.left.valid || this.right.valid) {
        if (this.left.valid)
          this.http
            .post<{ rpred: number }>(environment.url, this.left.value)
            .subscribe(
              (data) => (this.results = { ...this.results, left: data.rpred })
            );

        if (this.right.valid)
          this.http
            .post<{ rpred: number }>(environment.url, this.right.value)
            .subscribe(
              (data) => (this.results = { ...this.results, right: data.rpred })
            );

        this.resultsVisible = true;
      } else {
        this.notification.error(
          'Falta de Datos',
          'Debe llenar alguno de los dos formularios.',
          {
            nzKey: 'key',
          }
        );
      }
    } else
      this.notification.error(
        'Lee los términos y condiciones',
        'Lee los terminos y condiciones para poder hacer los cálculos.',
        {
          nzKey: 'key',
        }
      );
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleReset() {
    this.left.reset();
    this.right.reset();
  }

  modeText() {
    return this.mode ? 'LIGHT' : 'DARK';
  }
}
