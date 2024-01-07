import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { HomeComponent } from './pages/home_page/home/home.component';
import { MyPetsToDonatePageComponent } from './pages/my-pets-to-donate-page/my-pets-to-donate-page.component';
import { HomeOutletComponent } from './pages/home-outlet/home-outlet.component';
import { PetRegisterToDonatePage } from './pages/pet-register-to-donate-page/pet-register-to-donate-page';
import { UserRegisterPageComponent } from './pages/user-register-page/user-register-page.component';
import { MyPetsInterestPageComponent } from './pages/my-pets-interest-page/my-pets-interest-page.component';

const routes: Routes = [
  { path: "", component: AdopetComponent },
  { path: "login", component: LoginComponent },
  { path: "registrar-usuario", component: UserRegisterPageComponent },
  {
    path: "home", component: HomeOutletComponent, children: [
      { path: "", component: HomeComponent },
      { path: "meus-pets/para-adocao", component: MyPetsToDonatePageComponent },
      { path: "meus-pets/meu-interesse", component: MyPetsInterestPageComponent },
      { path: "doar-pet", component: PetRegisterToDonatePage },
      { path: "edit-pet/:id", component: PetRegisterToDonatePage }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

