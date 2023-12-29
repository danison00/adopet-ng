import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})
export class BoxSearchComponent {

  animals = ['Cachorro', 'Gato', 'Cobra'];

  @Output() closeEvent = new EventEmitter<void>();

  @Input() open = false;

  onCloseClick(){
    this.closeEvent.emit()
  }
  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    const componentTop = document.getElementById('header');


    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0 && this.open) {
        this.closeEvent.emit()
      }
    }
  }
  
}
