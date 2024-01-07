import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'modal-successful-register',
  templateUrl: './modal-successful-register.component.html',
  styleUrls: ['./modal-successful-register.component.scss']
})
export class ContentModalSuccessfulAdoptionComponent {


  @Output() eventClose = new EventEmitter<void>();
  @Input() pet!: string;
  @Input() open = false;
  clickCloseEvent() {
    this.eventClose.emit();
  }
}
