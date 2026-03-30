import { Component, forwardRef, ChangeDetectionStrategy, input, output, model } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ds-input-field',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputFieldComponent),
    multi: true
  }],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements ControlValueAccessor {
  uniqueId = input('');
  inputType = input<'text' | 'password' | 'email' | 'number' | 'tel'>('text');
  label = input('');
  placeholder = input('');
  isError = input(false);
  labelError = input('');
  isRequired = input(false);
  isDisabled = model(false);
  isReadOnly = input(false);
  maxLength = input<number | null>(null);
  helper = input('');
  showTick = input(false);
  isLabelVisible = input(true);
  isTextArea = input(false);
  textAreaRows = input(4);
  tooltip = input('');
  uppercase = input(false);

  helperAction = output<void>();

  value = '';
  showPassword = false;

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  get isPassword(): boolean {
    return this.inputType() === 'password';
  }

  get currentInputType(): string {
    if (this.isPassword) {
      return this.showPassword ? 'text' : 'password';
    }
    return this.inputType();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    let val = target.value;
    if (this.uppercase()) {
      val = val.toUpperCase();
    }
    this.value = val;
    this.onChange(val);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: string): void {
    this.value = val ?? '';
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
