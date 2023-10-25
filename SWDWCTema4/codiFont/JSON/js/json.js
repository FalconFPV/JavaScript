// EXERCICI 1. Crea un arxiu json.js que contendrà les diferents funcions de tots aquests exercicis.

// EXERCICI 2A. Crea a json.js una funció que dins d'ella crei un objecte Javascript i torni aquest objecte. 
// Heu de crear un alumne amb el nom, llinatges, cicle i el número de mòduls dels que està matriculat.
function crearAlumne() {
    const alumno = { nom: "Joan", llinatges: "Company Pastor", cicle: "Desenvolupament d'aplicacions web", numModuls: 6};
    return alumno;
  }
// EXERCICI  3. Crea a json.js una funció que torni una cadena que contengui un objecte com el de l’exercici anterior en format JSON.
// A la pàgina l mostra aquesta informació utilitzant la notació per punts.
function obtenirObjecteJSON() {
    const alumne = {
        nom: "John",
        llinatges: "Doe",
        cicle: "S2W",
        modulsMatriculats: 3
    };

    const alumneJSON = JSON.stringify(alumne);

    return alumneJSON;
}
// EXERCICI 6A. Crea a json.js una funció que rebi un paràmetre i torni una cadena amb el JSON de l'objecte o l'array contingut 
// dins del paràmetre. 

// Funció que rep un objecte o un array i retorna la cadena JSON
function obtenirJSON(obj) {
    return JSON.stringify(obj);
}
