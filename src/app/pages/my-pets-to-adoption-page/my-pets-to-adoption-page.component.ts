import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-my-pets-to-adoption-page',
  templateUrl: './my-pets-to-adoption-page.component.html',
  styleUrls: ['./my-pets-to-adoption-page.component.scss']
})
export class MyPetsToAdoptionPageComponent {


  openModalPetDetails = false;
  modalDeleteConfirm = false;
  pet: Animal = {

    caracteristica: "",
    castrado: true,
    cuidadosEspeciais: false,
    descricao: "",
    idade: 17,
    imgPath: "",
    nome: "",
    sexo: ""
  };
  pets: Animal[] = [
    {
      id: 1,
      imgPath: 'https://media.istockphoto.com/id/1482199015/pt/foto/happy-puppy-welsh-corgi-14-weeks-old-dog-winking-panting-and-sitting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=XI-fFXTXEU4UbQtGwM_vWzBB4F17W4dlPtXL4wr2dmE=',
      nome: 'Max',
      sexo: 'Masculino',
      idade: 2,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Orelhas pontudas',
      descricao: 'Um buldogue brincalhão.'
    },
    {
      id: 2,
      imgPath: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/07/Dachshund-filhote-3.jpg',
      nome: 'Mia',
      sexo: 'Feminino',
      idade: 3,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Patas grandes',
      descricao: 'Uma pastor alemã inteligente.'
    },
    {
      id: 3,
      imgPath: 'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2023/04/topo-como-tirar-pelo-de-gato-do-sofa.jpg',
      nome: 'Charlie',
      sexo: 'Masculino',
      idade: 2,
      castrado: false,
      cuidadosEspeciais: false,
      caracteristica: 'Manchas pretas',
      descricao: 'Um dálmata amigável e energético.'
    },
    {
      id: 4,
      imgPath: 'https://www.petsupport.com.br/wp-content/uploads/2021/09/necessidades-dos-gatos-1-1024x576.jpg',
      nome: 'Lucy',
      sexo: 'Feminino',
      idade: 4,
      castrado: true,
      cuidadosEspeciais: false,
      caracteristica: 'Cauda peluda',
      descricao: 'Uma vira-lata adorável.'
    },
    {
      id: 5,
      imgPath: 'https://walac.pe/wp-content/uploads/2021/02/gato-marron_0.jpg',
      nome: 'Cooper',
      sexo: 'Masculino',
      idade: 2,
      castrado: false,
      cuidadosEspeciais: true,
      caracteristica: 'Olhos castanhos',
      descricao: 'Um golden retriever brincalhão.'
    }
  ];

  deletePet(pet: Animal) {
    this.pet = pet;
    this.modalDeleteConfirm = true;
  }
  confirmDelete(){
    this.pets = this.pets.filter(pet => pet.id !== this.pet.id);
    this.modalDeleteConfirm = false;

  }

  viewPetDetails(pet: Animal) {
    this.pet = pet;
    this.openModalPetDetails = true;
  }
}
