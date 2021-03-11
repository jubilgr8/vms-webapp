import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmsMasterComponent } from './vms-master.component';

describe('VmsMasterComponent', () => {
  let component: VmsMasterComponent;
  let fixture: ComponentFixture<VmsMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmsMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
