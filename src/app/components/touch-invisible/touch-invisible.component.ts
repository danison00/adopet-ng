import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-touch-invisible',
  templateUrl: './touch-invisible.component.html',
  styleUrls: ['./touch-invisible.component.scss']
})
export class TouchInvisibleComponent {

  @Output() eventClick = new EventEmitter<void>();

  @Input() open = false;


  onEventClick(){
    this.eventClick.emit();
  }
}
