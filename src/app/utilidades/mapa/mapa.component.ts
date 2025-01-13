import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, LeafletMouseEventHandlerFn, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { marked } from 'marked';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  standalone: false,
  
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements OnInit {
  
  @Input()
  coordenadasIniciales : Coordenada[] = [];

  @Output()
  coordenadaSeleccionada : EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud], this.markerOptions));
  }


  //Conjunto de opciones iniciales para el mapa
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(-2.1292338498422545, -79.90097034369984)
  };

  capas: Marker<any>[] = [];

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  manejarClick(event : LeafletMouseEvent) {

    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud});

    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));

    this.coordenadaSeleccionada.emit({latitud : latitud, longitud : longitud});
  }

}
