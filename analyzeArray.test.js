const { experiments } = require('webpack');
const analyzeArray = require('./analyzeArray');

test('Gets the avg, min, max, and length of an array', () => {
    expect(analyzeArray([1,8,3,4,2,6]).toEqual(
        object == {
            average: 4,
            min: 1,
            max: 8,
            length: 6
         };
    ));
});
