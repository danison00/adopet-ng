import { Component, HostListener } from '@angular/core';
import { bindCallback } from 'rxjs';
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
  pets!: Animal[];

  pet: Animal = {
    caracteristica: "Agitado",
    castrado: true,
    cuidadosEspeciais: false,
    descricao: "Doguinho muito dócil mas muito agitado",
    idade: 5,
    imgPath: "/assets/img/dog-francisco.svg",
    nome: "Francisco",
    sexo: "macho"

  }
  constructor(private util: UtilService) {
    this.pets = util.dogs;
  }

  onClickCard(pet: Animal) {
    this.pet = pet;
    this.openModalPetDetails = true;
  }

  async onArrowClick() {
    await this.scrollTop();
    this.setBoxSearchVisible();
  }
  @HostListener('window:scroll', ['$event'])
  private onScroll(event: Event): void {
    const componentTop = document.getElementById('closeBtn');
    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0)
        this.boxSearchVisible = !this.boxSearchVisible;

    }
  }
  getPositionScroll(): any {
    return document.getElementById('header')?.getBoundingClientRect().top;
  }


  setBoxSearchVisible() {

    this.boxSearchVisible = !this.boxSearchVisible;

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

  clickInterestIntPet() {
    this.openModalPetDetails = false;
    this.openModalSuccessfulAdoption = true;
  }


}
