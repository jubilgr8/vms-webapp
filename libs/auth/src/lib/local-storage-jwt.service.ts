import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageJwtService {
  getItem(): Observable<string | null> {
    const data = sessionStorage.getItem('jwtToken');
    if (data) {
      debugger;
      return of(data);
    }
    return of(null);
  }

  setItem(data: string): Observable<string> {
    sessionStorage.setItem('jwtToken', data);
    return of(data);
  }

  removeItem(): Observable<boolean> {
    sessionStorage.removeItem('jwtToken');
    return of(true);
  }
}
