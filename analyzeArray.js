function analyzeArray([array]) {
    const arrLength = array.length;
    let sum = 0;
    // INVALID LOOP - NEEDS DEBUGGED
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        return sum;
    }
    const average = (sum / arrLength);

    const min = Math.min(...array);
    const max = Math.max(...array);

    return [average, min, max, arrLength];
}

module.exports = analyzeArray;