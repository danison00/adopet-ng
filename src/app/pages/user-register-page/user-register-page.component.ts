import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs';
import { ExistsService } from 'src/app/service/exists.service';
import { HumanService } from 'src/app/service/human.service';

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
  forms!: FormGroup[];

  cpfAlreadyExists = false;
  usernameAlreadyExists = false;



  constructor(fb: FormBuilder, private existsServ: ExistsService, private humanServ: HumanService, private router: Router) {
    this.formDadosPessoais = fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      idade: [, Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.minLength(11)]]
    });
    this.formEndereco = fb.group({
      rua: ['', Validators.required],
      numero: [null, Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
    this.formLogin = fb.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      confirmarSenha: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.forms = [this.formDadosPessoais, this.formEndereco, this.formLogin];
  }
  next() {

    this.formDadosPessoais.valueChanges.subscribe({
      next: () => {
        this.cpfAlreadyExists = false;

      }
    });

    if (this.forms[this.step].valid) {

      if (this.step === 0 || this.step === 1) {
        this.cpfNonExists().subscribe({
          next: () => {
            this.step = this.step + 1;
            this.managerSteps()
          },
          error: (error) => {
            this.cpfAlreadyExists = true;
          }
        });
      }

    }
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
  cpfNonExists() {

    return this.existsServ.cpfExists(this.formDadosPessoais.get('cpf')?.value);
  }
  usernameNonExists() {

    return this.existsServ.usernameNonExists(this.formLogin.get('username')?.value)
  }
  sendForm() {

    this.formDadosPessoais.valueChanges.subscribe({
      next: () => {
        this.usernameAlreadyExists = false;

      }
    });

    const address = {
      street: this.formEndereco.get('rua')?.value,
      number: this.formEndereco.get('numero')?.value,
      neighborhood: this.formEndereco.get('bairro')?.value,
      cep: this.formEndereco.get('cep')?.value,
      city: this.formEndereco.get('cidade')?.value,
      state: this.formEndereco.get('estado')?.value
    };

    const human = {
      name: this.formDadosPessoais.get('nome')?.value,
      age: this.formDadosPessoais.get('idade')?.value,
      cpf: this.formDadosPessoais.get('cpf')?.value,
      telephone: this.formDadosPessoais.get('telefone')?.value,
      email: this.formDadosPessoais.get('email')?.value,
      adress: address
    };

    this.humanServ.createHuman(human).subscribe({
        next: ()=>{
          alert("conta criada!")
          this.router.navigate(['/login']);

        },
        error: (error)=>{
          alert("Erro")
        }
      });



  }
}