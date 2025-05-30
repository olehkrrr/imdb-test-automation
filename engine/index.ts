import { Page } from '@playwright/test';
import { MainPage } from '../pages/main.page';
import { MoviePage } from '../pages/movie.page';
import { ChartPage } from '../pages/chart.page';

export const Application = (page: Page) => ({
  mainPage: MainPage(page),
  moviePage: MoviePage(page),
  chartPage: ChartPage(page),
});
