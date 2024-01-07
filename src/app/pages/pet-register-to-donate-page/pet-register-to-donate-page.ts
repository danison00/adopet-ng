import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'pet-register-to-donate-page',
  templateUrl: './pet-register-to-donate-page.html',
  styleUrls: ['./pet-register-to-donate-page.scss']
})
export class PetRegisterToDonatePage implements OnInit {

  form: FormGroup;
  modalRegisterSuccess = false;
  @Input() pet!: Animal;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private petServ: PetService) {
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
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.petServ.findById(parseInt(id)).subscribe({
        next: (pet) => {
          console.log(pet);
          
          if (pet) {

            this.form.setValue({
              imagem: pet.imgPath,
              especie: pet.especie,
              nome: pet.nome,
              idade: pet.idade,
              sexo: pet.sexo,
              cidade: "",
              estado: "",
              caracteristicas: pet.caracteristica,
              castrado: pet.castrado,
              cuidadosEspeciais: pet.cuidadosEspeciais,
            })
          }
        }
      })
    }


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
    console.log(this.pet);

    if (this.form.invalid) {
      return
    }
    this.modalRegisterSuccess = true;
    console.log("enviando...");
    console.log(this.form.value);

  }

}
