const { experiments } = require('webpack');
const analyzeArray = require('./analyzeArray');

test('Refactors a punctuated string using caesar cipher', () => {
    expect(analyzeArray([1,8,3,4,2,6]).toBe([4, 1, 8, 6]));
});