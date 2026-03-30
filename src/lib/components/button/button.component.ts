import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      class="ds-btn"
      [ngClass]="[
        'ds-btn--' + variant(),
        'ds-btn--' + size(),
        block() ? 'ds-btn--block' : ''
      ]"
      [type]="type()"
      [disabled]="isDisabled() || isLoading()"
      (click)="clicked.emit($event)"
    >
      @if (isLoading()) {
        <span class="ds-btn__loader" aria-hidden="true"></span>
      }
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
    .ds-btn__loader {
      display: inline-flex;
      align-items: center;
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @media (prefers-reduced-motion: reduce) {
      .ds-btn__loader { animation: none; }
    }
  `]
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary' | 'accent' | 'ghost' | 'white'>('primary');
  size = input<'lg' | 'md' | 'sm' | 'xs'>('md');
  type = input<'button' | 'submit' | 'reset'>('button');
  isDisabled = input(false);
  isLoading = input(false);
  block = input(false);

  clicked = output<Event>();
}
