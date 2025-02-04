import caesarCipher from './caesarCipher';

test('Shifts letters correctly', () => {
  // Wrapping
  expect(caesarCipher('xyz', 3)).toBe('abc');
  // Case preservation
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  // Punctuation unchanged
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});