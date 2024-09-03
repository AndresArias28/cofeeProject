import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio/inicio.component';
import { RegistroComponent } from './views/registro/registro/registro.component';
import { ContactoComponent } from './views/contacto/contacto/contacto.component';
import { PersonalProfileComponent } from './views/personal-profile/personal-profile.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'profile-main', component: PersonalProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
