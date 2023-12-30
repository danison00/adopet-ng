import { Component } from '@angular/core';

@Component({
  selector: 'app-donate-pet-page',
  templateUrl: './donate-pet-page.component.html',
  styleUrls: ['./donate-pet-page.component.scss']
})
export class DonatePetPageComponent {


  petsMaisComuns = [
    'Cachorro',
    'Gato',
    'Peixe',
    'Pássaro',
    'Coelho',
    'Hamster',
    'Tartaruga',
    'Réptil',
    'Furão'
  ];

  onEnviar(){
    console.log("enviando...");
    
  }

}
