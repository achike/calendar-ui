export interface CalendarEvent {
  
  id: number;
  title: string;
  location: string;
  
  eventDate: string;
  eventTime: string;
  
  reminderTime?: Date;
  
  reminderSent?: boolean;
  
}