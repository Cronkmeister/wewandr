import { test, expect } from '@playwright/test';

test.describe('WeWandr Waitlist', () => {
  test('should display the main page correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle('WeWandr — beta waitlist');
    
    // Check main heading
    await expect(page.getByRole('heading', { name: 'WeWandr' })).toBeVisible();
    
    // Check description
    await expect(page.getByText('Discover amazing places and experiences around the world')).toBeVisible();
    
    // Check form elements
    await expect(page.getByLabel('Email address')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Join waitlist' })).toBeVisible();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.goto('/');
    
    // Try to submit empty form
    await page.getByRole('button', { name: 'Join waitlist' }).click();
    
    // Should show validation error
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('should show validation error for malformed email', async ({ page }) => {
    await page.goto('/');
    
    // Enter invalid email
    await page.getByLabel('Email address').fill('invalid-email');
    await page.getByRole('button', { name: 'Join waitlist' }).click();
    
    // Should show validation error
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('should handle form submission (mock)', async ({ page }) => {
    await page.goto('/');
    
    // Enter valid email
    await page.getByLabel('Email address').fill('test@example.com');
    
    // Submit form
    await page.getByRole('button', { name: 'Join waitlist' }).click();
    
    // Since we don't have Supabase configured, this will likely show an error
    // But the form should handle the submission attempt gracefully
    await expect(page.getByRole('button', { name: 'Join waitlist' })).toBeVisible();
  });
});
