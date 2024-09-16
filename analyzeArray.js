const { curry } = require("lodash");

function analyzeArray([array]) {
    
    const arrLength = array.length;

    const sum = array.reduce((current, previous) => {
        return current + previous;
    });
    const average = (sum / array.length);
    
    const min = array.reduce((current, previous) => {
        return Math.min(current, previous);
    });
    const max = Math.max(...array);

    const results = {
        average: average,
        min: min,
        max: max,
        length: arrLength,
    };
    return results;
}

module.exports = analyzeArray;