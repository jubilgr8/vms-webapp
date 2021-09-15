import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminFacade } from '../+state/admin.facade';
import { AdminMaster, VMSMaster } from '../+state/admin.interfaces';

@Component({
  selector: 'vms-uommaster',
  templateUrl: './uommaster.component.html',
  styleUrls: ['./uommaster.component.css']
})
export class UommasterComponent implements OnInit {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  vmss: VMSMaster[];
  isLoading : boolean;
  constructor(
    private authFacade: AuthFacade,
    private adminFacade: AdminFacade,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });

    this.adminFacade.vmss$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        if (response) {
          this.vmss = response;
          this.ref.detectChanges();
        } else {
          this.adminFacade.getVmsList();
          this.isLoading = false;
        }
      });
      this.isLoading = false;
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
