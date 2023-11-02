import {validarNIF} from "./validacions.js";

window.onload=function(){

    const nif = '11111111H';
    let resultat=validarNIF(nif);
    console.log("NIF: "+nif);
    console.log("resultat: "+resultat);
}
