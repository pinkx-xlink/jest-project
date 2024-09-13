const { experiments } = require('webpack');
const reverseString = require('./reverseString');

test('reverse a string', () => {
    expect(reverseString('hello')).toMatch('olleh');
});

test('reverses "cute cat" string', () => {
    expect(reverseString('cute cat')).toMatch('tac etuc');
});