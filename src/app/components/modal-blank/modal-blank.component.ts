import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-blank',
  templateUrl: './modal-blank.component.html',
  styleUrls: ['./modal-blank.component.scss']
})
export class ModalBlankComponent {

  @Input() open = false;

  @Output() eventCloseModal = new EventEmitter<void>();
  closeModal() {
    this.eventCloseModal.emit();
  }
  aa(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      
      this.eventCloseModal.emit();
    }    
  }

}
