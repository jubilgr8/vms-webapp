import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'libs/api/src';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { NgbdDropdownBasic } from '../../../../../../';

@Component({
  selector: 'vms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() user: User;
  @Input() isLoggedIn: boolean;

  OnMenuClick(event: Event){
    event.stopPropagation();
    
  }
}
