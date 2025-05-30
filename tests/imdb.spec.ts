import { test } from './test.base';

test('movie search', async ({ app: { mainPage, moviePage } }) => {
  const expectedMovieTitle = 'Inception';
  await mainPage.open();
  await mainPage.search.searchFor(expectedMovieTitle);
  await moviePage.expectMovieTitle(expectedMovieTitle);
});

test('movie details from the chart page', async ({ app: { chartPage, moviePage } }) => {
  await chartPage.open();
  await chartPage.openMovieByIndex();
  await moviePage.expectMovieTitle();
  await moviePage.expectMovieRating();
  await moviePage.expectReleaseDate();
});
