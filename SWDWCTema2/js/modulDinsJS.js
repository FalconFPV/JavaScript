// EXERCICI 3 Crea la pàgina modulDinsJS.html. Crea un script en un fitxer apart i utilitza algunes de les 
// validacions. Mostra les dades validades i el resultat de la validació dins l’HTML. Importa només
//  les validacions que necessitis.
import { validarNif, validarObligatori} from "/js/modulfuncions.js";

const nif ='12345678D';
const argument = 'Hola';

const esnifvalid= validarNif(nif);
const esargumentvalid=validarObligatori(argument);

console.log('El NIF ' + nif + ' es ' + (esnifvalid ? 'vàlid' : 'invalid'));
console.log('Largument "' + argument + '" es ' + (esargumentvalid ? 'vàlid' : 'invalid'));