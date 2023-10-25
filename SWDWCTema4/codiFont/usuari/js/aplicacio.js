// EXERCICI 2. Crea un document aplicacio.js que defineixi una funció constructor per a un objecte que representi 
// una aplicació del google play, apple store o similars, amb un nom, un tipus, una descripció, un preu 
// i la quantitat de descàrregues:

// Definició de la funció constructor
// Funció constructora per a l'objecte d'aplicació
function Aplicacio(nom, tipus, descripcio, preu, descarregues) {
    this.nom = nom;
    this.tipus = tipus;
    this.descripcio = descripcio;
    this.preu = preu;
    this.descarregues = descarregues;
}

// Funció toString per obtenir una cadena amb tota la informació de l'objecte
Aplicacio.prototype.toString = function() {
    return "Nom: " + this.nom + "\nTipus: " + this.tipus + "\nDescripció: " + this.descripcio + "\nPreu: " + this.preu + "\nDescàrregues: " + this.descarregues;
};
