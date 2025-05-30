import { Page } from '@playwright/test';

export const Search = (page: Page) => {
  return {
    async searchFor(query: string) {
      await page.getByTestId('suggestion-search').fill(query);
      await page.getByTestId('search-result--const').filter({ hasText: query }).first().click();
    },
  };
};
