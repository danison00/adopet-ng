import { Component } from '@angular/core';

@Component({
  selector: 'app-home-outlet',
  templateUrl: './home-outlet.component.html',
  styleUrls: ['./home-outlet.component.scss']
})
export class HomeOutletComponent {

  openMenuMeusPets = false;
  openWindowMenu = false;
  touchInvisible = true;

  clickOpenWindowMenu(open: boolean) {
    this.openWindowMenu = open;
  }
  closeAll() {
    this.openMenuMeusPets =
      this.openWindowMenu =
      this.touchInvisible = false;
  }

  
}
