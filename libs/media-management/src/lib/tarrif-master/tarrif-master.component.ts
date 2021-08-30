import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Field, NgrxFormsFacade } from '@vms/ngrx-forms';
import { environment } from 'apps/vms-web/src/environments/environment';
import { Observable } from 'rxjs';
import { tarrifMaster } from '../+state/media.interfaces';
import { AddNewTarrifComponent } from './add-new-tarrif/add-new-tarrif.component';

@Component({
  selector: 'vms-tarrif-master',
  templateUrl: './tarrif-master.component.html',
  styleUrls: ['./tarrif-master.component.css'],
})
export class TarrifMasterComponent implements OnInit {
  medias: any[];
  api_url = environment.api_url;
  isLoading: boolean = true;
  tarrifs: tarrifMaster[];
  intDate: number;

  constructor(
    private http: HttpClient,
    private ref: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getMediaDetails();
  }
  getMediaDetails() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    let url = this.api_url + 'Media_API/api/TarrifMaster/GetTarrifMaster';
    this.http.get<tarrifMaster[]>(url, options).subscribe((x) => {
      debugger;
      this.isLoading = false;
      this.tarrifs = x;
      this.ref.detectChanges();
    });
  }

  addNewTarrif() {
    debugger;
    this.dialog.open(AddNewTarrifComponent, {
      width: '850px',
    });
  }
}
