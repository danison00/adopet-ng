import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdopetComponent } from './pages/adopet/adopet.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home_page/home/home.component';
import { BoxSearchComponent } from './pages/home_page/fragments/box-search/box-search.component';
import { CardPerfilAnimalComponent } from './pages/home_page/fragments/card-perfil-animal/card-perfil-animal.component';
import { ArrowCloseComponent } from './components/lupa-btn/lupa-btn.component';
import { BtnControlComponent } from './pages/home_page/fragments/btn-control/btn-control.component';
import { ModalBlankComponent } from './components/modal-blank/modal-blank.component';
import { PetDetailsModalComponent } from './pages/home_page/fragments/content-modal-pet-details/pet-details-modal.component';
import { ContentModalSuccessfulAdoptionComponent } from './pages/pet-register-to-donate-page/fragments/modal-successful-register/modal-successful-register.component';
import { ContentModalSuccessfullAdopteComponent } from './pages/home_page/fragments/content-modal-successfull-adoption/content-modal-successfull-adoption.component';
import { MenuHeaderComponent } from './components/header/fragments/menu-meus-pets/menu-meus-pets.component';
import { MenuWindowComponent } from './pages/home_page/fragments/menu-window/menu-window.component';
import { MyPetsToDonatePageComponent } from './pages/my-pets-to-donate-page/my-pets-to-donate-page.component';
import { HomeOutletComponent } from './pages/home-outlet/home-outlet.component';
import { TouchInvisibleComponent } from './components/touch-invisible/touch-invisible.component';
import { ModalDeleteConfirmComponent } from './pages/my-pets-to-donate-page/fragments/modal-delete-confirm/modal-delete-confirm.component';
import { PetRegisterToDonatePage } from './pages/pet-register-to-donate-page/pet-register-to-donate-page';
import { UserRegisterPageComponent } from './pages/user-register-page/user-register-page.component';
import { MaskAgePipe } from './shared/pipes/mask-age.pipe';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MyPetsInterestPageComponent } from './pages/my-pets-interest-page/my-pets-interest-page.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';

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
    PetRegisterToDonatePage,
    UserRegisterPageComponent,
    MaskAgePipe,
    MyPetsInterestPageComponent,
    LoadingPageComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    HttpClientModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
