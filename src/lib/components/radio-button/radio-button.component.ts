import { Component, forwardRef, ChangeDetectionStrategy, input, model } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ds-radio-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
  }],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements ControlValueAccessor {
  uniqueId = input('');
  name = input('');
  label = input('');
  radioValue = input('');
  isDisabled = model(false);

  selectedValue = '';

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  get isChecked(): boolean {
    return this.selectedValue === this.radioValue();
  }

  select(): void {
    if (this.isDisabled()) return;
    this.selectedValue = this.radioValue();
    this.onChange(this.radioValue());
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: string): void {
    this.selectedValue = val;
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
