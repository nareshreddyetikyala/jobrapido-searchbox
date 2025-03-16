import { Component } from '@angular/core';
import { SearchboxComponent } from './searchbox/searchbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchboxComponent],
  template: `<app-searchbox></app-searchbox>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
