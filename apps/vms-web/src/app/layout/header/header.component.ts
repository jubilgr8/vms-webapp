import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@vms/api';
import { EmitOutput } from 'typescript';

@Component({
  selector: 'vms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Output() toggleSidebar = new EventEmitter<boolean>();

  sidebarClicked() {
    debugger;
    this.toggleSidebar.emit(true);
  }
}
