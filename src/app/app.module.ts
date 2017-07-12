import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarEventComponent } from './calendar-event.component';
import { CalendarComponent } from './calendar.component';

import { CalendarService } from './calendar.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarEventComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
