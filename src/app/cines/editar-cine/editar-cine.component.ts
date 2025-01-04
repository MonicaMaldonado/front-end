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
  modelo : cineDTO = { nombre : "9 de Octubre"};

  guardarCambios(cine : cineCreacionDTO) 
  {
      console.log(cine);
  }
}
