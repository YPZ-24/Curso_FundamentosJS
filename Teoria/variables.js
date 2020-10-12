//VARIABLES

//Antes
var nombre1 = "Abril";
{
    var nombre1 = "Zenely"
}
//Nos imprimirá Zenely
console.log(nombre1); 


//Ahora
let nombre2 = "Abril";
{
    let nombre2 = "Zenely"
}
//Nos imprimirá Abril
console.log(nombre2); 


/* 
    var tendrá un ambito global
    let tiene ambito de bloque
*/

// EJERCICIO_1: Lográr que la página imprima "Hola" sin cambiar el valor de las variables
/*
let msj = "Hola";
{
    let msj = "Adios";
}
console.log(msj);

let input = "valor entrada";
*/