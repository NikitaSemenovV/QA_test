import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/client');
	await page.locator('#userEmail').fill('nikita4semenov@gmail.com');
	await page.locator('#userPassword').fill('123456');
	await page.locator('#login').click();
	await expect(page.locator('[class="btn w-40 rounded"]').first()).toBeVisible();
});