import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import { RoleMaster, UserMaster } from '../+state/user.interfaces';
// import { DashboardFacade } from './+state/dashboard.facade';

@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  roles: RoleMaster[];
  constructor(
    private ref: ChangeDetectorRef,
    private authFacade: AuthFacade,
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });

    this.userFacade.roles$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.roles = response;
          this.ref.detectChanges();
        } else {
          this.userFacade.getRoleList();
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
