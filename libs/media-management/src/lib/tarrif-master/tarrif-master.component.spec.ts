import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarrifMasterComponent } from './tarrif-master.component';

describe('TarrifMasterComponent', () => {
  let component: TarrifMasterComponent;
  let fixture: ComponentFixture<TarrifMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarrifMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarrifMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
