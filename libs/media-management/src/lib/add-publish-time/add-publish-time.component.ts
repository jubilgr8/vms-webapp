import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { IDatePickerConfig } from 'ng2-date-picker';
import * as moment from 'moment';
import { ITimeSelectConfig } from 'ng2-date-picker/time-select/time-select-config.model';

@Component({
  selector: 'vms-add-publish-time',
  templateUrl: './add-publish-time.component.html',
  styleUrls: ['./add-publish-time.component.css']
})
export class AddPublishTimeComponent implements OnInit {
  private minDate: moment.Moment;
  private maxDate: moment.Moment;
  private curDate: moment.Moment;
  private minTime: moment.Moment;
  private maxTime: moment.Moment;
  vmsList:any;
  playlistdate:any;
  selectedDate:any;
  private config: IDatePickerConfig;
  private timeconfig: ITimeSelectConfig;
  constructor() { 
    this.curDate = moment();
    this.maxDate = moment().add(1, 'month');
    this.minDate = moment().add(-1, 'month');
    this.minTime = moment();
    this.maxTime = moment();
    this.config = {
      min: this.minDate,
      max: this.maxDate,
      format:'MM/DD/YYYY',
      monthFormat: 'MMM YYYY',
      hours24Format : "HH",
      minutesFormat : "mm",
      secondsFormat :"ss",
      allowMultiSelect: false,
      weekDayFormat: 'dd',
      showNearMonthDays: true,
      yearFormat: 'YYYY',
      showGoToCurrent: false,
      monthBtnFormat: 'MMM',
      locale: moment.locale(),
    };

    this.timeconfig={
      minTime : this.minTime,
      maxTime : this.maxTime,
    }
  }

  ngOnInit(): void {
  }

}
