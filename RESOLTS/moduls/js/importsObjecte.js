import * as Validacions from "./validacions.js";

window.onload=function(){

    const nif = '11111111H';
    let resultat=Validacions.validarNIF(nif);
    console.log("NIF: "+nif);
    console.log("resultat: "+resultat);
}
