import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { HomeComponent } from './pages/home_page/home/home.component';

const routes: Routes = [
  {path: "", component: AdopetComponent},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
