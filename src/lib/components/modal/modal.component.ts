import {
  Component, ChangeDetectionStrategy, HostListener, ViewChild, ElementRef,
  input, output, effect
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ds-modal',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  isOpen = input(false);
  title = input('');
  showHeader = input(true);
  showFooter = input(true);
  closeOnOverlay = input(true);
  size = input<'sm' | 'md' | 'lg'>('md');

  closed = output<void>();

  @ViewChild('dialogEl') dialogEl!: ElementRef<HTMLElement>;

  private previousFocus: HTMLElement | null = null;

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.previousFocus = document.activeElement as HTMLElement;
        setTimeout(() => this.setInitialFocus());
      } else if (this.previousFocus) {
        this.previousFocus.focus();
        this.previousFocus = null;
      }
    });
  }

  close(): void {
    this.closed.emit();
  }

  onOverlayClick(): void {
    if (this.closeOnOverlay()) {
      this.close();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close();
      return;
    }

    if (event.key !== 'Tab') return;

    const dialog = this.dialogEl?.nativeElement;
    if (!dialog) return;

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  private setInitialFocus(): void {
    const dialog = this.dialogEl?.nativeElement;
    if (!dialog) return;

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) {
      focusable[0].focus();
    }
  }
}
