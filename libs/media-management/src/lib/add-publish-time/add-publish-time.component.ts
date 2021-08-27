import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vms-add-publish-time',
  templateUrl: './add-publish-time.component.html',
  styleUrls: ['./add-publish-time.component.css']
})
export class AddPublishTimeComponent implements OnInit {
  vmsList:any;
  playlistdate:any;
  selectedDate:any;
  constructor() { }

  ngOnInit(): void {
  }

}
