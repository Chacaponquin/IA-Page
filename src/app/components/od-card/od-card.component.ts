import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-od-card',
  templateUrl: './od-card.component.html',
  styleUrls: ['./od-card.component.css'],
})
export class OdCardComponent implements OnInit {
  @Input() odInf: string = '';
  @Input() parentForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  screenWidth: number = window.innerWidth;

  medidasLentes = [
    { label: 'PCI156C60', value: 'PCI156C60' },
    { label: 'PCF60', value: 'PCF60' },
    { label: 'IO_FLEX', value: 'IO_FLEX' },
    { label: 'SAF6125', value: 'SAF6125' },
    { label: 'OCUFLEX', value: 'OCUFLEX' },
    { label: 'Otro', value: '' },
  ];

  filterModels(model: string) {
    const models = this.medidasLentes.map((m) => m.label);
    return models.some((m) => m === model);
  }

  ngOnInit(): void {
    window.addEventListener(
      'resize',
      () => (this.screenWidth = window.innerWidth)
    );
  }
}
