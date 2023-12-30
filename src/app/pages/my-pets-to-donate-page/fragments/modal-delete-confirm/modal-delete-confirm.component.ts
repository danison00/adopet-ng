import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete-confirm',
  templateUrl: './modal-delete-confirm.component.html',
  styleUrls: ['./modal-delete-confirm.component.scss']
})
export class ModalDeleteConfirmComponent {

  @Input() open = true;
  @Output() eventClickClose = new EventEmitter<void>()
  @Output() eventClickConfirm = new EventEmitter<void>()


}
