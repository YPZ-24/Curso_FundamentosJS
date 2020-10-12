//IF

let edad = 18;

if(edad>=18){
    console.log(`Es mayor de edad`)
}else{
    console.log(`No es mayor de edad`)
}

//OPERADOR TERNIARIO

const msj = ( edad >= 18 ) ? 'Es mayor de edad' : 'No es mayor de edad';
console.log(msj);


//SWITCH
/*
    CALCULADORA
        1.      Suma
        2.      Resta
        3.      Multiplicacion
        4.      Division
        otro.   Salir
*/
const opc = 3;
switch(opc){
    case 1 : msj = 'Suma'; break;
    case 2 : msj = 'Resta'; break;
    case 3 : msj = "Multiplicacion"; break;
    case 4 : msj = "Division"; break;
    default : msj = "Salir";
}
console.log(`opc = ${msj}`);