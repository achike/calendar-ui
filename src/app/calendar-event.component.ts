import { Component, OnInit } from '@angular/core';

import { CalendarService } from './calendar.service';
import { CalendarEvent } from './calendar-event';

@Component({
  selector: 'calendar-event',
  templateUrl: 'calendar-event.component.html',
  styles: []
})
export class CalendarEventComponent implements OnInit {
  calendarEvents: CalendarEvent[] = [];
  errorMessage: string = '';

  constructor(private calendarService: CalendarService) { }

  ngOnInit() {
      this.calendarService
        .getCalendarEvents()
        .subscribe(
           p => this.calendarEvents = p,
           e => this.errorMessage = e);
  }


}