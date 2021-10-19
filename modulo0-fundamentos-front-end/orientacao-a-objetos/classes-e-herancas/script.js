class Retangulo {

    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    area(){
        return this.altura * this.largura;
    }

    imprimeNome(){
        console.log('Retangulo');
    }
}

class Quadrado extends Retangulo{
    constructor(dimensao){
        super(dimensao,dimensao);
    }
    imprimeNome(){
        console.log("Quadrado");
    }
}
let r1 = new Retangulo(3,4);
let r2 = new Retangulo(3,8);

let r3 = new Quadrado(3);