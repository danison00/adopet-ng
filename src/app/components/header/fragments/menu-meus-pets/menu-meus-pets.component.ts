import { LocationStrategy } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-meus-pets',
  templateUrl: './menu-meus-pets.component.html',
  styleUrls: ['./menu-meus-pets.component.scss']
})
export class MenuHeaderComponent {

  @Output() eventCloseMenu = new EventEmitter<void>();

  @Input() openMenu = false;
  clickEvent(event: MouseEvent) {
    if (event.target === event.currentTarget) {

      this.eventCloseMenu.emit();
    }
  }
  @HostListener('window:click', ['$event'])
  private onScroll(event: Event): void {

    if(!this.clickInMenu(event)){
      this.eventCloseMenu.emit();

    }

  }
  public clickInMenu(event: Event): boolean {
    let links = document.getElementsByClassName("link-menu-meus-pets");
    for (let i = 0; i < links.length; i++) {

      if (links.item(i) === event.target) {
        return true;
      } 

    }
    return false;
  }
}
