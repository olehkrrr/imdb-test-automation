import { Page } from '@playwright/test';
import { Search } from './components/search';

export const MainPage = (page: Page) => {
  return {
    search: Search(page),

    async open() {
      await page.goto('/');
    },
  };
};
