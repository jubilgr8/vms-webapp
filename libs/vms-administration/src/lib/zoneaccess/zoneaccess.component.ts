import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@vms/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'vms-zoneaccess',
  templateUrl: './zoneaccess.component.html',
  styleUrls: ['./zoneaccess.component.css']
})
export class ZoneAccessComponent implements OnInit {
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
