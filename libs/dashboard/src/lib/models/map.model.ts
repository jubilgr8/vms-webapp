import { last } from 'rxjs/operators';

export interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  vmsId: string;
}
export interface Coords {
  lat: number;
  long: number;
}
