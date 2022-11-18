import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  @Output() changeMode = new EventEmitter();
  @Input() mode: boolean = false;

  constructor() {}

  modeText() {
    return this.mode ? 'LIGHT' : 'DARK';
  }

  ngOnInit(): void {}
}
