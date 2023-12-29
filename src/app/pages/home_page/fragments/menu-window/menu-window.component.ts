import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-window',
  templateUrl: './menu-window.component.html',
  styleUrls: ['./menu-window.component.scss']
})
export class MenuWindowComponent implements OnChanges {

  @Input() openMenu = true;
  openBox = false;
  @Output() clickEventCloseWindowMenu = new EventEmitter<void>();

  constructor(private router: Router) { }

  clickOpenBox() {
    this.openBox = !this.openBox;
  }
  clickCloseMenuAndRouting(router: string) {
    this.router.navigate([router]);
    this.clickEventCloseWindowMenu.emit();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.openMenu === false) this.openBox = false;
  }

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    const componentTop = document.getElementById('header');


    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0) {
        this.clickEventCloseWindowMenu.emit()
      }
    }
  }



}
