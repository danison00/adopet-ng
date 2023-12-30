import { Component, HostListener } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { UtilService } from 'src/app/service/util.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  boxSearchVisible = false;
  openModalPetDetails = false;
  openModalSuccessfulAdoption = false;
  openMenuMeusPets = false;

  pets!: Animal[];

  pet: Animal = {
    caracteristica: "",
    castrado: true,
    cuidadosEspeciais: false,
    descricao: "",
    idade: 0,
    imgPath: "",
    nome: "",
    sexo: ""

  }
  constructor(private util: UtilService) {
    this.pets = util.dogs;
  }

  onClickCard(pet: Animal) {
    this.pet = pet;
    this.openModalPetDetails = true;
  }

  getPositionScroll(): any {
    return document.getElementById('header')?.getBoundingClientRect().top;
  }
 
  async delay() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }
  
  async scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    while (true) {
      if (this.getPositionScroll() === 0) break;
      await this.delay();
    }
  }

  async onLupaClick() {
    await this.scrollTop();
    this.boxSearchVisible = !this.boxSearchVisible;
  }

  clickInterestIntPet() {
    this.openModalPetDetails = false;
    this.openModalSuccessfulAdoption = true;
  }
  async closeAll() {

    this.boxSearchVisible
      = this.openModalPetDetails
      = this.openModalPetDetails
      = this.openModalSuccessfulAdoption
      = this.openMenuMeusPets
      = false;
  }

}
