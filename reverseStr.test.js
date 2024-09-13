const { experiments } = require('webpack');
const reverseStr = require('./reverseStr');

test('reverse a string', () => {
    expect(reverseStr('hello')).toMatch('olleh');
});

test('reverses "cute cat" string', () => {
    expect(reverseStr('cute cat')).toMatch('tac etuc');
});