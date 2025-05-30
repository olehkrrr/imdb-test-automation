import { Page } from '@playwright/test';

export const ChartPage = (page: Page) => {
  return {
    async open() {
      await page.goto('/chart/top');
    },

    async openMovieByIndex(index: number = 0) {
      await page.getByTestId('chart-layout-main-column').getByRole('group').nth(index).click();
    },
  };
};
