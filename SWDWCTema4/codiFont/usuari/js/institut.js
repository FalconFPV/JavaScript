// Classe per representar un mòdul
class Modul {
    constructor(nom, codi, curs) {
      this.nom = nom;
      this.codi = codi;
      this.curs = curs;
    }
  }
  
  // Classe per representar un alumne
  class Alumne {
    constructor(nom, llinatges, curs) {
      this.nom = nom;
      this.llinatges = llinatges;
      this.curs = curs;
      this.moduls = new Set(); // Utilitzem un conjunt per emmagatzemar els mòduls sense repeticions
    }
  
    // Mètode per afegir un mòdul a la llista d'alumne
    afegirModul(modul) {
      this.moduls.add(modul);
    }
  
    // Mètode per esborrar un mòdul de la llista d'alumne
    esborrarModul(modul) {
      this.moduls.delete(modul);
    }
  
    // Getter per obtenir el nom complet en format de llista de classe
    get nomComplet() {
      return "Llinatges: " + this.llinatges + "\nNom: " + this.nom;
    }
  }
  
  // Exportar les classes
  export { Modul, Alumne };
  