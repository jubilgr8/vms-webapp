import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '@vms/auth'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DashboardFacade } from './+state/dashboard.facade';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  constructor(
    private authFacade: AuthFacade,
    private dashboardFacade: DashboardFacade,
  ) { }

  ngOnInit(): void {


    this.authFacade.isLoggedIn$.pipe(takeUntil(this.unsubscribe$)).subscribe(isLoggedIn => {
      this.isAuthenticated = isLoggedIn;
      // this.dashboardFacade.getFilters();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
