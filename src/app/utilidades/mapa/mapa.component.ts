import { Component } from '@angular/core';
import { latLng, LeafletMouseEvent, LeafletMouseEventHandlerFn, marker, Marker, tileLayer } from 'leaflet';
import { marked } from 'marked';

@Component({
  selector: 'app-mapa',
  standalone: false,
  
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {


  //Conjunto de opciones iniciales para el mapa
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(-2.1292338498422545, -79.90097034369984)
  };

  capas: Marker<any>[] = [];

  manejarClick(event : LeafletMouseEvent) {

    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud});

    this.capas.push(marker([latitud, longitud]));
  }

}
