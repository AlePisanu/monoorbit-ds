import { Component, forwardRef, ChangeDetectionStrategy, input, output, model } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export interface DsFileData {
  name: string;
  size: string;
  type: string;
  base64: string;
}

@Component({
  selector: 'ds-drag-drop',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DragDropComponent),
    multi: true
  }],
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements ControlValueAccessor {
  title = input('Drop files here or click to upload');
  isDisabled = model(false);
  accept = input('');
  maxSizeMb = input(5);

  fileSelected = output<DsFileData>();

  file: DsFileData | null = null;
  isDragging = false;
  error = '';

  private onChange: (val: DsFileData | null) => void = () => {};
  private onTouched: () => void = () => {};

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleFile(files[0]);
    }
  }

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFile(input.files[0]);
    }
  }

  removeFile(): void {
    this.file = null;
    this.onChange(null);
  }

  private handleFile(file: File): void {
    this.error = '';
    const sizeMb = file.size / (1024 * 1024);
    if (sizeMb > this.maxSizeMb()) {
      this.error = `File too large. Max size: ${this.maxSizeMb()}MB`;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileData: DsFileData = {
        name: file.name,
        size: this.formatBytes(file.size),
        type: file.type,
        base64: reader.result as string
      };
      this.file = fileData;
      this.onChange(fileData);
      this.fileSelected.emit(fileData);
    };
    reader.readAsDataURL(file);
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }

  writeValue(val: DsFileData | null): void {
    this.file = val;
  }

  registerOnChange(fn: (val: DsFileData | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
}
