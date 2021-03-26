import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { UserFacade } from './+state/user.facade';
import { UserMaster } from './+state/user.interfaces';
import { SharedData, UserService } from './user.service';
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
<<<<<<< HEAD
  singleUser : UserMaster;
=======
  isLoading: boolean;
>>>>>>> ed4ebf4582ed9e4606064d5a40239418dfa570a2
  constructor(
    private router: Router,
    private authFacade: AuthFacade,
    private userFacade: UserFacade,
    private ref: ChangeDetectorRef,
    private sharedData: SharedData,
    private userService:UserService
  ) {}

  ngOnInit(): void {
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
    debugger;
    console.log(this.users.find(x=>x.id == id));
    this.userFacade.users$
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((response) => {
          if (response) {
            debugger;
            this.singleUser = response.find((X)=>X.id == id);
            this.ref.detectChanges();
           // this.userFacade.updateUser();
            this.userService.updateUser(this.singleUser).subscribe((data: any)=>{
              console.log(data);
            })  
          }
        });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
