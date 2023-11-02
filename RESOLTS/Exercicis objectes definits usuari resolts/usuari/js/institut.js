class Alumne {
    constructor(nom, llinates, curs) {
        this.nom = nom;
        this.llinatges = llinates;
        this.curs = curs;
        this.moduls = new Set();
    }

    afegirModul(nou) {
        this.moduls.add(nou);
    }

    eliminarModul(antic) {
        this.moduls.delete(antic);
    }

    get nomComplet() {
        return this.llinatges + ", " + this.nom;
    }
}

class Modul{
    constructor(nom, codi, curs){
        this.nom=nom;
        this.curs=curs;
        this.codi=codi;
    }
}

export {Alumne, Modul};
