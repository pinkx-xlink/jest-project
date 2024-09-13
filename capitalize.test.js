const { experiments } = require('webpack');
const capitalize = require('./capitalize');

test('capitalizes the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

