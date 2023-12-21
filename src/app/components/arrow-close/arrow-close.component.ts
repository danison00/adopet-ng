import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-arrow-close',
  templateUrl: './arrow-close.component.html',
  styleUrls: ['./arrow-close.component.scss']
})
export class ArrowCloseComponent {

  @Output() eventClick: EventEmitter<void> = new EventEmitter<void>(); 

  onClick(){
    this.eventClick.emit();
  }
}
