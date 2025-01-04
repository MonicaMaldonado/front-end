import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from '../../utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { actorCreacionDTO } from '../../actores/actor';

@Component({
  selector: 'app-crear-genero',
  standalone: false,
  
  templateUrl: './crear-genero.component.html',
  styleUrl: './crear-genero.component.css'
})
export class CrearGeneroComponent {

  constructor(private router:Router) {}

  guardarCambios(actor : actorCreacionDTO) 
  {
    console.log(actor);
  }




}
