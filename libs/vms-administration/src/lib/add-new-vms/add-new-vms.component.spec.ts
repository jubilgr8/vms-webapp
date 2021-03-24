import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVmsComponent } from './add-new-vms.component';

describe('AddNewVmsComponent', () => {
  let component: AddNewVmsComponent;
  let fixture: ComponentFixture<AddNewVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
