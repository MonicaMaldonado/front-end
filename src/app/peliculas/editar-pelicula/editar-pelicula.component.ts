import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  standalone: false,
  
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  modelo : PeliculaDTO = { titulo: 'Stich', trailer: 'abc', enCines: true, resumen:'cualquier coasa',
    fechaLanzamiento: new Date(), poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeR4tuy_CeHMX1EQPe9rt-dWolHPuvN5WCg&s'
  }

  guardarCambios(pelicula : PeliculaCreacionDTO) {
     
    console.log(pelicula);
  }

}
