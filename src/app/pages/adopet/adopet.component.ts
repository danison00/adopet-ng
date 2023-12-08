import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopet',
  templateUrl: './adopet.component.html',
  styleUrls: ['./adopet.component.scss']
})
export class AdopetComponent {


  constructor(private router: Router){}

  onEventClick(){
    this.router.navigate(["login"]);
  }
}
