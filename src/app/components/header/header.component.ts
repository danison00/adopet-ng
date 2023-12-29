import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() btnLogout = false;

  @Input() openMenuMeusPets = false;
  @Output() openMenuMeuspetsEvent = new EventEmitter<void>();
  @Output() closeMenuMeuspetsEvent = new EventEmitter<void>();
  @Output() eventClickOpenWindowMenu = new EventEmitter<void>();




  constructor(private router: Router) { }
  onClickLogin() {
    this.router.navigate(["/login"]);
  }
  onClickLogout() {
    this.router.navigate(["/login"]);
  }
  clickOpenMenuMeusPets() {
    
    this.openMenuMeusPets = !this.openMenuMeusPets;
    this.openMenuMeuspetsEvent.emit();

  }
  clickCloseMenuMeusPets(){
    this.closeMenuMeuspetsEvent.emit();
  }
  clickOpenWindowMenu(){
    this.eventClickOpenWindowMenu.emit();
  }
  @HostListener('window:scroll', ['$event'])
  private onScroll(event: Event): void {
    const componentTop = document.getElementById('header');
    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0){

        this.openMenuMeusPets = this.openMenuMeusPets = false;
      }

    }
  }
}
