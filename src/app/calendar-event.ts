export interface CalendarEvent {
  
  url: string;
  
  id: number;
  title: string;
  location: string;
  
  eventDate: Date;
  eventTime: Date;
  
  reminderTime: Date;
  
  reminderSent: boolean;
  
}