function analyzeArray([array]) {
    // let ourArray = array;
    const arrLength = array.length;
    let sum = 0;
    // INVALID LOOP - NEEDS DEBUGGED
    function getSum(array) {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        getSum(array);
        return sum;
    }
    
    const average = (sum / arrLength);

    array.prototype.min = function() {
        return Math.min.apply(null, this);
      };

    const minNum = array.min();
    const max = Math.max(...array);

    return [array.average, minNum, array.max, array.arrLength];
}

module.exports = analyzeArray;