function analyzeArray(array) {
    const arrLength = array.length;

    let average;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        return sum;
    }
    average = (sum / arrLength);

    const min = Math.min(...array);
    const max = Math.max(...array);
    
    finalResult = average, min, max, arrLength;
    return finalResult;
}

module.exports = analyzeArray;