import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVmsComponent } from './add-vms.component';

describe('AddVmsComponent', () => {
  let component: AddVmsComponent;
  let fixture: ComponentFixture<AddVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
