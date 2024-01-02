import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/service/util.service';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})
export class BoxSearchComponent {

  @Output() closeEvent = new EventEmitter<void>();
  @Input() open = false;
  formSearch!: FormGroup;



  petsMaisComuns: string[] = [];
  constructor(util: UtilService, fb: FormBuilder){

    this.formSearch = fb.group({
      especie: [''],
      sexo: [''],
      idadeInicial: [null],
      idadeFinal: [null],
      castrado: [false],
      cuidadosEspeciais: [false]
    });

    this.petsMaisComuns = util.petsMaisComuns;
  }

  onCloseClick(){
    this.closeEvent.emit()
  }
  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    const componentTop = document.getElementById('header');


    if (componentTop) {
      if (componentTop.getBoundingClientRect().top < 0 && this.open) {
        this.closeEvent.emit()
      }
    }
  }
  search(){
    console.log(this.formSearch.value);
    
  }
  maskAge(){

    let idadeInicial = this.formSearch.get('idadeInicial')
    let idadeFinal = this.formSearch.get('idadeFinal')

    if (parseInt(idadeInicial?.value) < 0) {
      idadeInicial?.setValue('0')
    }
    if (parseInt(idadeInicial?.value) > 20) {
      idadeInicial?.setValue('20')
    }

    if (parseInt(idadeFinal?.value) < 0) {
      idadeFinal?.setValue('0')
    }
    if (parseInt(idadeFinal?.value) > 20) {
      idadeFinal?.setValue('20')
    }
  }
 
}
