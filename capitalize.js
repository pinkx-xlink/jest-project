function capitalize(value) {
    const word = "";
    const letters = value.split();
    for(i = 0; i < letters.length; i++) {
        word += letters[i].substring(0,1).toUpperCase();
    }
    return word;
}
capitalize('hello');
module.exports = capitalize;
