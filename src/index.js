const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decodedStr = [];
    //Separate letters in original string
    for (let i = 0; i < expr.length / 10; i++) {
        decodedStr.push(expr.slice(0 + 10 * i, 10 + 10 * i));
    }
    
    return decodedStr.map(str => {
        //Decode separated original strings to morse code
        let morseCode = '';
        for (let i = 0; i < 5; i++) {
            let el = str.slice(0 + 2 * i, 2 + 2 * i);
            el === '10' ? morseCode += '.' : el === '11' ? 
            morseCode += '-' : morseCode += '';
        }
        //Decode morse code letters to human readable
        let letter;
        for (let p in MORSE_TABLE) {
            if (p === morseCode) letter = MORSE_TABLE[p];
        }
        return letter === undefined ? ' ' : letter;
    }).join('');
}

module.exports = {
    decode
}