import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-modal-successfull-adoption',
  templateUrl: './content-modal-successfull-adoption.component.html',
  styleUrls: ['./content-modal-successfull-adoption.component.scss']
})
export class ContentModalSuccessfullAdopteComponent {

  @Output() eventClose = new EventEmitter<void>();
  @Input() pet!: string;

  clickCloseEvent(){
    this.eventClose.emit();
  }
}
