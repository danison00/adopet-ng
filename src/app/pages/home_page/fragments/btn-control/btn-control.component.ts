import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-control',
  templateUrl: './btn-control.component.html',
  styleUrls: ['./btn-control.component.scss']
})
export class BtnControlComponent {



  @Output() eventClickNext = new EventEmitter<void>();
  @Output() eventClickBack = new EventEmitter<void>();

  clickNext(){
    this.eventClickNext.emit();
  }
  clickBack(){
    this.eventClickBack.emit();
  }
}
