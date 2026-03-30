import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'ds-progress-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  steps = input(1);
  currentStep = input(0);
  labels = input<string[]>([]);

  get stepsArray(): number[] {
    return Array.from({ length: this.steps() }, (_, i) => i);
  }

  get progressPercent(): number {
    if (this.steps() <= 1) return 100;
    return (this.currentStep() / (this.steps() - 1)) * 100;
  }
}
