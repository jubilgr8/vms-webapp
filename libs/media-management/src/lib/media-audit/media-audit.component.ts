import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  isLoading: boolean = true;
  medias: any;

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private ref: ChangeDetectorRef,

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
}
