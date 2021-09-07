import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { environment } from 'apps/vms-web/src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MediaMaster } from '../+state/media.interfaces';
import { AddNewMediaComponent } from '../add-new-media/add-new-media.component';
import { ViewMediaComponent } from '../view-media/view-media.component';
import { MediaAuditDataSource, MediaAuditItem } from './media-audit-datasource';

@Component({
  selector: 'vms-media-audit',
  templateUrl: './media-audit.component.html',
  styleUrls: ['./media-audit.component.css']
})
export class MediaAuditComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<MediaAuditItem>;
  dataSource: MediaAuditDataSource;
  formData = new FormData();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  isLoading: boolean;
  medias: any;
  api_url = environment.api_url;
  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private ref: ChangeDetectorRef,
    private toastr:ToastrService

  ) {
    // this.dataSource = new MediaAuditDataSource();
   
  }
  ngOnInit(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
   let url = "https://172.19.32.193/Media_API/api/MediaMaster/GetMediaMaster";
   this.http.get<MediaMaster[]>(url, options).subscribe(x => {
     debugger;
     this.isLoading = false;
     this.medias = x;
     this.ref.detectChanges();
     this.getMediaDetails();
   });
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    
  }
  openVerticallyCentered(type, id?) {
    switch (type) {
      case 'Add':
        this.dialog.open(AddNewMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'View':
        this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'Edit':
        this.dialog.open(ViewMediaComponent, {
          width: '850px',
          data: {uploadSetId: id,type:type}
        });
        break;
      case 'Delete':
        this.dialog.open(AddNewMediaComponent, {
          width: '650px',
          data: {uploadSetId: id,type:type}
        });
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
  }

  DeleteMedia(uploadSetId){
    this.isLoading = true;
    let url = this.api_url + "Media_API/api/MediaMaster/DeleteMediaMaster?uploadSetId="+uploadSetId;
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', '*/*');
    this.http.post(url,{headers:headers}).subscribe(res => {
      if(res != "0"){
        this.toastr.success("Set Id : "+uploadSetId + " has been rejected successfully.","Success");
        this.ref.detectChanges();
        this.isLoading = false;
      }
      else {
        this.toastr.error("Something Went Wrong!");
        this.isLoading = false;
      }
    });
  }

  onApproved(uploadSetID,status){
    debugger;
    var auditData = new auditVm();
    this.isLoading = true;
    auditData.uploadSetId = uploadSetID;
    auditData.auditedStatus = status;
    auditData.auditedBy = "Admin"
    let url = this.api_url + "Media_API/api/MediaMaster/UpdateAuditedStatus";
    //let url = "https://localhost:44364/api/MediaMaster/UpdateAuditedStatus";
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', 'application/json');
    this.http.post(url, auditData, { headers: headers }).subscribe(res => {
      if (res == "1") {
        this.getMediaDetails();
        if(status == 1){
          this.toastr.success("Set Id : "+uploadSetID+" has been approved successfully.", "Success");
        }else if(status== 2){
        this.toastr.success("Set Id : "+uploadSetID+" has been rejected successfully.", "Success");
        }
      }
      else {
        this.isLoading = false;
        this.toastr.error("Something Went Wrong!");
      }
    });
  }

  getMediaDetails(){
    this.isLoading = true;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
   let url = this.api_url+"Media_API/api/MediaMaster/GetMediaMaster";
   //let url = "https://localhost:44364/api/MediaMaster/GetMediaMaster";
   this.http.get<MediaMaster[]>(url, options).subscribe(x => {
     debugger;
     this.medias = x;
     this.medias.forEach(element => {
       element.dateOfRequest = this.EpochToDate(element.dateOfRequest);
    });
    this.isLoading = false;
      this.ref.detectChanges();
   });
  }

  EpochToDate(epoch) {
    if (epoch < 10000000000)
        epoch *= 1000; // convert to milliseconds (Epoch is usually expressed in seconds, but Javascript uses Milliseconds)
    var epoch = epoch + (new Date().getTimezoneOffset() * -1); //for timeZone        
    return new Date(epoch);
  }
}

export class auditVm{
  uploadSetId : number;
  auditedStatus : number;
  auditedBy :string;
}
