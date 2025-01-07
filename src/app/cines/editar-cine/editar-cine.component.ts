import { Component, Input } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  standalone: false,
  
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

  @Input()
  modelo : cineDTO = { nombre : "9 de Octubre",
                       latitud: -2.1339305069034213,
                       longitud: -79.90278124809267
                     };

  guardarCambios(cine : cineCreacionDTO) 
  {
      console.log(cine);
  }
}
