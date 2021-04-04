import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminFacade } from '../+state/admin.facade';
import { AdminMaster, ZoneMaster } from '../+state/admin.interfaces';
// import { DashboardFacade } from './+state/dashboard.facade';
@Component({
  selector: 'zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css'],
})
export class ZoneComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  zones: ZoneMaster[];
  isLoading: boolean;
  constructor(
    private authFacade: AuthFacade,
    private adminFacade: AdminFacade,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.adminFacade.isLoading$.subscribe((r) => {
      this.isLoading = r;
    });
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });

    this.adminFacade.zones$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.zones = response;
          this.ref.detectChanges();
        } else {
          this.adminFacade.getZoneList();
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
