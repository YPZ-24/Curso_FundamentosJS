//ARROW FUNCTIONS

//DEFINICION
const arrowFunction = (para1, para2) => {
    console.log("Estoy dentro")
    console.log("Soy Abril")
}

//DE UNA LINEA
//---No necesita las llaves
const arrowFunction1l = (para1, para2) => console.log("Soy una arroyFunction de una linea")


//CON UN PARAMETRO
//---No necesita parentesis en los parametros
const arrowFunction1p = (para1) => console.log("Soy una arrow function de un parametro")


//CON RETURN IMPLICITO
//---En lugar de hacer esto...
function resta(num1, num2){
    return num1 - num2;
}
console.log(resta(5,3))

//---Hacemos esto
const restaArrow = (num1, num2) => num1 - num2;
console.log(restaArrow(5,3));

//CAPTURAN EL CONTEXTO DONDE SE ENCUENTRAN
const personaArrow = {
    nombre: "Fernanda",
    edad: 18,
    mujer: true,
    saludar: () => {
        //Nos imprime su contexto padre principal, es decir, windows
        console.log(this);
    }
}
const persona = {
    nombre: "Fernanda",
    edad: 18,
    mujer: true,
    saludar: function() {
        //Nos imprime donde se encuentra la función, es decir, el objeto persona
        console.log(this);
    }
}




