import { expect, Page } from '@playwright/test';

export const MoviePage = (page: Page) => {
  const pageTtitle = page.getByTestId('hero__pageTitle');
  const movieTitle = page.getByTestId('hero__primary-text');
  const movieRating = page
    .getByTestId('hero-rating-bar__aggregate-rating__score')
    .filter({ visible: true });
  return {
    async expectMovieRating(rating: string | RegExp = /\d\.\d/) {
      await expect(movieRating).toHaveText(rating);
    },

    async expectMovieTitle(title: string | RegExp = /\w+/) {
      await expect(movieTitle).toHaveText(title);
    },

    async expectReleaseDate(releaseDate: string | RegExp = /\d{4}/) {
      await expect(pageTtitle.locator('~ul')).toHaveText(releaseDate);
    },
  };
};
