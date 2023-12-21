import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{
  @Input() placeholder = '';
  @Input() type = 'text';
  value!: any;
  
  @Input() options!: string[];
  @Input() labelSelect = "";
  @Input() labelCheckBox = "";

  constructor(){
  }
  ngOnInit(): void {
    if(this.type === "checkbox" ){
  
      this.value = false;
    }
  }
  
  setCheckBox(){
    this.value = !this.value;
  }
}
