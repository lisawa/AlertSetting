import { AlertSettingPage } from './app.po';

describe('alert-setting App', function() {
  let page: AlertSettingPage;

  beforeEach(() => {
    page = new AlertSettingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
