import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export interface DialogData {
  imgUrl: string;
}

@Component({
  selector: 'vms-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent implements OnInit {
isLoading :boolean;
imgUrlD :any;
  constructor(public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    debugger;
    var url = this.sanitizeImageUrl(this.data.imgUrl)
    this.isLoading = false;
    this.imgUrlD = url;
  }
  CloseModal(){

  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

}
