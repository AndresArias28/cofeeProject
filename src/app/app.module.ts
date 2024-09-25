import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar/navbar.component';
import { InicioComponent } from './views/inicio/inicio/inicio.component';
import { RegistroComponent } from './views/registro/registro/registro.component';
import { ContactoComponent } from './views/contacto/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './views/footer/footer.component';
import { PersonalProfileComponent } from './views/personal-profile/personal-profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RegistroComponent,
    ContactoComponent,
    FooterComponent,
    PersonalProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//formulario tipo plantilla
    ReactiveFormsModule //formularios reactivos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
