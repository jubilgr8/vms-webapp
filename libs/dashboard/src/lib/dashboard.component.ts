import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthFacade } from '@vms/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  isLoading: boolean;
  constructor(
    private authFacade: AuthFacade,
    private dashboardFacade: DashboardFacade,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardFacade.isLoading$.subscribe((res) => {
      debugger;
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
