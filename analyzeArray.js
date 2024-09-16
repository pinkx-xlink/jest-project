function analyzeArray([array]) {
    let ourArray = array;
    const arrLength = array.length;
    let sum = 0;
    // INVALID LOOP - NEEDS DEBUGGED
    function getAverage() {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        getAverage();
        return sum;
    }
    
    const average = (sum / arrLength);

    
    getMin();
    
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