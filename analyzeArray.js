function analyzeArray([array]) {
    const arrLength = array.length;
    let sum = 0;
    // INVALID LOOP - NEEDS DEBUGGED
    function getSum() {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        getSum();
        return sum;
    }
    
    const average = (sum / arrLength);

    const min = Math.min(...array);
    const max = Math.max(...array);

    return [array.average, array.min, array.max, array.arrLength];
}

module.exports = analyzeArray;