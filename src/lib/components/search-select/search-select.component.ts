import { Component, forwardRef, ChangeDetectionStrategy, HostListener, ElementRef, input, output, model } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export interface DsOption {
  value: string;
  label: string;
}

@Component({
  selector: 'ds-search-select',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SearchSelectComponent),
    multi: true
  }],
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss']
})
export class SearchSelectComponent implements ControlValueAccessor {
  uniqueId = input('');
  label = input('');
  placeholder = input('Search...');
  options = input<DsOption[]>([]);
  isRequired = input(false);
  isDisabled = model(false);
  maxVisible = input(6);

  optionSelected = output<string>();

  searchText = '';
  isOpen = false;
  filteredOptions: DsOption[] = [];
  activeIndex = -1;

  private onChange: (val: string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.activeIndex = -1;
    }
  }

  onSearchInput(): void {
    this.isOpen = true;
    this.activeIndex = -1;
    this.filteredOptions = this.options()
      .filter(o => o.label.toLowerCase().includes(this.searchText.toLowerCase()))
      .slice(0, this.maxVisible());
  }

  onFocus(): void {
    this.isOpen = true;
    this.activeIndex = -1;
    this.filteredOptions = this.options().slice(0, this.maxVisible());
  }

  onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.onFocus();
        }
        this.activeIndex = Math.min(this.activeIndex + 1, this.filteredOptions.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
        break;
      case 'Enter':
        event.preventDefault();
        if (this.activeIndex >= 0 && this.activeIndex < this.filteredOptions.length) {
          this.selectOption(this.filteredOptions[this.activeIndex]);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        this.activeIndex = -1;
        break;
    }
  }

  selectOption(option: DsOption): void {
    this.searchText = option.label;
    this.isOpen = false;
    this.activeIndex = -1;
    this.onChange(option.value);
    this.optionSelected.emit(option.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  writeValue(val: string): void {
    const found = this.options().find(o => o.value === val);
    this.searchText = found ? found.label : val ?? '';
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
