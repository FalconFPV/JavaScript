// EXERCICI 21. Dins la carpeta js crea un fitxer anomenat funcions.js. Dins d’aquest fitxer crea una funció 
// amb dos paràmetres i que faci i torni la suma d’aquests dos paràmetres. Abans de fer la suma
//  ha de comprovar si els valors dels paràmetres són de tipus number. Si no ho són ha de 
//  llençar una excepció amb el missatge adequat.
function sumavalors(a,b){
    if(typeof a !=='number' || typeof b !=='number'){
        throw new Error("Els parametres introduits no son nombres");
    }
    else{
        return a+b; 
    }
}