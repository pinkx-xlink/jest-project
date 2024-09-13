function caesarCipher(str, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        const charCode = char.charCodeAt(0);

        if (alphabet.includes(char.toUpperCase())) {
            const shiftCharCode = ((charCode - base + shift) % 26) + base;
            result += String.fromCharCode(shiftCharCode);
        } else {
            result += char;
        }
    }
    return result;
}

module.exports = caesarCipher;