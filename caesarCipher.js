const { experiments } = require('webpack');
const caesarCipher = require('./caesarCipher');

test('Refactors a string using caesar cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});