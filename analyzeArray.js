function analyzeArray([array]) {
    let ourArray = array;
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

    function getMin() {
        const minNum = Math.min(...ourArray);
        return minNum;
    }
    getMin();
    
    const max = Math.max(...array);


    let results = {
        average:
        min:
        max:
        length:
    }
    return results;
}

module.exports = analyzeArray;