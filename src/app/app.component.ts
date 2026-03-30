import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly components = [
    'Button',
    'Input Field',
    'Checkbox',
    'Radio Button',
    'Search Select',
    'Accordion',
    'Tabs',
    'Modal',
    'Card',
    'Loader',
    'Progress Bar',
    'Scroll Top',
    'Drag & Drop',
    'Icon',
  ];
}
