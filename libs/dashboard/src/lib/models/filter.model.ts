import { using } from 'rxjs';

import { Coords } from './map.model';
export interface Filter {
  zoneList: Zone[];
  vmsCount: VMSCount;
}
export interface Zone {
  id: number;
  zoneId: string;
  description: string;
  coords: Coords[];
}
export interface VMSCount {
  online: number;
  offline: number;
  total: number;
}
