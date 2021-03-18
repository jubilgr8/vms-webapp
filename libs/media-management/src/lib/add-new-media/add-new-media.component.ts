import { Component, OnDestroy, OnInit,ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


var ddlList: KeyValue[] = [
  {
    name: 'Medias',
    value: 0,
  },
  {
    name: 'Text',
    value: 1,
  }
];

const structure: Field[] = [
  {
    type: 'DROPDOWN',
    name: 'mediaType',
    ddlList: ddlList,
    placeholder: 'Media Type',
    validator: [Validators.required],
  },
];

@Component({
  selector: 'add-new-media',
  templateUrl: './add-new-media.component.html',
  styleUrls: ['./add-new-media.component.css']
})
export class AddNewMediaComponent implements OnInit, OnDestroy {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData:any;

  
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade:MediaFacade,private ref: ChangeDetectorRef,
   
  ) {}

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  //   this.adminFacade.zones$
  //   .pipe(takeUntil(this.unsubscribe$))
  //   .subscribe((response) => {
  //     debugger;
  //     if (response) {
  //       this.ref.detectChanges();
  //       for(var zone=0;zone<response.length;zone++)
  //       {
  //         debugger;
  //         this.ddlData=[{
  //           "name" : response[zone].description,
  //           "value" : response[zone].id
  //         }];
  //       }
  //       debugger;
  //       ddlList = ddlList.concat(this.ddlData);
       
  //     } else {
  //       this.adminFacade.getZoneList();
  //     }
  //   });
  // }

  // updateForm(changes: any) {
  //   this.ngrxFormsFacade.updateData(changes);
  // }

  // submit() {
  //   this.facade.submitNewUser();
  // }

  // ngOnDestroy() {
  //   this.ngrxFormsFacade.initializeForm();
  // }
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
  }
  

}
