import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@vms/api';

@Component({
  selector: 'vms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
}
