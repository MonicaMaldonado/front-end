import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: false,
  
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder,
            private location : Location, //servicio para trabajar con la url
            private actvatedRoute : ActivatedRoute //servicio para leer valores de la url
  ) {}
  
  form: FormGroup;

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Acción'},
    {id: 3, nombre: 'Comedia'}
  ];

  peliculas = [
    { titulo : 'Spider-Man', enCines: false, proximosEstrenos: true, generos: [1,2], poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { titulo : 'Moana', enCines: true, proximosEstrenos: false, generos: [3], poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    { titulo : 'Inception', enCines: false, proximosEstrenos: false, generos: [1,3], poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFLPbksMlrqX9LPKZPg47kvenStHP8U1vrow&s'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges  //este metodo retorna un observable, un observable permite suscribirnos a una secuencia de eventos que se van a disparar en el tiemp
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escribirParametrosBusquedaEnURL();
      })
  }

  private leerValoresURL()
  {
    this.actvatedRoute.queryParams.subscribe((params) => {
      var objeto : any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }

      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }

      if (params.proximosEstrenos) {
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);

    });
  }

  private escribirParametrosBusquedaEnURL() 
  {
      var queryString = [];

      var valoresFormulario = this.form.value;

      if (valoresFormulario.titulo) {
        queryString.push(`titulo=${valoresFormulario.titulo}`);
      }

      if (valoresFormulario.generoId != 0) {
        queryString.push(`generoId=${valoresFormulario.generoId}`);
      }

      if (valoresFormulario.proximosEstrenos){
        queryString.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
      }

      if (valoresFormulario.enCines){
        queryString.push(`enCines=${valoresFormulario.enCines}`);
      }

      this.location.replaceState('peliculas/buscar', queryString.join('&'));
  }

  buscarPeliculas(valores :any) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if (valores.generoId !== 0) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1)
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar() : void {
    this.form.patchValue(this.formularioOriginal);
    
  }

}
