import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-crear-pelicula',
  standalone: false,
  
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  guardarCambios(pelicula : PeliculaCreacionDTO)
  {
    console.log(pelicula);
  }
}
