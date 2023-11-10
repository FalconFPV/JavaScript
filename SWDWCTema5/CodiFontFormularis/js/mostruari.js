window.onload = function () {
    const searchParams = new URLSearchParams(location.search);
    const mostrador=document.getElementById('mostrador');
    for(const [nom, valor] of searchParams){
        mostrador.innerHTML+=`<p><strong>${nom}</strong>: ${valor}</p>`
    }

    document.getElementById("boto").onclick = function () {
        history.back();
    }
}