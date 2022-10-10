import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-od-card',
  templateUrl: './od-card.component.html',
  styleUrls: ['./od-card.component.css'],
})
export class OdCardComponent implements OnInit {
  @Input() odInf: String = '';
  @Input() parentForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  screenWidth: number = window.innerWidth;

  medidasLentes = [
    { label: 'PCI156C60', value: 118.2 },
    { label: 'PCF60', value: 118.4 },
    { label: 'IO_FLEX', value: 118 },
    { label: 'SAF6125', value: 118 },
    { label: 'OCUFLEX', value: 118 },
  ];

  data = {
    longitud: 0,
    queratometria: 0,
    modelo: 0,
    refraccion: 0,
  };

  ngOnInit(): void {
    window.addEventListener(
      'resize',
      () => (this.screenWidth = window.innerWidth)
    );
  }
}
