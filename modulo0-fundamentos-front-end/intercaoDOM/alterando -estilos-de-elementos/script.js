let caixa = document.getElementById("caixa");
let cx, cy;

const setPos = (x, y) => {
    caixa.style.top = `${y}px`;
    caixa.style.left = `${x}px`;
}

const arrasta = (evt) => {
    let x = evt.clientX;
    let y = evt.clientY;
    setPos(x -cx,y -cy);    
    
}

const pxParaNum = (s) => {
    return +(s.replace("px",""));
}

const iniciaArraste = (evt) => {
    cx = evt.clientX - pxParaNum(caixa.style.left);
    cy = evt.clientY - pxParaNum(caixa.style.top);  
    caixa.classList.add("arrastando");
    document.addEventListener("mousemove", arrasta)
}


const terminaArraste = (evt) => {
    caixa.classList.remove("arrastando");
    document.addEventListener("mousemove", arrasta);
    
}


caixa.addEventListener("mousedown",iniciaArraste);
document.addEventListener("mouseup", terminaArraste);