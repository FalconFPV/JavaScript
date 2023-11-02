'use strict';

function maxim(vector) {
    let max = vector[0];
    for (let index = 1; index < vector.length; index++) {
        if (vector[index] > max) {
            max = vector[index];
        }
    }
    return max;
}

function maxim2(vector) {
    return Math.max(...vector);
}

function maxim3(vector) {
    return vector.reduce((a, b) => Math.max(a, b), -Infinity);
}

function minim(vector) {
    let min = vector[0];
    for (let index = 1; index < vector.length; index++) {
        if (vector[index] < min) {
            min = vector[index];
        }
    }
    return min;
}

function minim2(vector) {
    return Math.min(...vector);
}

function minim3(vector) {
    return vector.reduce((a, b) => Math.min(a, b), Infinity);
}

function mitjana(vector) {
    let suma = 0;
    for (let index in vector) {
        suma += vector[index];
    }
    return suma / vector.length;
}

function mitjana2(vector) {
     return vector.reduce((a, b) => a + b) / vector.length;
}

function copiaArray(original) {
    // var copia = [];
    // for (var index = 0; index < original.length; index++) {
    //     copia.push(original[index]);
    // }
    // return copia;
    return Array.from(original);
}


function moda(array) {
    function posicioMaxim() {
        var max = aparicions[0];
        var pos = 0;
        for (var index = 1; index < aparicions.length; index++) {
            if (aparicions[index] > max) {
                max = aparicions[index];
                pos = index;
            }
        }
        return pos;
    }


    var valors = [];
    var aparicions = [];
    for (var index = 0; index < array.length; index++) {
        if (valors.indexOf(array[index]) >= 0) {
            aparicions[valors.indexOf(array[index])]++;
        } else {
            valors.push(array[index]);
            aparicions.push(1);
        }
    }
    return valors[posicioMaxim()];
}

function camelCase(frase) {
    frase = frase.toLowerCase();
    var paraules = frase.split(" ");
    // for (var index = 1; index < paraules.length; index++) {
    //     paraules[index] = paraules[index].charAt(0).toUpperCase() + paraules[index].substr(1);
    // }
    paraules = paraules.map(actual => actual.charAt(0).toUpperCase() + actual.substring(1));
    paraules[0] = paraules[0].toLowerCase(); // El map les modifica totes.
    return paraules.join('');

}

/**
 * Elimina els duplicats de <strong>l'array original</strong>
 * @param origen L'array
 */
function eliminaDuplicats(origen) {
    for (var index = 0; index < origen.length; index++) {
        while (origen.lastIndexOf(origen[index]) !== index) {
            origen.splice(origen.lastIndexOf(origen[index]), 1);
        }
    }
}

// function eliminaDuplicats2(origen) {
//     let conjunt=new Set(origen);
//     return Array.from(conjunt);
// }

const eliminaDuplicats2 = origen => Array.from(new Set(origen));
