const { experiments } = require('webpack');
const reverseStr = require('./reverseStr');

test('reverse a string', () => {
    expect(reverseStr('hello')).toBe('olleh');
});
