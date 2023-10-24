// EXERCICI 2. Crea un document aplicacio.js que defineixi una funció constructor per a un objecte que representi 
// una aplicació del google play, apple store o similars, amb un nom, un tipus, una descripció, un preu 
// i la quantitat de descàrregues:

// La funció constructor rebrà paràmetres per al nom, tipus, descripció i preu.

// Crea una funció que torni una cadena amb tota la informació de l'objecte, vaja el toString()

function aplicacio(nom, tipus, descripcio, preu){
    this.nom = nom;
    this.tipus = tipus;
    this.descripcio = descripcio;
    this.preu = preu;
}

function aplicacioToString(aplicacio){
    Text= aplicacio.toString();
    return Text;
}