// calculator.test.js
import calculator from './calculator.js';

test('Calculator operations', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(3, 4)).toBe(12);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(() => calculator.divide(5, 0)).toThrow(); // Test division by zero
});