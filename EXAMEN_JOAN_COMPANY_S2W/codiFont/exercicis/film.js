'use strict';

class pelicula{
    constructor (titol, descripcio, durada, any){
        this.titol = titol;
        this.descripcio = descripcio;
        this.durada = durada;
        this.any = any;
        this.actors = new Set();
    }

    afegirActor(actor){
        this.actors.add(actor);
    }

    esborrarActor(Actor){
        this.actors.delete(Actor);
    }
}

window.onload = function(){
    class Actor{
        constructor(nom){
            this.nom = nom;
        }
        get nomActor(){
            return "Nom del actor: "+this.nom;
        }
    }
    
    const peli = new pelicula("Star Wars", "Primera peli Star Wars", 120, 1977 );
    //actors
    const act1 = new Actor("Luke");
    const act2 = new Actor("Leia");
    const act3 = new Actor("Han");
    //Afegim dos actors
    peli.afegirActor(act1);
    peli.afegirActor(act2);
    peli.afegirActor(act3);
    //Esborram un actor
    peli.esborrarActor(act2);
    //Mostram el resultat
    document.getElementById("mTitol").innerHTML = peli.titol;
    document.getElementById("mDescripcio").innerHTML ="Descripcio: " +peli.descripcio;
    document.getElementById("mAny").innerHTML = "Any de publicacio: "+peli.any;
    document.getElementById("mDurada").innerHTML ="Durada: "+ peli.durada;
    
    for(const actor of peli.actors){
        document.getElementById('mActors').innerHTML+=actor.nom+", ";
    } 
}
  