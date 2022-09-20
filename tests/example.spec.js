// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=LINE
  await page.locator('text=LINE').click();

  // Click text=BAR
  await page.locator('text=BAR').click();

  // Click text=Metric
  await page.locator('text=Metric').click();

  // Click button:has-text("Project")
  await page.locator('button:has-text("Project")').click();

  // Click text=Alert
  await page.locator('text=Alert').click();

  // Click text=Overview
  await page.locator('text=Overview').click();

  // Click text=Log out
  await page.locator('text=Log out').click();

});