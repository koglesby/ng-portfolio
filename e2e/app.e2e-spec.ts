import { NgPortfolioPage } from './app.po';

describe('ng-portfolio App', () => {
  let page: NgPortfolioPage;

  beforeEach(() => {
    page = new NgPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
