import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewPublishComponent } from '../add-new-publish/add-new-publish.component';

@Component({
  selector: 'vms-publish-dashboard',
  templateUrl: './publish-dashboard.component.html',
  styleUrls: ['./publish-dashboard.component.css']
})
export class PublishDashboardComponent implements OnInit {
  isLoading=false;
  constructor( public dialog: MatDialog,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(type, id?) {
    switch (type) {
      case 'Add':
        this.dialog.open(AddNewPublishComponent, {
          width: '1280px',
          data: {}
        });
        break;
      case 'View':
        // this.dialog.open(ViewMediaComponent, {
        //   width: '850px',
        //   data: {uploadSetId: id,type:type}
        // });
        break;
      case 'Edit':
        // this.dialog.open(ViewMediaComponent, {
        //   width: '850px',
        //   data: {uploadSetId: id,type:type}
        // });
        break;
      case 'Delete':
        // this.dialog.open(DeleteMediaComponent, {
        //   width: '650px',
        //   data: {uploadSetId: id,type:type}
        // });
        break;
      default:
        break;
    }
    
    // this.modalService.open(content, { centered: true});
    
  }
}
