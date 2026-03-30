import { Component, HostListener, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'ds-scroll-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isVisible()) {
      <button
        class="ds-scroll-top"
        type="button"
        (click)="scrollToTop()"
        aria-label="Scroll to top"
      >
        Top
      </button>
    }
  `,
  styles: [`
    .ds-scroll-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      background-color: var(--ds-color-brand);
      color: var(--ds-color-inverse);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--ds-elevation-1);
      transition: all 0.2s ease-in-out;
      z-index: 9;
      animation: ds-fade-in 0.3s ease-out;
    }
    .ds-scroll-top:hover {
      transform: translateY(-2px);
      box-shadow: var(--ds-elevation-2);
    }
    .ds-scroll-top:focus-visible {
      outline: 2px solid var(--ds-color-brand);
      outline-offset: 2px;
    }

    @keyframes ds-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
      .ds-scroll-top {
        animation: none;
        transition: none;
      }
    }
  `]
})
export class ScrollTopComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 150);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

