import { test as base } from '@playwright/test';
import { Application } from '../engine';

export const test = base.extend<{
  app: ReturnType<typeof Application>;
}>({
  app: async ({ page }, use) => {
    await use(Application(page));
  },
});
