'use strict';

function aplicacio(nom, tipus, descripcio, preu) {
    this.tipus = tipus;
    this.nom = nom;
    this.descripcio = descripcio;
    this.preu = preu;
    this.descarregues = 0;

    this.incrementaDescarregues = function () {
        this.descarregues++;
    };
}

aplicacio.prototype.toString = function () {
    let cadena = "";
    cadena = cadena + "<p>Nom: " + this.nom + "</p>";
    cadena = cadena + "<p>Tipus: " + this.tipus + "</p>";
    cadena = cadena + "<p>Preu: " + this.preu + "</p>";
    cadena = cadena + "<p>Descripció: " + this.descripcio + "</p>";
    cadena = cadena + "<p>Descarregues: " + this.descarregues + "</p>";
    return cadena;
}
//
// aplicacio.prototype.comentari = "Sense comentaris";
//
// aplicacio.prototype.canviaComentari = function (nouComentari) {
//     this.comentari = nouComentari;
// };
//
// aplicacio.prototype.setNom = function (nouNom) {
//     this.nom = nouNom;
// };


