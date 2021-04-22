import {
  ChangeDetectorRef,
  Component,
  NgModule,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable } from 'rxjs';
import { AdminFacade } from '../+state/admin.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ZoneAccessComponent } from '../zoneaccess/zoneaccess.component';

const ddlList: KeyValue[] = [
  {
    name: 'Administrator',
    value: 1,
  },
  {
    name: 'ABC',
    value: 2,
  },
];

@Component({
  selector: 'vms-add-new-zone',
  templateUrl: './add-new-zone.component.html',
  styleUrls: ['./add-new-zone.component.css'],
})
export class AddNewZoneComponent implements OnInit, OnDestroy {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  form: any;
  isFormValid: boolean;
  zoneId: any;
  type: any;
  isMapView: boolean = false;
  zone: import('d:/VMS-Webapp-18-03/vms-webapp/libs/vms-administration/src/lib/+state/admin.interfaces').ZoneMaster;
  @ViewChild('zoneAccess') zoneAccess: ZoneAccessComponent;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: AdminFacade,
    private modalService: NgbModal,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.zoneId = params['zoneId'];
      this.type = params['type'];
      if (this.zoneId) {
        this.facade.getZoneById(this.zoneId);
      }
    });

    this.facade.zone$.subscribe((res) => {
      if (res) {
        this.zone = res[0];
        this.isMapView = true;
      }
      const structure: Field[] = [
        {
          type: 'INPUT',
          name: 'zoneId',
          placeholder: 'Zone ID',
          validator: [Validators.required],
          value: this.zone ? this.zone.zoneId : null,
          attrs: {
            disabled: this.type == 1 ? true : null,
          },
        },
        {
          type: 'INPUT',
          name: 'zoneName',
          placeholder: 'Zone Name',
          validator: [Validators.required],
          value: this.zone ? this.zone.description : null,
          attrs: {
            disabled: this.type == 1 ? true : null,
          },
        },
        {
          type: 'INPUT',
          name: 'description',
          placeholder: 'Discription',
          validator: [Validators.required],
          value: this.zone ? this.zone.description : null,
          attrs: {
            disabled: this.type == 1 ? true : null,
          },
        },
      ];
      this.ngrxFormsFacade.setStructure(structure);
      this.data$ = this.ngrxFormsFacade.data$;
      this.structure$ = this.ngrxFormsFacade.structure$;
    });
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  getForm(form: any) {
    this.form = form;
    if (this.form.status === 'INVALID') {
      this.isFormValid = true;
    } else {
      this.isFormValid = null;
    }
    this.ref.detectChanges();
  }
  submit() {
    this.facade.submitNewZone();
    this.facade.newZoneId$.subscribe((res) => {
      this.facade.getZoneById(res.toString());
    });
    this.isMapView = true;
  }

  undo() {
    this.zoneAccess.undo();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
}
