//Colores---
const ROJO = "linear-gradient(40deg, rgba(255,31,31,1) 0%, rgba(152,20,20,1) 100%)";
const MORADO = "linear-gradient(40deg, rgba(219,31,255,1) 0%, rgba(131,20,152,1) 100%)";
const AZUL = "linear-gradient(40deg, rgba(31,197,255,1) 0%, rgba(20,133,152,1) 100%)";
//-----------

const inTxt = document.querySelector('#txt');
const body = document.querySelector('body');

inTxt.addEventListener('keypress', (e) => {
    console.log(`Letra: ${e.key}`);
    switch(e.key){
        case 'R': 
            body.style.background = ROJO;
            break;
        case 'A': 
            body.style.background = AZUL;
            break;
        case 'M': 
            body.style.background = MORADO;
            break;
        default: 
            body.style.background = '#ffffff';
    }
})