import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service';
import { Calendar } from './calendar';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styles: []
})
export class CalendarComponent implements OnInit {
  
  calendar: Calendar;

  errorMessage: string = '';

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {}
  
  saveCalendarDetails() {
      this.calendarService
      .saveCalendar(this.calendar)
      .subscribe(r => console.log('Achike-DEBUG: Saved!'));
  }
  

}