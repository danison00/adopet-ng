import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() btnLogout = false;

  openMenu = false;

  constructor(private router: Router) { }
  onClickLogin() {
    this.router.navigate(["/login"]);
  }
  onClickLogout() {
    this.router.navigate(["/login"]);
  }
  clickOpenMenu() {
    this.openMenu = !this.openMenu;
  }
}
