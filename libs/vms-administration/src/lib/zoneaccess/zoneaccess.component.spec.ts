import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneaccessComponent } from './zoneaccess.component';

describe('ZoneaccessComponent', () => {
  let component: ZoneaccessComponent;
  let fixture: ComponentFixture<ZoneaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneaccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
