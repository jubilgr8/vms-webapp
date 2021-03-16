import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminFacade } from '../+state/admin.facade';
import { AdminMaster, VMSMaster } from '../+state/admin.interfaces';

@Component({
  selector: 'vms-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  vmss: VMSMaster[];
  constructor(
    private authFacade: AuthFacade,
    private adminFacade: AdminFacade,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        debugger;
        this.isAuthenticated = isLoggedIn;
      });

    this.adminFacade.vmss$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((response) => {
        debugger;
        if (response) {
          debugger;
          this.vmss = response;
          this.ref.detectChanges();
        } else {
          this.adminFacade.getVmsList();
        }
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
