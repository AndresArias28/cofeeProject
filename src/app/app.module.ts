import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar/navbar.component';
import { InicioComponent } from './views/inicio/inicio/inicio.component';
import { RegistroComponent } from './views/registro/registro/registro.component';
import { ContactoComponent } from './views/contacto/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    RegistroComponent,
    ContactoComponent
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
