import { Angular5LeraningPage } from './app.po';

describe('angular5-leraning App', () => {
  let page: Angular5LeraningPage;

  beforeEach(() => {
    page = new Angular5LeraningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
