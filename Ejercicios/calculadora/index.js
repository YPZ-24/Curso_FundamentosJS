let num1, num2;
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
    btn.onclick = () => {
        num1 = parseFloat(document.querySelector('#num1').value);
        num2 = parseFloat(document.querySelector('#num2').value);
        hacerOperacion(parseInt(btn.name))
    }
}





//COMIENZA A CODIFICAR DESDE AQUÍ
/*
    opc será igual a 
    1   Suma
    2   Resta
    3   Multiplicacion
    4   Division
*/

function hacerOperacion(opc){
    
}