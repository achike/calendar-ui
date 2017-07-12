import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Calendar } from './calendar';
import { CalendarEvent } from './calendar-event';



@Injectable()
export class CalendarService {

  // TODO Remember to change this to http://api.achike.net
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

  saveCalendar(calendar: Calendar): Observable<Response> {
      
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    console.log('Calendar in Form -> ' + calendar);
    
    let calendarJson = JSON.stringify(calendar);
    
    console.log('Calendar in JSON Form -> ' + calendarJson);
    
    return this.http.post(this.baseUrl+'/calendar', calendarJson, options );
  }
  
}

function mapCalendarEvents(response:Response): CalendarEvent[]{
  //throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  console.log('Achike is HERE!!!');
  return response.json().map(toCalendarEvent)
}

function toCalendarEvent(r:any): CalendarEvent{
  console.log('Achike is HERE!!! 2');


  let calendarEvent = <CalendarEvent>({
    id: r.id,
    title: r.title,
    location: r.location,
    eventDate: "Now",
    eventTime: "Now 2",
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
