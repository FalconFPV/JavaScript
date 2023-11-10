'use strict';
import{validarObligatori, validarData, validarTelefon, validarTelefonMobil, validarNIF, validarSencer, validarDecimal} from '../js/validacions.js';
window.onload = function () {
    const searchParams = new URLSearchParams(location.search);
    const mostrador=document.getElementById('mostrador');
    for(const [nom, valor] of searchParams){
        mostrador.innerHTML+=`<p><strong>${nom}</strong>: ${valor}</p>`
    }
    
    document.getElementById("boto").onclick = function () {
        history.back();
    }
    /*
    EXERCICI 5. Programau una funció que realitzi aquestes validacions i assignau-la a l'esdeveniment click del botó.
    */
    document.getElementById('normal').onclick = function () {
        //TORNAM A POSAR ELS COLORS DEL FORMULARI PER DEFECTE
        document.getElementById('tel1').style.backgroundColor = "";
        document.getElementById('tel2').style.backgroundColor = "";
        document.getElementById('data').style.backgroundColor = "";
        document.getElementById('nom').style.backgroundColor = "";
        document.getElementById('llinatges').style.backgroundColor = "";
        document.getElementById('mail').style.backgroundColor = "";

        var avis="";
        //VALIDAM ELS TELÉFONS
        if (!validarTelefonMobil(document.getElementById('tel1').value)) {
            document.getElementById('tel1').style.backgroundColor = "red";
            avis+="Telèfon 1 incorrecte. -";
        }

        if (!validarTelefonMobil(document.getElementById('tel2').value)) {
            document.getElementById('tel2').style.backgroundColor = "red";
            avis+="Telèfon 2 incorrecte. -";
        }

        //VALIDAM DATA 
        if (!validarData(document.getElementById('data').value)) {
            document.getElementById('data').style.backgroundColor = "red";
            avis+="Data incorrecta. -";
        }

        //VALIDAM QUE S'HAGIN INTRODUIT NOM, LLINATGES I MAIL
        if (document.getElementById('nom').value.trim() === "") {
            document.getElementById('nom').style.backgroundColor = "red";
        }

        if (document.getElementById('llinatges').value.trim() === "") {
            document.getElementById('llinatges').style.backgroundColor = "red";
        }

        if (document.getElementById('mail').value.trim() === "") {
            document.getElementById('mail').style.backgroundColor = "red";
        }

        //COMPROVAM SI HI HA ERRORS
        if (
            document.getElementById('tel1').style.backgroundColor === "red" ||
            document.getElementById('tel2').style.backgroundColor === "red" ||
            document.getElementById('data').style.backgroundColor === "red" ||
            document.getElementById('nom').style.backgroundColor === "red" ||
            document.getElementById('llinatges').style.backgroundColor === "red" ||
            document.getElementById('mail').style.backgroundColor === "red"
        ) {
            //MOSTRAM ERRORS DE LES VALIDACIONS
            alert(avis);
        } else {
            //MOSTRAM EL MISSATGE DE QUE NO HI HA ERRORS
            var paragraf = document.createElement("p");
            paragraf.textContent = "TOTA LA INFORMACIÓ ÉS CORRECTE!";
            document.getElementById('mostrar').appendChild(paragraf);
        }
    }
}