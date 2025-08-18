import { isDisposableEmail } from '../disposableDomains';

describe('disposableDomains', () => {
  test('should identify disposable email domains', () => {
    expect(isDisposableEmail('test@10minutemail.com')).toBe(true);
    expect(isDisposableEmail('user@mailinator.com')).toBe(true);
    expect(isDisposableEmail('example@yopmail.com')).toBe(true);
  });

  test('should allow legitimate email domains', () => {
    expect(isDisposableEmail('user@gmail.com')).toBe(false);
    expect(isDisposableEmail('contact@company.com')).toBe(false);
    expect(isDisposableEmail('hello@example.org')).toBe(false);
  });

  test('should handle case insensitive domains', () => {
    expect(isDisposableEmail('test@10MINUTEMAIL.COM')).toBe(true);
    expect(isDisposableEmail('user@MAILINATOR.COM')).toBe(true);
  });

  test('should handle invalid email formats', () => {
    expect(isDisposableEmail('invalid-email')).toBe(false);
    expect(isDisposableEmail('')).toBe(false);
    expect(isDisposableEmail('@domain.com')).toBe(false);
  });
});
