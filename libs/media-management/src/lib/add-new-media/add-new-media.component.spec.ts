import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMediaComponent } from './add-new-media.component';

describe('AddNewMediaComponent', () => {
  let component: AddNewMediaComponent;
  let fixture: ComponentFixture<AddNewMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
