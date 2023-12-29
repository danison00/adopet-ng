import { LocationStrategy } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-meus-pets',
  templateUrl: './menu-meus-pets.component.html',
  styleUrls: ['./menu-meus-pets.component.scss']
})
export class MenuHeaderComponent {

  @Output() eventCloseMenu = new EventEmitter<void>();

  @Input() openMenu = false;

  constructor(private router: Router){}

  closeMenuAndRouter(router: String){
    this.router.navigate([router]);
    this.eventCloseMenu.emit();
  }
}
