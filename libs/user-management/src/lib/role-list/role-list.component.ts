import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from '../+state/user.facade';
import { RoleMaster, UserMaster } from '../+state/user.interfaces';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { UserService } from '../user.service';
// import { DashboardFacade } from './+state/dashboard.facade';
//import {} from '../role-list/add-new-role/add-new-role.component'
@Component({
  selector: 'role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  roles: RoleMaster[];
  isLoading: boolean;
  constructor(
    private ref: ChangeDetectorRef,
    private authFacade: AuthFacade,
    private userFacade: UserFacade,
    private service: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userFacade.isLoading$.subscribe((r) => {
      this.isLoading = r;
    });

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

  ViewAction(id, type) {
    if (type) {
      console.log(this.roles.find((x) => x.id == id));
      this.userFacade.roles$.pipe().subscribe((response) => {
        if (response) {
          var singlerole = response.find((X) => X.id == id);
          if (singlerole) {
            var strData = JSON.stringify(singlerole);
            var _jsonData = JSON.parse(strData);
            _jsonData.isDeleted = true;
            singlerole = _jsonData;
            this.ref.detectChanges();
            // this.userFacade.updateUser();
            this.service.updateRole(singlerole).subscribe((data: any) => {
              this.toastr.success('Role deleted successfully!');
              this.userFacade.getRoleList();
            });
          }
        }
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
