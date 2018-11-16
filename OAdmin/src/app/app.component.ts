import { Component } from '@angular/core';
import { Globals } from './shared/globals';

@Component({
  selector: 'boo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OAdmin';

  constructor(public globals: Globals) {

  }
}
