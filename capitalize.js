function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
capitalize('hello');
module.exports = capitalize;
