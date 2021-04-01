import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardFacade } from '../+state/dashboard.facade';
import { VMS } from '../models/vms.model';

@Component({
  selector: 'vms-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  vmsList: VMS[];
  constructor(
    private facade: DashboardFacade,
    private detector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.facade.getVMSList();
    this.facade.vmsList$.subscribe((res) => {
      this.vmsList = res;
      this.detector.detectChanges();
    });
  }
}
