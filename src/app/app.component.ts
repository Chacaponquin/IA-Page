import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  kIndexes = [134.45, 234.12, 456.3, 123, 26];

  odCards = ['OD RIGHT', 'OD LEFT'];
}
