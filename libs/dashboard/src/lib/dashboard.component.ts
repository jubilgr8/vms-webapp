import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthFacade } from '@vms/auth';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DashboardFacade } from './+state/dashboard.facade';
import { Filter } from './models/filter.model';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  filters: Filter;
  isMapView: boolean = true;
  isLoading: boolean = true;
  previousUrl: string;
  constructor(
    private authFacade: AuthFacade,
    private dashboardFacade: DashboardFacade,
    private ref: ChangeDetectorRef,
    private router: Router

  ) {}

  ngOnInit(): void {

    let currentUrl = this.router.url;
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      console.log('prev:', event.url);
      this.previousUrl = event.url;
    });
    
    this.dashboardFacade.isLoading$.subscribe((res) => {
      this.isLoading = res;
      this.ref.detectChanges();
    });

    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });

    this.dashboardFacade.getFilters();
    this.dashboardFacade.filters$.subscribe((res) => {
      this.filters = res;
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onTabClick(tabname: string) {
    if (tabname === 'map') {
      this.isMapView = true;
    } else if (tabname === 'list') {
      this.isMapView = false;
    }
  }
}
