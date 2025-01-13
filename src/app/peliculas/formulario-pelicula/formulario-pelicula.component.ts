import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';
import { MultipleSelectorModel } from '../../utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  standalone: false,
  
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css'
})
export class FormularioPeliculaComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder) {}

  form : FormGroup
  
  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();
  
  @Input()
  modelo: PeliculaDTO;

  generosNoSeleccionados : MultipleSelectorModel[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Accion'},
    {llave: 3, valor: 'Comedia'}
  ];

  generosSeleccionados : MultipleSelectorModel[] = [];


  cinesNoSeleccionados : MultipleSelectorModel[] = [
    { llave: 1, valor: 'Supercines 9 de octubre'},
    { llave: 2, valor: 'Mall del Sol'},
    { llave: 3, valor: 'El Dorado' } 
  ];

  cinesSeleccionados : MultipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: ['', {
        validators: [Validators.required]
      }],
      resumen : '',
      enCines : false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId: ''
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios()
  {
    console.log(this.generosSeleccionados);
    const generosId = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosId);

    const cinesIds = this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesId').setValue(cinesIds);

    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo : File)
  {
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto)
  {
    this.form.get('resumen').setValue(texto);
  }

}
