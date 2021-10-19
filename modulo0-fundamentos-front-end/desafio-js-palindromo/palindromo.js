const palindromo = (s) => {

    let qtdCaracters = s.length;

    if(qtdCaracters === 1 || s === ''){
        console.log(s + "é palíndromo");
    } else {
        for(let cont = 0, aux = qtdCaracters -1; cont < aux; cont++, aux--){
            if(s.charAt(cont) != s.charAt(aux)){
                console.log(s + ' não é palíndromo');
                return;
            }
            console.log(s + ' é palíndromo')
        }
    }
}

palindromo('aba');
palindromo('radar');
palindromo('bola');
palindromo('');
palindromo('x');