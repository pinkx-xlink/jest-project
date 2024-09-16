const analyzeArray = (array) => {
    if (array.length === 0) {
        return 'not an array';
    } else {
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
}

module.exports = analyzeArray;