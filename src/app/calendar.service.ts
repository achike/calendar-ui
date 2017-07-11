import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CalendarEvent } from './calendar-event.ts';

@Injectable()
export class CalendarService {

  private baseUrl: string = 'http://api.achike.net';

  constructor(private http : Http){
  }

}