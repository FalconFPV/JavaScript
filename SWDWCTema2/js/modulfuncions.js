//1. Crea un mòdul amb les funcions de validacions que hem inclòs abans a utilitats.js
function validarnombresencer(a) {
    return typeof a === 'number' && Number.isInteger(a);
}

function validarnombredecimal(a){
    return typeof a === 'number' && !Number.isInteger(a);
}

function validarNif(nif) {
    const lletraIndex = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const resta = parseInt(nif.substring(0, 8)) % 23;
    const lletra = lletraIndex[resta];
    return nif.length === 9 && lletra === nif.charAt(8).toUpperCase();
}

function validarObligatori(argument){
    if(argument === null || argument === undefined || (argument+'').trim() === ''){
        return false;
    } 
    return true;
}

export{validarnombredecimal, validarnombresencer, validarNif, validarObligatori};