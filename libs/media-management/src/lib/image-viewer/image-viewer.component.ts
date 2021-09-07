import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export interface DialogData {
  imgUrl: string;
  fileType:string;
  font:string;
  fontSize:string;
  foreColor:string;
  backColor:string;
  blink:string;
  pitch:string;
  message:string;
  fontStyle:string;
  mode:string;
  direction:string;
}

@Component({
  selector: 'vms-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent implements OnInit {
isLoading :boolean;
message : string;
isImg:boolean;
imgUrlD :any;
  constructor(public dialogRef: MatDialogRef<ImageViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.isImg = false;
    debugger;
    if(this.data.fileType.toLowerCase() == "text"){
      this.message = this.data.imgUrl;
      this.isImg= false;
    }
    else{
      this.isImg = true;
      var url = this.sanitizeImageUrl(this.data.imgUrl)
      this.isLoading = false;
      this.imgUrlD = url;
    }
   
  }
  CloseModal(){
    this.dialogRef.close();
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'data:video/mp4;base64,' + imageUrl);
}

}
