// Let e const  

let a = 1;
const b = 1;

function teste(){
    for(var i = 0; i < 5; i++){
        //fazer algo
    }

    for(let j = 0; j < 5; j++){
        //fazer algo
        console.log("j: " + j);
    }

    console.log("i: " + i);
}

// Desestruturação

let primos = [2,3,5,7,11,13];

let curso = {
    nome: "Bootcamp Back end",
    modulos: 4,
    presencial: false,
    turma: 1
}

let [p1, p2,p3, ...resto] = primos;


let { nome: nomeCurso, turma, ...outrosCampos } = curso;

function imprime({ nome }){
    console.log(nome);
}

//spred operator

let primos2 = [...primos,17];
let primos3 = [1, ...primos, 17];

let curso2 = {
    ...curso,
    descricao: "Bla Bla Bla",
    ativo: true
}

let curso3 = {
    ...curso
};

// Template literals

let a = 2, b = 3;
let soma = a + b;

console.log(a + " + " + b +" = " + soma);
console.log(`${a} + ${b}  = ${soma}`);
