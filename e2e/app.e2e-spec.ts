import { CalendarUiPage } from './app.po';

describe('calendar-ui App', function() {
  let page: CalendarUiPage;

  beforeEach(() => {
    page = new CalendarUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
