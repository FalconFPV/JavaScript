
//Exercici 2
window.onload = function () {
    let arrayOrdenatInversa = ["e", "a", "i", "o", "u", "s", "d", "c"];

    arrayOrdenatInversa.sort();
    arrayOrdenatInversa.reverse();

    for(let z in arrayOrdenatInversa){
        document.getElementById("mOrdenats").innerHTML += " " + arrayOrdenatInversa[z] ;
    }
}
//Exercici 3


