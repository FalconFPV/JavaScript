'use strict';

function creaObjecteJavascript(){
    return {nom: "Joan", llinatges: "Morro Vallespir", cicle: "GSDAW", moduls:3};
}

function tornaCadenaObjecteJSON(){
    return '{"nom": "Joan", "llinatges": "Morro Vallespir", "cicle": "GSDAW", "moduls":3}';
}

function tornaCadenaArrayObjectesJSON(){
    return '[' +
        '{"nom": "Joan", "llinatges": "Morro Vallespir", "cicle": "GSDAW", "moduls":3}, ' +
        '{"nom": "Miiquel", "llinatges": "Comes Bennassar", "cicle": "GSDAW", "moduls":4}, ' +
        '{"nom": "Maria", "llinatges": "Bisquerra Morro", "cicle": "GSDAW", "moduls": 5}]';
}

function toJSON(objecte){
    return JSON.stringify(objecte);
}
