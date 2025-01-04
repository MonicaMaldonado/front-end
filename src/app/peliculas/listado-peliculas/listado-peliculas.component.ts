import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: false,
  
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent  {


  @Input()
  peliculas;

  remover(indicePelicula: number): void{
    this.peliculas.splice(indicePelicula, 1);
  }

}
