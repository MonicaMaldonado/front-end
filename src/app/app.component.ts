import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCine = this.peliculasEnCine = [
        {
          titulo: 'Spider-Man',
          fechaLanzamiento: new Date(),
          precio: 1400.99,
          poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeg_io7mrh-NGDxro5QuF0ODlAO00_R4JlkPZ-zUNhVMrki9yEB3wnMwmO18TlOZXh0k&usqp=CAU'
        },
        {
          titulo: 'Moana',
          fechaLanzamiento: new Date('2016-11-14'),
          precio: 300.99,
          poster: 'https://resizer.glanacion.com/resizer/v2/FEQBNKCWQFERFMTLKZT7IVDBK4.png?auth=597b673543ad7c7870ee40a44eb667eab2a3a791090a7732afbb0c2776f34feb&width=210&height=300&smart=true  '
        },
        
      ]
    },500)
  }
  title = 'front-end';
  ocultar = false;
 peliculasEnCine;
 peliculasProximosEstrenos = [
  
 ]
  
  manejarRated(voto: number): void 
  {
    alert(voto);
  }

  duplicarNumero(valor :number):number{
    return valor * 2;
  }
}
