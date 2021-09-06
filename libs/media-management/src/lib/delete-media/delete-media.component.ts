import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DialogData } from '../add-new-media/add-new-media.component';
import { DeleteMediaDataSource, DeleteMediaItem } from './delete-media-datasource';
import {environment} from '../../../../../apps/vms-web/src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'vms-delete-media',
  templateUrl: './delete-media.component.html',
  styleUrls: ['./delete-media.component.css']
})
export class DeleteMediaComponent implements OnInit {
  api_url = environment.api_url;
  isLoading: boolean = false;
  uploadSetId :number;
  constructor(  private toastr: ToastrService,private router:Router,
    private http: HttpClient,
    public dialogRef: MatDialogRef<DeleteMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
   this.uploadSetId = this.data.uploadSetId;
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  confirmDelete(){
    this.isLoading = true;
    debugger;
    //let url = this.api_url + "Media_API/api/MediaMaster/DeleteMediaMaster?uploadSetId="+this.uploadSetId;
    let url = this.api_url + "Media_API/api/MediaMaster/DeleteMediaMaster?uploadSetId="+this.uploadSetId;
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', '*/*');
    this.http.post(url,{headers:headers}).subscribe(res => {
      if(res != null && res != 0){
        this.toastr.success("Removed successfully","Success");
        this.router.navigateByUrl('/media-management/media-upload/0');
        this.isLoading = false;
      }
      else if(res == null || res == 0) {
        this.toastr.error("Something Went Wrong!");
        this.isLoading = false;
      }
    });
    this.dialogRef.close();
  }
  
  close(){
    this.dialogRef.close();
  }
}
