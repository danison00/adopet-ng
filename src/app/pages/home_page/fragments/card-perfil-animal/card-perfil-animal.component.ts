import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card-perfil-animal',
  templateUrl: './card-perfil-animal.component.html',
  styleUrls: ['./card-perfil-animal.component.scss']
})
export class CardPerfilAnimalComponent {

  animal: Animal = {
    nome: "Francisco",
    caracteristica: "Carinhoso",
    idade: 5
  }
}
