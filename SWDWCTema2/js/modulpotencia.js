function potencia(num,exponent){
    var resultat=1;
    for(var i=0;i<exponent;i++){
        resultat=num*resultat;
    }
    return resultat;
}

export default potencia;