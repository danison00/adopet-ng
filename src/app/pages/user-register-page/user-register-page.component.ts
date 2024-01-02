import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.scss']
})
export class UserRegisterPageComponent {

  step = 0;
  formRegisterUser!: FormGroup;

  constructor(fb: FormBuilder){
    this.formRegisterUser = fb.group({
      nome: ['',[Validators.required, Validators.minLength(5)]],
      idade: [null, Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
      rua: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required]

    });
  }
  next() {
    this.step = this.step + 1;
    this.managerSteps()
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
}
