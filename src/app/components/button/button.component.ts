import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text = "Button";
  @Input() type: "primary" | "secondary" | 'terciary' |
    'ligth-blue' | 'ligth-orange' | 'ligth-red' | 'gray' = "primary";
  @Input() hoverScale = true;
  @Input() width100: false | true = false;
  @Input() bg: 'dark-blue' | 'blue' | 'none' = 'none';
  @Input() spinner = false;
  @Input() clickToSpinner = false;

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  emittClick() {
    if(this.clickToSpinner) this.spinner = true;
    this.clickEvent.emit();
  }
}
