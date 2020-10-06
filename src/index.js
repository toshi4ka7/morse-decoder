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
    resArray = [];
    for (let i = 0; i < expr.length; i += 10) {
      resArray.push(expr.substring(i, i + 10));
    }

    resArray.forEach(function(value, index, array) {
      array[index] = code(value.replace(/^0+/g, ""));
    });

    function code(str) {

      if (str === '**********') return ' ';

      let resArray = [];
      for (let i = 0; i < str.length; i += 2) {
        resArray.push(str.substring(i, i + 2));
      }

      let resStr = '';
      resArray.forEach(function(value) {
        if (value === '10') {
           resStr += '.';
        } else if (value === '11') {
          resStr += '-';
        }
      })
      
      return MORSE_TABLE[resStr];
    }


    return resArray.join('');
}

module.exports = {
    decode
}