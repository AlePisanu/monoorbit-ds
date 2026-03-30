import { Component, forwardRef, ChangeDetectionStrategy, input, output, model } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ds-checkbox',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements ControlValueAccessor {
  uniqueId = input('');
  label = input('');
  isDisabled = model(false);

  valueChange = output<boolean>();

  checked = false;

  private onChange: (val: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  toggle(): void {
    if (this.isDisabled()) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.valueChange.emit(this.checked);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: boolean): void {
    this.checked = !!val;
  }

  registerOnChange(fn: (val: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
