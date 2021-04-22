import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@vms/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View from 'ol/View';
import { Polygon } from 'ol/geom';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { ZoneCoords } from '../+state/admin.interfaces';
import { ActivatedRoute } from '@angular/router';
import { getZoneCoords } from '../+state/admin.selectors';

declare var ol: any;

@Component({
  selector: 'vms-zoneaccess',
  templateUrl: './zoneaccess.component.html',
  styleUrls: ['./zoneaccess.component.css'],
})
export class ZoneAccessComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: Map;
  draw: Draw;
  raster: TileLayer;
  source: VectorSource;
  vector: VectorLayer;
  coords: ZoneCoords[] = [];
  zoneId: any;
  type: any;
  constructor(private authFacade: AuthFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      debugger;
      this.zoneId = params['zoneId'];
      this.type = params['type'];
    });
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
        // TODO: GET ZONE DATA FUNCTION
      });
    this.raster = new TileLayer({
      source: new OSM(),
    });

    this.source = new VectorSource({ wrapX: false });

    this.vector = new VectorLayer({
      source: this.source,
    });

    this.map = new Map({
      layers: [this.raster, this.vector],
      target: 'map',
      view: new View({
        center: ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8,
      }),
    });

    this.map.addInteraction(
      new Draw({
        source: this.source,
        type: 'Polygon',
        geometryFunction: this.getCoords(),
      })
    );

    /**
     * Handle change event.
     */
    // typeSelect.onchange = function () {
    //   map.removeInteraction(draw);
    //   addInteraction();
    // };

    // document.getElementById('undo').addEventListener('click', function () {
    //   draw.removeLastPoint();
    // });

    // addInteraction(this.map, this.draw, this.source);
  }
  getCoords() {
    debugger;
    return function (coordinates, geometry, projection) {
      if (geometry) {
        if (coordinates[0].length) {
          // Add a closing coordinate to match the first
          geometry.setCoordinates([coordinates[0].concat([coordinates[0][0]])]);
          console.log(coordinates);
        } else {
          geometry.setCoordinates([]);
        }
      } else {
        geometry = new Polygon(coordinates);
      }
      return geometry;
    };
  }

  getCoord(event: any) {
    debugger;
    var vector = this.vector.features[3].geometry.getBounds();
    var coordinate = this.map.getEventCoordinate(event);
    this.coords.push({
      zoneMasterId: this.zoneId,
      latitude: coordinate[0],
      longitude: coordinate[1],
    });
  }

  undo() {
    this.draw.removeLastPoint();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
