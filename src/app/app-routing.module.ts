import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { HomeComponent } from './pages/home_page/home/home.component';
import { MyPetsToAdoptionPageComponent } from './pages/my-pets-to-adoption-page/my-pets-to-adoption-page.component';

const routes: Routes = [
  {path: "", component: AdopetComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, children:[
    {path: "meus-pets", component: MyPetsToAdoptionPageComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
