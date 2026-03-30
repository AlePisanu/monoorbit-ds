import { Component, ChangeDetectionStrategy, input, model } from '@angular/core';

@Component({
  selector: 'ds-accordion',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  title = input('');
  isOpen = model(false);

  toggle(): void {
    this.isOpen.update(v => !v);
  }
}
