import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log(form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
