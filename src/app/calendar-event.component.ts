import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute,
              private calendarService: CalendarService,
              private router: Router) { }

  ngOnInit() {
      this.calendarService
        .getCalendarEvents()
        .subscribe(
           p => this.calendarEvents = p,
           e => this.errorMessage = e);
  }


}