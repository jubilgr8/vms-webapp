import { User } from 'libs/api/src';
import { AuthFacade } from 'libs/auth/src';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { LocalStorageJwtService } from 'libs/auth/src';

@Component({
  selector: 'vms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  isLoggedIn$: Observable<boolean>;
  isAuthenticated: boolean;
  unsubscribe$: Subject<void> = new Subject();
  constructor(
    private authFacade: AuthFacade,
    private localStorageJwtService: LocalStorageJwtService
  ) {}

  ngOnInit() {
    debugger;
    this.user$ = this.authFacade.user$;
    this.isLoggedIn$ = this.authFacade.isLoggedIn$;

    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = isLoggedIn;
      });
    this.localStorageJwtService
      .getItem()
      .pipe(
        take(1),
        filter((token) => !!token)
      )
      .subscribe((token) => this.authFacade.auth(token));
  }
}
