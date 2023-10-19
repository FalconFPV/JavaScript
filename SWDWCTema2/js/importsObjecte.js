import * as validacions from 'utilitats.js';

const nif ='12345678D';
const argument = 'Hola';

const esnifvalid = validacions.validarNif(nif);
const esargumentvalid = validacions.validarObligatori(obligatori);

console.log('El NIF ' + nif + ' es ' + (esnifvalid ? 'vàlid' : 'invalid'));
console.log('Largument "' + argument + '" es ' + (esargumentvalid ? 'vàlid' : 'invalid'));