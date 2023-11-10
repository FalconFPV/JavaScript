window.onload = function () {
    const searchParams = new URLSearchParams(location.search);
    const mostrador = document.getElementById('mostrador');
    for (const [nom, valor] of searchParams) {
        mostrador.innerHTML += `<p><strong>${nom}</strong>: ${valor}</p>`;
    }

    document.getElementById("boto").onclick = function () {
        history.back();
    }
    document.getElementById('normal').onclick = function (){
        //ASSIGNAR VALOR A LLISTES DESPLEGABLES
        document.getElementById('tria').value = 'Opció 2';
        //MARCAR RADIOBUTTONS
        document.getElementById('radio1').checked = true;
        //MARCAR CHECKBOXES
        document.getElementById('box1').checked = true;
        //DESHABILITAR CAMPS DE TEXT
        document.getElementById('text').disabled = true;
        //CAMP DE TEXT NOMÉS LECTURA
        document.getElementById('textread').readOnly = true;
        //AFEGIR UN PARÀGRAF AMB EXPLICACIÓ DE QUÈ IMPLICA AL SERVIDOR QUE UN CAMP SIGUI NOMÉS DE LECTURA O ESTIGUI DESHABILITAT
        var paragraf = document.createElement("p");
        paragraf.textContent = "Un camp només de lectura no es pot modificar però sí que es pot enviar al servidor. Un camp deshabilitat no es pot modificar ni enviar al servidor.";
        document.getElementById('explicacio').appendChild(paragraf);
    }
}