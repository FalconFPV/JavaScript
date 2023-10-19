function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacio(a, b) {
    return a * b;
}

function divisio(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        return "Error: Divisió per zero";
    }
}

function potencia(base, exponent) {
    return Math.pow(base, exponent);
}

function validarnombresencer(a) {
    return typeof a === 'number' && Number.isInteger(a);
}

function validarnombredecimal(a){
    return typeof a === 'number' && !Number.isInteger(a);
}

function llegirenters(){
    let num=prompt('Introdueix un nombre:');
    while(isNaN(num) || !Number.isInteger(parseInt(num))){
        num=prompt('Error, torna a introduir un nombre:');
    }
    return parseInt(num);
}
// EXERCICI 16. Afegeix a utilitats.js una funció validarTelefon que validi un número de telèfon mòbil. 
// Tots sabem que un número de telèfon mòbil només inclou dígits, en té 9, i el primer ha de 
// ser un 6 o, ara també, un 7. 
function validarTelefon(ntel,prefx){
    if(prefx==9||prefx==8){
        if(900000000<=ntel<=999999999||899999999>=ntel>=800000000){
            console.log('El nombre de telefon fixe '+ntel+' és vàlid.');
        }
        else{
            console.log('El nombre de telefon fixe '+ntel+' NO és vàlid.');
        }
    }
    else{
        if(ntel<799999999&&ntel>=600000000){
            console.log('El nombre de telefon mobil '+ntel+' és vàlid.');
        }
        else{
            console.log('El nombre de telefon mobil '+ntel+' NO és vàlid.');
        }
    }

}
// EXERCICI 18. Afegeix a utilitats.js una funció validarData que validi si el que rep com a paràmetre és una 
// data en el nostre format dd/mm/aaaa. No cal que mireu si el mes té 30 o 31 dies o si l'any és
//  de traspàs. Per exemple, 3/8/2012 és correcta, per 15/15/2022 no. Afegeix una comprovació de 
//  data a validacions.html. Opcional:Comprova correctament el dia del mes.
function validarData(dia,mes,any){
    if(dia>=1&&dia<=31 && mes>=1&&mes<=12){
        console.log('La data és correcte');
    }
    else{
        console.log('La data NO és correcte');
    }
}
// EXERCICI 19. Afegeix a utilitats.js una funció validarNif. Ha de comprovar que l'argument que li 
// passam és un nif vàlid de 8 xifres i una lletra. La lletra ha de ser la correcta. S'obté 
// cercant el reste del NIF entre 23. Aquest reste és l'index de la cadena 'TRWAGMYFPDXBNJZSQVHLCKET' 
// Si el resta dona 3, la lletra serà A. Afegeix a validacions.html una validació d'un nif.
function validarNif(nif) {
    const lletraIndex = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const resta = parseInt(nif.substring(0, 8)) % 23;
    const lletra = lletraIndex[resta];
    return nif.length === 9 && lletra === nif.charAt(8).toUpperCase();
}
// EXERCICI 20. Afegeix a utilitats.js una funció validarObligatori. Ha de comprovar que l'argument que
// li passam conté un valor, no és buid (null, cadena buida o cadena de blancs).
function validarObligatori(argument){
    if(argument === null || argument === undefined || (argument+'').trim() === ''){
        return false;
    } 
    return true;
}
//EXERCICI 4 MODULS
export const validacions = {
    validarNif: function(nif) {
        const lletraIndex = 'TRWAGMYFPDXBNJZSQVHLCKET';
        const resta = parseInt(nif.substring(0, 8)) % 23;
        const lletra = lletraIndex[resta];
        return nif.length === 9 && lletra === nif.charAt(8).toUpperCase();
    },

    validarObligatori: function(argument) {
        if (argument === null || argument === undefined || (argument + '').trim() === '') {
            return false;
        }
        return true;
    }
};