import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate-pet-page',
  templateUrl: './donate-pet-page.component.html',
  styleUrls: ['./donate-pet-page.component.scss']
})
export class DonatePetPageComponent {

  form: FormGroup;
  modalRegisterSuccess = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      imagem: [null, Validators.required],
      especie: ['', Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      idade: [null, [Validators.required]],
      sexo: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      caracteristicas: ['', Validators.required],
      castrado: [false, Validators.required],
      cuidadosEspeciais: [false, Validators.required],
    });
  }

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

  onEnviar() {

    if (this.form.invalid) {
      return
    }
    this.modalRegisterSuccess = true;
    console.log("enviando...");
    console.log(this.form.value);
    
  }
  maskAge(){
    let age = parseInt(this.form.get('idade')?.value)
    
    if(age < 0 ){
      this.form.patchValue({idade: 0})
      return;
    }
    if(age > 20 ){
      this.form.patchValue({idade: 20})
      return;
    }

    
  }

}
