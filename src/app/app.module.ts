import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home_page/home/home.component';
import { BoxSearchComponent } from './pages/home_page/fragments/box-search/box-search.component';
import { CardPerfilAnimalComponent } from './pages/home_page/fragments/card-perfil-animal/card-perfil-animal.component';
import { ArrowCloseComponent } from './components/arrow-close/arrow-close.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdopetComponent,
    ButtonComponent,
    LoginComponent,
    InputComponent,
    HomeComponent,
    BoxSearchComponent,
    CardPerfilAnimalComponent,
    ArrowCloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
