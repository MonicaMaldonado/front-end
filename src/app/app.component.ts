import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
  
  
  manejarRated(voto: number): void 
  {
    alert(voto);
  }

  duplicarNumero(valor :number):number{
    return valor * 2;
  }
}
