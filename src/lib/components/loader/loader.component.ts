import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-loader',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isOverlay = input(false);
  size = input<'sm' | 'md' | 'lg'>('md');
  color = input<'primary' | 'accent' | 'white'>('primary');
  ariaLabel = input('Loading');
}
