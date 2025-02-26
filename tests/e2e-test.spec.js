import { test, expect } from '@playwright/test';

test('increment view count between page loads', async ({ page }) => {
  const website_url = 'https://' + process.env.WEBSITE_URL
  await page.goto(website_url);
  
  const viewCountElement = page.locator('#visitor-count');
  await expect(viewCountElement).toHaveText(/^\d+$/);
  
  
  const initialNumber = parseInt(await viewCountElement.innerText());
  
  await page.reload();
  
  await expect(viewCountElement).toHaveText(/^\d+$/);
  const newNumber = parseInt(await viewCountElement.innerText());


  expect(newNumber).toBe(initialNumber + 1);

});
