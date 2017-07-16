import { AclientPage } from './app.po';

describe('aclient App', () => {
  let page: AclientPage;

  beforeEach(() => {
    page = new AclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
