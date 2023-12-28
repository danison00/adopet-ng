import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu-window',
  templateUrl: './menu-window.component.html',
  styleUrls: ['./menu-window.component.scss']
})
export class MenuWindowComponent implements OnChanges {

  @Input() open = true;

  openBox = false;
  clickOpenBox() {
    this.openBox = !this.openBox;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.open === false) this.openBox = false;
    console.log("aaa");

  }

}
