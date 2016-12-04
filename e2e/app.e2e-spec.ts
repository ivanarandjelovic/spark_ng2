import { Spark1Ng2Page } from './app.po';

describe('spark1-ng2 App', function() {
  let page: Spark1Ng2Page;

  beforeEach(() => {
    page = new Spark1Ng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ola');
  });
});
