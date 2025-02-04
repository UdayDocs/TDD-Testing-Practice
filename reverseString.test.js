// reverseString.test.js
import reverseString from './reverseString';

test('Reverses string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('123!')).toBe('!321');
});