import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { environment } from 'apps/vms-web/src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { MediaMaster } from '../+state/media.interfaces';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { ViewMediaDataSource, ViewMediaItem } from './view-media-datasource';


@Component({
  selector: 'vms-view-media',
  templateUrl: './view-media.component.html',
  styleUrls: ['./view-media.component.css']
})
export class ViewMediaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ViewMediaItem>;
  dataSource: ViewMediaDataSource;
  api_url = environment.api_url;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  medias: any;
  isLoading: boolean = true;

  constructor(public dialog: MatDialog, private toastr:ToastrService,
    public dialogRef: MatDialogRef<ViewMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    this.dataSource = new ViewMediaDataSource();
  }

  ngAfterViewInit(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    const myObject: any = { id: this.data?.uploadSetId};
    const httpParams: HttpParamsOptions = { fromObject: myObject } as HttpParamsOptions;
    
    const options = { params: new HttpParams(httpParams), headers: headers };
    

    let url = "https://172.19.32.193/Media_API/api/MediaMaster/GetMediaMasterById";
    //let url = "https://localhost:44364/api/MediaMaster/GetMediaMasterById"
    this.http.get<MediaMaster[]>(url, options).subscribe(x => {
      debugger;
      this.medias = x;
      this.isLoading = false;
      console.log(this.medias);
    })
  }

  openImage(url){
    window.open(url);
  }
  CloseModal() {
    this.dialog.closeAll();
  }
  DeleteMedia(id){
    this.isLoading = true;
    let url = this.api_url + "Media_API/api/MediaMaster/EditMediaMasterById?mediaId="+id;
    //let url = "https://localhost:44364/api/MediaMaster/EditMediaMasterById?mediaId="+id;
    const headers = new HttpHeaders()
      // .set('Authorization', 'my-auth-token')
      .set('Accept', '*/*');
    this.http.post(url,{headers:headers}).subscribe(res => {
      if(res != null || res != undefined){
        this.medias = res;
        this.isLoading= false;
      }
      else {
        this.toastr.error("Something Went Wrong!");
        this.isLoading = false;
      }
    });
  }

  openVerticallyCentered(type, url) {
    switch (type) {
      case 'View':
        const dialogRef =  this.dialog.open(ImageViewerComponent, {
          width: '650px',
          data: {imgUrl: url}
        });

        dialogRef.afterClosed().subscribe(result => {
         
        });
       
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
  }
}
