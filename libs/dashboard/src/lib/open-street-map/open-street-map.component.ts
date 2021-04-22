import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'vms-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.css'],
})
export class OpenStreetMapComponent implements OnInit {
  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8,
      }),
    });
  }
}
