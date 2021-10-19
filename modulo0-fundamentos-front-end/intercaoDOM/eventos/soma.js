let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let r = document.getElementById('r');


const calcula = () => {
    
    let resultado = n1.valueAsNumber + n2.valueAsNumber;
    
    if(isNaN(resultado)){
        r.textContent = '';
    } else {
        r.textContent = resultado;  
    }
}
document.addEventListener('input', calcula);


//calcula();
console.log(n1);