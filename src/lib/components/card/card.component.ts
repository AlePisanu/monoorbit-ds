import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'ds-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  imageUrl = input('');
  imageAlt = input('');
  title = input('');
  description = input('');
  layout = input<'vertical' | 'horizontal'>('vertical');
  shadow = input(true);
  compact = input(false);
}
