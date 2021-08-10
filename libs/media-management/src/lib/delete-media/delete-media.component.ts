import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DialogData } from '../add-new-media/add-new-media.component';
import { DeleteMediaDataSource, DeleteMediaItem } from './delete-media-datasource';

@Component({
  selector: 'vms-delete-media',
  templateUrl: './delete-media.component.html',
  styleUrls: ['./delete-media.component.css']
})
export class DeleteMediaComponent implements OnInit {

  constructor(
    
    public dialogRef: MatDialogRef<DeleteMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
   
  }
  ngOnInit(): void {
    
  }

  confirmDelete(){
    this.dialogRef.close();
  }
  
  close(){
    this.dialogRef.close();
  }
}
