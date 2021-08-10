import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MediaMaster } from '../+state/media.interfaces';
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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];
  medias: any;
  isLoading: boolean = true;

  constructor(
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
    this.http.get<MediaMaster[]>(url, options).subscribe(x => {
      debugger;
      this.medias = x;
      this.isLoading = false;
      console.log(this.medias);
    })
  }
}
