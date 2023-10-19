
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a + b;
}


function resta(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a - b;
}

function multiplicacio(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a * b;
}

function divisio(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return null;
    }
    return a / b;
}

function potencia(base, exponent) {
    if (typeof base!== 'number' || typeof exponent !== 'number') {
        return null;
    }
    return Math.pow(base, exponent);
}

/**Comprova que el paràmetre sigui numèric i de tipus "sencer". 
 * Comprova que contengui dades, que siguin numèriques i que el reste de la 
 * divisió sencera amb 1 sigui 0.
 * 
 * @param  numero La dada a comprovar.
 * @returns true si és un valor sencer
 */
function validarSencer(numero) {
    if (validarObligatori(numero) && !isNaN(numero) && (numero % 1 === 0)) {
        return true;
    } else {
        return false;
    }
}

/**Comprova que el paràmetre sigui numèric i de tipus "real". 
 * Comprova que contengui dades, que siguin numèriques i que el reste de la 
 * divisió sencera amb 1 no sigui 0.
 * 
 * @param  numero La dada a comprovar.
 * @returns true si és un valor decimal
 */
function validarDecimal(numero) {
    if (validarObligatori(numero) && !isNaN(numero) && (numero % 1 !== 0)) {
        return false;
    } else {
        return true;
    }
}

/** Demana a l'usuari un nombre sencer. Mostra el missatge a l'alert per informar 
 * a l'usuari de quina dada li demanam. No accepta cap dada que no sigui un sencer.
 * 
 * @param  cadena El prompt de l'alert.
 * @returns un valor sencer
 */
function llegirSencer(cadena) {
    var numero;
    do {
        numero = prompt(cadena);
    } while (!validarSencer(numero));
    return parseInt(numero);
}

/** Comprova que el paràmetre telefon contengui un telèfon espanyol vàlid. 
 * Si especificam el segon  paràmetre podem afinar la validació a un mòbil o fixe.
 * 
 * @param telefon El nombre de telefon a validar. 
 * @param tipus 0 => mòbil 1 => fixe undefined => qualsevol
 * @returns true si el telèfon és correcte.
 */
function validarTelefon(telefon, tipus) {
    if (validarObligatori(telefon) && !isNaN(telefon)) {
        telefon = telefon + "";
        if ((telefon.indexOf('.') < 0) && (telefon.length === 9)) {
            if (((telefon.charAt(0) === "6") || (telefon.charAt(0) === "7"))
                    && ((typeof tipus==='undefined')|| (tipus === 0))) {
                return true;
            }
            if (((telefon.charAt(0) === "8") || (telefon.charAt(0) === "9"))
                    && ((typeof tipus==='undefined')|| (tipus === 1))) {
                return true;
            }
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
    var dies = -1;
    mes = parseInt(mes);
    any = parseInt(any);

    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        {
            dies = 31;
            break;
        }

        case 4:
        case 6:
        case 9:
        case 11:
        {
            dies = 30;
            break;
        }
        case 2:
        {
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
* Valida que la cadena de text que rep com a paràmetre contengui una data, amb els camps separats per /

 * @param data La cadena de text amb la data
 * @returns {Boolean} true si és una data correcte, false si no.
 *  */
function validarData(data) {
    if (!validarObligatori(data)) {
        return false;
    }
    var parts = data.split("/");
    // Ha de tenir tres parts
    if (parts.length !== 3) {
        return false;
    }
    // Totes han de ser sencers
    if (!validarSencer(parts[0]) || !validarSencer(parts[1])
            || !validarSencer(parts[2])) {
        return false;
    }
    // Mes correcte
    if (parts[1] < 1 || parts[1] > 12) {
        return false;
    }
    // Any correcte
    if (parts[2] < 1) {
        return false;
    }
    // Dia correcte
    if (parts[0] < 1 || parts[0] > diesMes(parts[1], parts[2])) {
        return false;
    }
    return true;
}

/**
* Valida que el paràmetre que rep contengui un NIF vàlid.

 * @param nif Cadena de text amb el nif complet
 * @returns {Boolean}  true si es vàlid, false si no ho és.
 * */
function validarNIF(nif) {
    var cadena = 'TRWAGMYFPDXBNJZSQVHLCKET';
    if (!validarObligatori(nif) || nif.length !== 9) {
        return false;
    }
    var lletra = nif.charAt(8);
    var numero = parseInt(nif.substring(0, 8));
    var modul = numero % 23;
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
/**
 * EXERCICI 4. Crea una funció calcula que rebi tres paràmetres, els dos primers seran números i el tercer una funció.
 *  Dins el cos de la funció s'executarà la funció passada com a paràmetre amb les altres dades. Prova si funciona.
 * @param {*} a nombre
 * @param {*} b nombre
 * @param {*} c funció
 */
function calcula(a,b,suma){
    return suma(a,b);
}
/**
 * EXERCICI 6. Crea una funció anomenada mostra que en executar-se mostri un alert. Assigna aquesta funció a l'esdeveniment
 * onclick d'un botó dins el windows onload. Comprova que l’alert es mostri en pitjar el botó i no en carregar-se la pàgina.
 */
function mostra() {
    alert("Hola!");
}
/**
 * EXERCICI 7. Crea una funció anomenada mostraDades amb un paràmetre. En executar-se ha de mostrar aquest paràmetre dins d'un alert. 
 * Assigna aquesta funció a l'esdeveniment onclick d'un botó dins del windows.onload
 */
function mostraDades(a){
    alert(a);
}
/**
 * EXERCICI 9. Crea una funció amb una funció interna com les del pdf i provau-ho.
 */
function grossa(a,b){
    let cadena='Resultat: ';
    function petita(valor){
        alert(cadena+valor);
    }
    petita(a+b);
    return a+b;    
}
/**
 * 
 * EXERCICI 10. Crea un formulari amb 10 botons amb identificadors del tipus boto0, boto1, ... 
 * Utilitza un for dins del onload per inicialitzar-los i que mostri un alert amb el nombre de l'identificador.
 * Utilitza var per definir la variable del for. Cada botó mostra el valor que toca? Perquè?
 * Utilitza ara let. Que passa? Perquè?
 * Escriu les respostes dins l’HTML de la pàgina.
 */
function crearbotonsvar() {
    var result = 'Utilitzant var:<br><br>';
    for (var i = 1; i <= 10; i++) {
        result += '<button onclick="mostrarAlert(\'' + i + '\')">Boto' + i + '</button>';
    }
    return result;
}

function crearbotonslet() {
    var result = 'Utilitzant let:<br><br>';
    for (let i = 1; i <= 10; i++) {
        result += '<button onclick="mostrarAlert(\'' + i + '\')">Boto' + i + '</button>';
    }
    return result;
}

function mostrarAlert(id) {
    alert('Has clicat sobre el botó amb id: ' + id);
}
/**
 *  
 * EXERCICI 11. Repeteix l'exercici anterior amb let, però ara utilitza arrow functions per 
 * assignar el codi als esdeveniments.
 */




















// function crearbotonsletarrows() {
//     var result = 'Utilitzant let amb arrow functions:<br><br>';
//     for (let i = 0; i < 10; i++) {
//         result += `<button onclick="${() => mostrarAlert(i)}">Boto${i}</button>`;
//     }
//     return result;
// }




