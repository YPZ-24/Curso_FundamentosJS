//TIPOS DE DATOS

//Numericos
let num = 10;
let numDecimal = 10.5;
let edad = 18;

//Strings o Cadenas
let nombre = 'Fer'
let apellido = "Soy 'Fer'"
let x = "Soy Carlos"
let constu = "Soy "+nombre+" tengo "+edad+" años"
let constu2 = `Soy ${nombre} tengo ${edad} años `

//Arreglos o Matrices
const frutas = ["Uva", "Pera", "Manzana"]

//Objetos
const persona = {
    nombre: "Fernanda",
    edad: 18,
    mujer: true,
    saludo: () => {
        alert(`Hola ${nombre}`);
    }
}

//Booleanos
const verdadero = true;
const falso = false;

//JSON
const varJSON = `
    {
        "personas":[
            {
                "nombre": "Abril", 
                "edad": 12
            },
            {
                "nombre": "Aldair", 
                "edad": 19
            },
            {
                "nombre": "Diego", 
                "edad": 15
            }
        ]
    }
`

const varJ = JSON.parse(varJSON);