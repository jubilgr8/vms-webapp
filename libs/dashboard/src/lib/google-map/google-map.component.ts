import { AgmPolygon } from '@agm/core';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardFacade } from '../+state/dashboard.facade';
import { Coords, marker } from '../models/map.model';
// import {
//   LatLngLiteral,
//   PolyMouseEvent,
// } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'vms-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
})
export class GoogleMapComponent implements OnInit {
  coords: Coords[];
  iconUrl: string = 'assets/img/tv-512.png';
  vmsData: any;

  constructor(
    private dashboardFacade: DashboardFacade,
    private detector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardFacade.filters$.subscribe((x) => {
      this.coords = x?.zoneList[0]?.coords;
    });
  }

  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  paths = [
    [
      { lat: this.lat, lng: this.lng },
      { lat: this.lat, lng: this.lng + 0.5 },
      { lat: this.lat + 0.2, lng: this.lng },
      { lat: this.lat, lng: this.lng },
    ],
  ];
  strokecolor: string = '#ff0000';
  clickedMarker(vmsId: string, index: number) {
    this.dashboardFacade.getVMSData(vmsId);
    this.dashboardFacade.vmsData$.subscribe((res) => {
      this.vmsData = res;
      this.detector.detectChanges();
    });
  }

  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng,
    //   draggable: true,
    // });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      draggable: false,
      vmsId: 'VMS001',
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false,
      vmsId: 'VMS001',
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: false,
      vmsId: 'VMS001',
    },
  ];
  onPolyClick($event: Event, polygon: AgmPolygon) {
    console.log(polygon);
  }
}
