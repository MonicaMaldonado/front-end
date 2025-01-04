import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  standalone: false,
  
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit {

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit : EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  constructor(private formBuilder : FormBuilder) {
  }
   //propiedad que representa cada uno de los campos del formulario
   form : FormGroup;//conjuto de campos de un formulario con sus configuraciones


   ngOnInit(): void {
     //configuramos el form group definido arriba con el form builder
     this.form = this.formBuilder.group({ //este es un objeto de javascript y cada una de las propiedades de este objeto va a represnetar un campo del formulario
       nombre: ['', {
         validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
       }] //el primer argumento del arreglo es el valor inicial que va a tener este campo nombre y el segundo valor es un objeto que tiene una propiedad llamada validators
     });

     if (this.modelo !== undefined) {
        this.form.patchValue(this.modelo); //con este metodo puedo pasar un objeto al formulario y el se encarga de matchear las propiedades del modelo con las propiedades del formulario
     }
   }
  
   
   obtenerErrorCampoNombre()  {
     var campo = this.form.get('nombre');
     if (campo.hasError('required')) {
       return 'El campo nombre es requerido';
     }
 
     if (campo.hasError('minlength')) {
       return 'La longitud minima es de 3 caracters';
     }
  
     if (campo.hasError('primeraLetraMayuscula')) {
       return campo.getError('primeraLetraMayuscula').mensaje;
     }
 
     return '';
 
   }

   guardarCambios() {
      this.submit.emit(this.form.value);
   }
 
}
