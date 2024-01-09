import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/models/animal';
import { PetService } from 'src/app/service/pet.service';

@Component({
  selector: 'pet-register-to-donate-page',
  templateUrl: './pet-register-to-donate-page.html',
  styleUrls: ['./pet-register-to-donate-page.scss']
})
export class PetRegisterToDonatePage implements OnInit {

  form: FormGroup;
  formData: FormData = new FormData();
  modalRegisterSuccess = false;
  @Input() pet!: Animal;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router, private petServ: PetService) {

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


  onEnviar() {

    if (this.form.invalid || this.modalRegisterSuccess) return;


    this.formData.append('especie', this.form.get('especie')?.value);
    this.formData.append('nome', this.form.get('nome')?.value);
    this.formData.append('castrado', this.form.get('castrado')?.value);
    this.formData.append('cuidadosEspeciais', this.form.get('cuidadosEspeciais')?.value);
    this.formData.append('idade', this.form.get('idade')?.value);
    this.formData.append('sexo', this.form.get('sexo')?.value);
    this.formData.append('caracteristicas', this.form.get('caracteristicas')?.value);

    this.petServ.savePet(this.formData).subscribe({
      next: (e) => {
        this.modalRegisterSuccess = true;
      }
    });

  }
  changeInputImage(eve: any) {
    this.formData.append('imagem', eve.target.files[0])
  }
  redirect() {
    alert()
    this.router.navigate(['home'])
  }

}
