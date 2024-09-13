const { experiments } = require('webpack');
const caesarCipher = require('./caesarCipher');

test('Refactors a string using caesar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Refactors a capitalized string using caesar cipher', () => {
    expect(caesarCipher('HeLLO', 3)).toBe('KhOOr');
});

test('Refactors a punctuated string using caesar cipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zurog!');
});