import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kIndexes = [134.45, 234.12, 456.3, 123, 26];

  isVisible = false;

  odCards = ['OJO DERECHO', 'OJO IZQUIERO'];

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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
