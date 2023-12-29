import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lupa-btn',
  templateUrl: './lupa-btn.component.html',
  styleUrls: ['./lupa-btn.component.scss']
})
export class ArrowCloseComponent {

  @Output() eventClick: EventEmitter<void> = new EventEmitter<void>(); 

  onClick(){
    this.eventClick.emit();
  }
}
