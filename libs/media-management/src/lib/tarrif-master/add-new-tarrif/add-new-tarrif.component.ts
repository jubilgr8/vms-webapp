import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MediaService } from '../../media.service';

@Component({
  selector: 'vms-add-new-tarrif',
  templateUrl: './add-new-tarrif.component.html',
  styleUrls: ['./add-new-tarrif.component.css'],
})
export class AddNewTarrifComponent implements OnInit {
  intDate: number;
  structure$: Observable<Field[]>;
  data$: Observable<any>;
  form: any;
  isFormValid: boolean;
  constructor(
    private ngrxFormsFacade: NgrxFormsFacade,
    private ref: ChangeDetectorRef,
    private http: HttpClient,
    private toastr: ToastrService,
    private service: MediaService
  ) {}

  ngOnInit(): void {
    this.intDate = +new Date();

    const structure: Field[] = [
      {
        type: 'INPUT',
        name: 'id',
        placeholder: 'Tarrif ID',
        validator: [Validators.required],
        value: this.intDate,
        attrs: {
          disabled: true,
        },
      },
      {
        type: 'INPUT',
        name: 'tarrifType',
        placeholder: 'Tarrif Type',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'unitOfMeasurementId',
        placeholder: 'Unit Of Measurement',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'amount',
        placeholder: 'Amount',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'gst',
        placeholder: 'GST',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'totalamount',
        placeholder: 'Total Amount',
        validator: [Validators.required],
        value: null,
      },
      {
        type: 'INPUT',
        name: 'remarks',
        placeholder: 'Remarks',
        validator: [Validators.required],
        value: null,
      },
    ];
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
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

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  addTarrif() {
    debugger;
    this.service.postTarrif(this.form.value).subscribe((res) => {
      debugger;
    });
  }
}
