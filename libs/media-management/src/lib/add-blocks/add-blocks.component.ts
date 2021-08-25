import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MediaFacade } from '../+state/media.facade';
import { AddBlocksDataSource, AddBlocksItem } from './add-blocks-datasource';

@Component({
  selector: 'vms-add-blocks',
  templateUrl: './add-blocks.component.html',
  styleUrls: ['./add-blocks.component.css'],
})
export class AddBlocksComponent implements OnInit {
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  ddlData: any;
  type: number;
  intDate: number;
  form: any;
  isFormValid: boolean;
  data: any;
  vms: any;
  left: any = '0';
  right: any = '0';
  height: any = '50';
  width: any = '50';
  blocksForm: any;

  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private facade: MediaFacade,
    private mediaFacade: MediaFacade,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((res) => {
      debugger;
      this.vms = res;
    });
    this.blocksForm = this.formBuilder.group({
      blockName: new FormControl('', [Validators.required]),
      left: new FormControl('', [Validators.required]),
      right: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
    });
    // this.mediaFacade.newPlaylist$.subscribe((res) => {
    //   this.data = res;
    //   console.log(this.data);
    // });
    // this.intDate = +new Date();
    // const structure: Field[] = [
    //   {
    //     type: 'INPUT',
    //     name: 'blockName',
    //     placeholder: 'Block Name',
    //     value: 1,
    //   },
    //   {
    //     type: 'INPUT',
    //     name: 'left',
    //     placeholder: 'Left',
    //     value: this.left,
    //   },
    //   {
    //     type: 'INPUT',
    //     name: 'right',
    //     placeholder: 'Right',
    //     value: this.right,
    //   },
    //   {
    //     type: 'INPUT',
    //     name: 'vmsHeight',
    //     placeholder: 'Height',
    //     value: this.height,
    //   },
    //   {
    //     type: 'INPUT',
    //     name: 'vmsWidth',
    //     placeholder: 'Width',
    //     value: this.width,
    //   },
    // ];
    // this.ngrxFormsFacade.setStructure(structure);
    // this.data$ = this.ngrxFormsFacade.data$;
    // this.structure$ = this.ngrxFormsFacade.structure$;
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
  addMedia() {
    this.router.navigateByUrl('/media-management/block-media');
  }
  blockChanged(e) {
    debugger;
    this.width = e.width;
    this.height = e.height;
  }
  blockMoved(e) {
    debugger;
    this.left = e.left;
    this.right = e.top;
  }

  onSubmit() {}
}
