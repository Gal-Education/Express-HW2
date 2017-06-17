import { FavoritesPage } from './app.po';

describe('favorites App', () => {
  let page: FavoritesPage;

  beforeEach(() => {
    page = new FavoritesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
