// capitalize.test.js
import capitalize from './capitalize';

test('Capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('HELLO')).toBe('Hello'); // Bonus: Force lowercase rest
});