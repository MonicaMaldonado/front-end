import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../utilidades';

@Component({
  selector: 'app-input-img',
  standalone: false,
  
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  imagenBase64 : string;

  @Input()
  urlImagenActual : string;
  
  @Output()
  archivoSeleccionado : EventEmitter<File> = new EventEmitter<File>();


  change(event) {
    if (event.target.files.length > 0) {
      const file : File = event.target.files[0];
      toBase64(file).then((value : string) => this.imagenBase64 = value)
      .catch(error => console.log(error));

      this.urlImagenActual = null;  
      this.archivoSeleccionado.emit(file);
    }
  }
}
