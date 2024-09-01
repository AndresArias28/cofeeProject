import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {        

  registroForm!: FormGroup ;



 
  dias: number[] = Array.from({length: 31}, (_, i) => i + 1);
  meses = [
    {value: 1, nombre: 'Enero'}, {value: 2, nombre: 'Febrero'}, {value: 3, nombre: 'Marzo'},
    {value: 4, nombre: 'Abril'}, {value: 5, nombre: 'Mayo'}, {value: 6, nombre: 'Junio'},
    {value: 7, nombre: 'Julio'}, {value: 8, nombre: 'Agosto'}, {value: 9, nombre: 'Septiembre'},
    {value: 10, nombre: 'Octubre'}, {value: 11, nombre: 'Noviembre'}, {value: 12, nombre: 'Diciembre'}
  ];
  anios: number[] = Array.from({length: 84}, (_, i) => new Date().getFullYear() - i);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      anio: ['', Validators.required],
      ciudad: ['', Validators.required],
      corregimiento: ['', Validators.required],
      vereda: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
      // Aquí puedes agregar la lógica para enviar los datos al servidor
    }
  }

}
