import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content-modal-successful-register',
  templateUrl: './content-modal-successful-register.component.html',
  styleUrls: ['./content-modal-successful-register.component.scss']
})
export class ContentModalSuccessfulAdoptionComponent {


  @Output() eventClose = new EventEmitter<void>();
  @Input() pet!: string;

  clickCloseEvent(){
    this.eventClose.emit();
  }
}
