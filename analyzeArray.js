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


    let results = {
        average:
        min: function() {
            const minNum = Math.min(...ourArray);
            return minNum;
        }
        max:
        length:
    }
    return results;
}

module.exports = analyzeArray;