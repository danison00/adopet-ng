import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text="Button";
  @Input() type : "primary" | "secondary" | 'terciary' = "primary";
  @Input() width100 : false | true = false;
  @Input() bg : 'dark-blue' | 'blue' | 'none' = 'none';

  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  emittClick(){
    this.clickEvent.emit();
  }
}
