import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-pet-details-modal',
  templateUrl: './pet-details-modal.component.html',
  styleUrls: ['./pet-details-modal.component.scss']
})
export class PetDetailsModalComponent {

  @Input() pet!: Animal;
  @Input() showBtn = true;
  @Output() eventClose = new EventEmitter<void>();
  @Output() eventInterest = new EventEmitter<void>();


  clickClose() {
    this.eventClose.emit()
  }
  clickInterest() {
    this.eventInterest.emit()
  }
}
