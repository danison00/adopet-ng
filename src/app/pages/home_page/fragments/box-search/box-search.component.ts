import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})
export class BoxSearchComponent {

  @Output() closeEvent = new EventEmitter<void>();
  @Input() open = false;

  petsMaisComuns: string[] = [];
  constructor(util: UtilService){
    this.petsMaisComuns = util.petsMaisComuns;
  }

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
