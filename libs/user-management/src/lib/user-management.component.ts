import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from './+state/user.facade';
import { UserMaster } from './+state/user.interfaces';
import { SharedData, UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'apps/vms-web/src/environments/environment';
// import { DashboardFacade } from './+state/dashboard.facade';
@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  users: UserMaster[];
  singleUser: UserMaster;
  api_url = environment.api_url;
  isLoading: boolean;
  constructor( private http: HttpClient,
    private router: Router,
    private authFacade: AuthFacade,
    private userFacade: UserFacade,
    private ref: ChangeDetectorRef,
    private sharedData: SharedData,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userFacade.getUserList();
    this.userFacade.isLoading$.subscribe((r) => {
      this.isLoading = r;
      this.ref.detectChanges();
    });

    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });

    this.userFacade.users$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.users = response;
          this.ref.detectChanges();
        } else {
          this.userFacade.getUserList();
        }
      });
  }

  ViewAction(id, type) {
    console.log(this.users.find((x) => x.id == id));
    this.userFacade.users$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.singleUser = response.find((X) => X.id == id);
          var strData = JSON.stringify(this.singleUser);
          var _jsonData = JSON.parse(strData);
          _jsonData.usrIsDeleted = true;
          this.singleUser = _jsonData;
          this.ref.detectChanges();
          // this.userFacade.updateUser();
          this.userService
            .updateUser(this.singleUser)
            .subscribe((data: any) => {
              this.toastr.success('User removed successfully.');
              this.userFacade.getUserList();
            });
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  isActiveClick(id,event){
   
  }
  isDapClick(id,event){
    var isChecked  = event.target.checked;
  }
}
