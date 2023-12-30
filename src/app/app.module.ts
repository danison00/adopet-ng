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
import { ArrowCloseComponent } from './components/lupa-btn/lupa-btn.component';
import { BtnControlComponent } from './pages/home_page/fragments/btn-control/btn-control.component';
import { ModalBlankComponent } from './components/modal-blank/modal-blank.component';
import { PetDetailsModalComponent } from './pages/home_page/fragments/content-modal-pet-details/pet-details-modal.component';
import { ContentModalSuccessfulAdoptionComponent } from './pages/home_page/fragments/content-modal-successful-register/content-modal-successful-register.component';
import { ContentModalSuccessfullAdopteComponent } from './pages/home_page/fragments/content-modal-successfull-adoption/content-modal-successfull-adoption.component';
import { MenuHeaderComponent } from './components/header/fragments/menu-meus-pets/menu-meus-pets.component';
import { MenuWindowComponent } from './pages/home_page/fragments/menu-window/menu-window.component';
import { MyPetsToDonatePageComponent } from './pages/my-pets-to-donate-page/my-pets-to-donate-page.component';
import { HomeOutletComponent } from './pages/home-outlet/home-outlet.component';
import { TouchInvisibleComponent } from './components/touch-invisible/touch-invisible.component';
import { ModalDeleteConfirmComponent } from './pages/my-pets-to-donate-page/fragments/modal-delete-confirm/modal-delete-confirm.component';
import { DonatePetPageComponent } from './pages/donate-pet-page/donate-pet-page.component';

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
    ArrowCloseComponent,
    BtnControlComponent,
    ModalBlankComponent,
    PetDetailsModalComponent,
    ContentModalSuccessfulAdoptionComponent,
    ContentModalSuccessfullAdopteComponent,
    MenuHeaderComponent,
    MenuWindowComponent,
    MyPetsToDonatePageComponent,
    HomeOutletComponent,
    TouchInvisibleComponent,
    ModalDeleteConfirmComponent,
    DonatePetPageComponent,
    
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
