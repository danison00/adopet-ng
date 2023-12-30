import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { HomeComponent } from './pages/home_page/home/home.component';
import { MyPetsToDonatePageComponent } from './pages/my-pets-to-donate-page/my-pets-to-donate-page.component';
import { HomeOutletComponent } from './pages/home-outlet/home-outlet.component';
import { DonatePetPageComponent } from './pages/donate-pet-page/donate-pet-page.component';

const routes: Routes = [
  {path: "", component: AdopetComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeOutletComponent, children:[
    {path: "", component: HomeComponent},
    {path: "meus-pets/para-adocao", component: MyPetsToDonatePageComponent},
    {path: "doar-pet", component: DonatePetPageComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
