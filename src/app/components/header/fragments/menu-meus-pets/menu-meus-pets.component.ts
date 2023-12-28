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

}
