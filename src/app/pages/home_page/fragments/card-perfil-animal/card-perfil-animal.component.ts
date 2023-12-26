import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card-perfil-animal',
  templateUrl: './card-perfil-animal.component.html',
  styleUrls: ['./card-perfil-animal.component.scss']
})
export class CardPerfilAnimalComponent {

  @Input() animal: Animal = {
    imgPath: "/assets/img/cao-adoravel-olhando-para-cima-em-um-estudio.jpg",
    nome: "Francisco",
    castrado: true,
    cuidadosEspeciais: false,
    descricao: "um dog carinhoso, simpático e com muit energia.",
    sexo: "macho",
    caracteristica: "Carinhoso",
    idade: 5
  }
  @Output() eventClickcard = new EventEmitter<Animal>();
  clickCard(event: MouseEvent){
    this.eventClickcard.emit(this.animal);
    
  }
}
