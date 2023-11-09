/**Comprova que el paràmetre sigui numèric i de tipus "sencer".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 sigui 0.
 *
 * @param  numero La dada a comprovar.
 * @returns true si és un valor sencer
 */
// function validarSencer(numero) {
//     if (!isNaN(numero) && (numero % 1 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// V2
function validarSencer(numero) {
    numero = numero + "";
    if (validarObligatori(numero) && !isNaN(numero) && Number.isInteger(parseFloat(numero))) {
        return true;
    } else {
        return false;
    }
}

/**Comprova que el paràmetre sigui numèric i de tipus "real".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 no sigui 0.
 *
 * @param  numero La dada a comprolet.
 * @returns true si és un valor decimal
 */
// function validarDecimal(numero) {
//     if (!isNaN(numero) && (numero % 1 !== 0)) {
//         return false;
//     } else {
//         return true;
//     }
// }
// V2
function validarDecimal(numero) {
    numero = numero + "";
    if (validarObligatori(numero) && !isNaN(numero) && !Number.isInteger(parseFloat(numero))) {
        return true;
    } else {
        return false;
    }
}


/** Ex 13 Comprova que el paràmetre telefon contengui un telèfon mòbil espanyol vàlid.
 *
 * @param telefon El nombre de telefon a validar.
 * @returns true si el telèfon és correcte.
 */
function validarTelefonMobil(telefon) {
    telefon = telefon + "";
    if (validarSencer(telefon) && (telefon.length === 9) && ((telefon.charAt(0) === "6") || (telefon.charAt(0) === "7"))) {
        return true;
    }
    else{
        return false;
    }
}

/** Exercici 14. Comprova que el paràmetre telefon contengui un telèfon espanyol vàlid.
 * Si especificam el segon  paràmetre podem afinar la validació a un mòbil o fixe.
 *
 * @param telefon El nombre de telefon a validar.
 * @param tipus 0 => mòbil 1 => fixe undefined => qualsevol
 * @returns true si el telèfon és correcte.
 */
function validarTelefon(telefon, tipus) {
    telefon = telefon + "";
    if (validarSencer(telefon) && (telefon.length === 9)) {
        if (((telefon.charAt(0) === "6") || (telefon.charAt(0) === "7"))
            && ((typeof tipus === 'undefined') || (tipus === 0))) {
            return true;
        }
        if (((telefon.charAt(0) === "8") || (telefon.charAt(0) === "9"))
            && ((typeof tipus === 'undefined') || (tipus === 1))) {
            return true;
        }
    }
    return false;
}


/** Calcula els dies que té un mes d'un any concret, tenint en compte els anys de traspàs.
 *
 * @param  mes El mes, d'1 a 12
 * @param any L'any complet
 * @returns Els dies que té el mes demanat.
 */
function diesMes(mes, any) {
    let dies = -1;
    mes = parseInt(mes);
    any = parseInt(any);

    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            dies = 31;
            break;
        }

        case 4:
        case 6:
        case 9:
        case 11: {
            dies = 30;
            break;
        }
        case 2: {
            if ((any % 4 === 0) && ((any % 100 !== 0) || (any % 400 === 0))) {
                dies = 29;
            } else {
                dies = 28;
            }
            break;
        }
    }
    return dies;
}

/**
 * Exercici 15. Valida que la cadena de text que rep com a paràmetre contengui una data, amb els camps separats per /

 * @param data La cadena de text amb la data
 * @returns {Boolean} true si és una data correcte, false si no.
 *  */
function validarData(data) {
    if (!validarObligatori(data)) {
        return false;
    }
    let [dia, mes, any] = data.split("/");
    // Totes han de ser sencers
    if (!validarSencer(dia) || !validarSencer(mes) || !validarSencer(any)) {
        return false;
    }
    // Mes correcte
    if (mes < 1 || mes > 12) {
        return false;
    }
    // Any correcte
    if (any < 1) {
        return false;
    }
    // Dia correcte
    // if (parts[0] < 1 || parts[0] > 31) {
    //     return false;
    // }
    // Dia correcte
    if (dia < 1 || dia > diesMes(mes, any)) {
        return false;
    }
    return true;
}

/**
 * Exercici 16  Valida que el paràmetre que rep contengui un NIF vàlid.

 * @param nif Cadena de text amb el nif complet
 * @returns {Boolean}  true si es vàlid, false si no ho és.
 * */
function validarNIF(nif) {
    let cadena = 'TRWAGMYFPDXBNJZSQVHLCKET';
    if (!validarObligatori(nif) || nif.length !== 9) {
        return false;
    }
    let lletra = nif.charAt(8);
    let numero = parseInt(nif.substring(0, 8));
    let modul = numero % 23;
    if (lletra !== cadena[modul]) {
        return false;
    }
    return true;
}

/**
 * Comprova que un camp obligatori contengui informació. Realitza tres comprovacions:
 * <ol>
 * <li> El valor no pot ser null</li>
 * <li> El valor no pot ser undefined</li>
 * <li> El valor no pot contenir únicament espais en blanc.</li>
 *
 * </ol>

 * @param {type} valor El valor que comprovam
 * @returns {Boolean} true si conte dades, false en cas contrari*/
function validarObligatori(valor) {
    if (valor !== null && typeof valor !== 'undefined') {
        valor = valor.toString().trim(); //Converteix el valor a cadena i elimina els espais en blanc del principi i final.
        if (valor.length > 0) {
            return true;
        }
    }
    return false;
}

export {
    validarObligatori,
    validarData,
    validarTelefon,
    validarTelefonMobil,
    validarNIF,
    validarSencer,
    validarDecimal
};
