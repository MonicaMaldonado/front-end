import { Component } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  standalone: false,
  
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {

  guardarCambios(actor : actorCreacionDTO)
  {
    console.log(actor);
  }
}
