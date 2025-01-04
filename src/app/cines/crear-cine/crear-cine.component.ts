import { Component } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  standalone: false,
  
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {


  guardarCambios(cine : cineCreacionDTO) 
  {
    console.log(cine);
  }

}
