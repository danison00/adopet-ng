import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})
export class BoxSearchComponent {

  animals = ['Cachorro', 'Gato', 'Cobra'];

  @Output() closeEvent = new EventEmitter<void>();


  onCloseClick(){
    this.closeEvent.emit()
  }
}
