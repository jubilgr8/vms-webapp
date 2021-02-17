import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@vms/auth'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'vms-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  constructor(
    private authFacade: AuthFacade,
  ) { }

  ngOnInit(): void {
    this.authFacade.isLoggedIn$.pipe(takeUntil(this.unsubscribe$)).subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
        // TODO: GET ZONE DATA FUNCTION
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
