import { DevspacePage } from './app.po';

describe('devspace App', () => {
  let page: DevspacePage;

  beforeEach(() => {
    page = new DevspacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
