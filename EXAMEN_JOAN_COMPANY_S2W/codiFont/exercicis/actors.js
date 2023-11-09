import {getActors} from '../js/servidor.js';

'use strict';

window.onload = function () {
    const actors = JSON.parse(getActors());
    const id = '20'; //INDICAM L'ID DEL ACTOR QUE VOLEM MOSTRAR
    let cos = "";
    for (let index in actors) {
        if (actors[index].actorId === parseInt(id)) {
            cos += '<br>';
            for (let nomCamp in actors[index]) {
                cos += nomCamp + ' ' + actors[index][nomCamp] + ' ';
            }
            cos += '<br>';
        }
    }
    document.getElementById('mostrador').innerHTML = cos;
}