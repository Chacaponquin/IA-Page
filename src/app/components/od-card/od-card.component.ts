import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-od-card',
  templateUrl: './od-card.component.html',
  styleUrls: ['./od-card.component.css'],
})
export class OdCardComponent implements OnInit {
  @Input() odInf: String = '';

  constructor() {}

  screenWidth: number = window.innerWidth;

  medidasLentes = [
    {
      label: 'UNVLens (PC156C60 / 2) ~ 118.2',
      value: 118.2,
    },
    {
      label: 'UVLens (PCF60) ~ 118.4',
      value: 118.4,
    },
    {
      label: 'Ioglex ~ 118.0',
      value: 118.0,
    },
    {
      label: 'SAF 6125 ~ 118.0',
      value: 118.0,
    },
    {
      label: 'Ocuflax ~ 118.0',
      value: 118.0,
    },
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
