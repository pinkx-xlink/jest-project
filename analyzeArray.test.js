const { experiments } = require('webpack');
const analyzeArray = require('./analyzeArray');

test('Gets the avg, min, max, and length of an array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).toEqual([4,1,8,6]));
});
