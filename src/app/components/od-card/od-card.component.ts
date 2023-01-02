import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IModelIO } from 'src/app/app.component';

@Component({
  selector: 'app-od-card',
  templateUrl: './od-card.component.html',
  styleUrls: ['./od-card.component.css'],
})
export class OdCardComponent implements OnInit {
  @Input() odInf: string = '';
  @Input() parentForm: FormGroup = this.fb.group({});
  @Input() medidasLentes: IModelIO[] = [];

  constructor(private fb: FormBuilder) {}

  screenWidth: number = window.innerWidth;

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
