function analyzeArray(array) {
    const arrLength = array.length;

    let average;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = (sum / arrLength);


    return average, min, max, arrLength;
}

module.exports = analyzeArray;