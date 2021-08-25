import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTarrifComponent } from './add-new-tarrif.component';

describe('AddNewTarrifComponent', () => {
  let component: AddNewTarrifComponent;
  let fixture: ComponentFixture<AddNewTarrifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTarrifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTarrifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
