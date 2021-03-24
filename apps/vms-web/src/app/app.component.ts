import { User } from 'libs/api/src';
import { AuthFacade } from 'libs/auth/src';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { LocalStorageJwtService } from 'libs/auth/src';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

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
  showHead: boolean = true;
  isCollapsed: boolean = true;
  @Input() collapse: any;
  constructor(
    private authFacade: AuthFacade,
    private localStorageJwtService: LocalStorageJwtService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.user$ = this.authFacade.user$;
    this.isLoggedIn$ = this.authFacade.isLoggedIn$;

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart || event instanceof NavigationEnd) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          this.showHead = true;
        }
      }
    });

    this.authFacade.isLoggedIn$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((isLoggedIn) => {
        this.isAuthenticated = true;
      });
    this.localStorageJwtService
      .getItem()
      .pipe(
        take(1),
        filter((token) => !!token)
      )
      .subscribe((token) => this.authFacade.auth(token));
  }

  toggleSidebar() {
    debugger;
    this.isCollapsed = !this.isCollapsed;
  }
}
