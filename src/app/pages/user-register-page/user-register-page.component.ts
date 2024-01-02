import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.scss']
})
export class UserRegisterPageComponent {

  step = 0;
  formDadosPessoais!: FormGroup;
  formEndereco!: FormGroup;
  formLogin!: FormGroup;
  forms!: FormGroup[] ;


  constructor(fb: FormBuilder) {
    this.formDadosPessoais = fb.group({
      nome: ['Danison', [Validators.required, Validators.minLength(5)]],
      idade: [24, Validators.required],
      cpf: ['02157378295', Validators.required],
      email: ['Dan@email', [Validators.required, Validators.email]],
      telefone: ['984733208', Validators.required]
    });
    this.formEndereco = fb.group({
      rua: ['', Validators.required],
      numero: [null, Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
    this.formLogin = fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
    this.forms = [this.formDadosPessoais, this.formEndereco, this.formLogin];
  }
  next() {
    
    if(this.forms[this.step].valid){
      this.step = this.step + 1;
      this.managerSteps()
      return;
    }

    this.forms[this.step]

  }
  back() {
    this.step = this.step - 1;
    this.managerSteps()
  }

  managerSteps() {

    const steps = [
      document.getElementById('step-one') as HTMLInputElement,
      document.getElementById('step-two') as HTMLInputElement,
      document.getElementById('step-three') as HTMLInputElement
    ];

    if (this.step >= 0 && this.step < steps.length) {
      const currentStep = steps[this.step];
      if (currentStep)
        currentStep.checked = true;

    }
  }
  sendForm() {
    if(this.formLogin.valid){
      console.log("enviando...");
      return;
    }
    console.log("formulário inválido");
    
  }
}
