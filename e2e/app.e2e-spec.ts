import { UngReiwebappPage } from './app.po';

describe('ung-reiwebapp App', function() {
  let page: UngReiwebappPage;

  beforeEach(() => {
    page = new UngReiwebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
