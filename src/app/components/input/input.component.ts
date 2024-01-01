import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() isInvalid = false;
  value!: any;

  @Input() options!: string[];
  @Input() labelSelect = "";
  @Input() labelCheckBox = "";
  @Input() fullHeigth: 'false' | 'true' = 'false';

  onChange = (value: any) => { };
  onTouched = () => { };
  touched = false;
  disabled = false;


  change() {
    if (!this.disabled) {
      this.markAsTouched();
      this.onChange(this.value);
    }
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {

    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;

  }
  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }



}
