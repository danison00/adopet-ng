import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

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
    this.closeMenuMeuspetsEvent.emit;
  }
  clickOpenMenu(){

  }
}
