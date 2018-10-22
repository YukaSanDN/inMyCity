import { Component, OnInit, ComponentRef } from '@angular/core';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import {icon, latLng, marker, tileLayer, Map} from 'leaflet';

declare let L;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public map: Map;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 5,
    center: latLng(46.879966, 21.726909)
  };

  layers = [
    marker([43.879966, 21.726909], {
      icon: icon({
        iconSize: [25, 31],
        iconAnchor: [13, 41],
        iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
        shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png'
      })
    }),
    marker([46.879966, 21.726909], {
      icon: icon({
        iconSize: [25, 31],
        iconAnchor: [13, 41],
        iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
        shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png'
      })
    })
  ];

  constructor() {
  }

  ngOnInit() {
    window.navigator.geolocation.getCurrentPosition((position: Position) => {

      this.map = L.map('map').setView([
        position.coords.latitude,
        position.coords.longitude
      ], 13);
    }
    );
  }
}
