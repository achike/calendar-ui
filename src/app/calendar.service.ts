import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CalendarEvent } from './calendar-event';

@Injectable()
export class CalendarService {

  private baseUrl: string = 'http://api.achike.net';

  constructor(private http : Http){
  }

  getCalendarEvents(): Observable<CalendarEvent[]> {
    let calendarEvents$ = this.http
      .get(`${this.baseUrl}/events`, { headers: this.getHeaders()})
      .map(mapCalendarEvents)
      .catch(handleError);
      
    return calendarEvents$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function mapCalendarEvents(response:Response): CalendarEvent[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(mapCalendarEvent)
}

function toCalendarEvent(r:any): CalendarEvent{
  let calendarEvent = <CalendarEvent>({
    url: r.url,
    title: r.title,
    eventDate: new Date(r.eventDate),
    eventTime: new Date(r.eventTime),
  });
  console.log('Parsed Calendar Event:', calendarEvent);
  return calendarEvent;
}

function mapCalendarEvent(response:Response): CalendarEvent{
   return toCalendarEvent(response.json());
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
