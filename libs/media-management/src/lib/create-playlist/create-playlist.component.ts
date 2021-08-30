import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthFacade } from '@vms/auth';
import { Field, KeyValue, NgrxFormsFacade } from '@vms/ngrx-forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaFacade } from '../+state/media.facade';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

var ddlList: KeyValue[] = [
  {
    name: 'Medias',
    value: 0,
  },
  {
    name: 'Text',
    value: 1,
  },
];

@Component({
  selector: 'vms-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css'],
})
export class CreatePlaylistComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData: any;
  type: number;
  intDate: number;
  form: any;
  isFormValid: boolean;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.intDate = +new Date();
    const structure: Field[] = [
      {
        type: 'INPUT',
        name: 'plId',
        placeholder: 'Playlist ID',
        validator: [Validators.required],
        value: this.intDate,
        attrs: {
          disabled: true,
        },
      },
      {
        type: 'INPUT',
        name: 'plName',
        placeholder: 'Playlist Name',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'vmsHeight',
        placeholder: 'VMS Height',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'vmsWidth',
        placeholder: 'VMS Width',
        validator: [Validators.required],
        value: null,
      },
    ];
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
  }
  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
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
  addBlocks() {
    debugger;
    console.log(this.form.controls);

    var data = JSON.stringify(
      '{"playlistId": "' +
        this.form.controls.plId.value +
        '",' +
        '"playlistName":"' +
        this.form.controls.plName.value +
        '",' +
        '"vmsHeight": "' +
        this.form.controls.vmsHeight.value +
        '",' +
        '"vmsWidth": "' +
        this.form.controls.vmsWidth.value +
        '"}'
    );
    var sendData = JSON.parse(data);
    let url =
      'https://172.19.32.193/Media_API​/api​/PlaylistMaster​/PostPlaylistMaster';
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', 'application/json');
    this.http.post(url, sendData, { headers: headers }).subscribe((res) => {
      if (res == '1') {
        this.toastr.success('Saved successfully', 'Success');
      } else {
        this.toastr.error('Something Went Wrong!');
      }
    });
    this.mediaFacade.newPlaylist(this.form.value);
    // this.router.navigateByUrl('/media-management/add-blocks');
    this.router.navigate(['/media-management/add-blocks'], {
      queryParams: {
        id: this.form.controls.plId.value,
        name: this.form.controls.plName.value,
        vmsHeight: this.form.controls.vmsHeight.value,
        vmsWidth: this.form.controls.vmsWidth.value,
      },
    });
  }
}
