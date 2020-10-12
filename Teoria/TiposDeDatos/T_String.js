//STRING

//Definicion
const nombre = "Luis Arias Lopez";
const edad = "18";

//Concatenar
    let concat = "Soy "+nombre+" tengo "+edad+" años";
    //backTick `` tambien sirve para varias linear
    let concatBackTick = `Soy ${nombre} tengo ${edad} años`;
    let variasLineas = `Linea1
                        Linea2
                        Linea3`

//Obtener tamaño
const tamaño = nombre.length;

//charAt: Acceder a un elemento del string
const ele1_charAt = nombre.charAt(1);

//[Indice]: Acceder a un elemento del string
const ele1_indice = nombre[1]; 

//slice: Extraer subcadena
const apellido1 = nombre.slice(5,(9+1));
const apellidos = nombre.slice(5);

//startsWith: Saber si inicia con una subcadena
let iniciaConLuis = nombre.startsWith("Luis");
let iniciaConAlexa = nombre.startsWith("Alexa");

//endsWith: Saber si termina con una subcadena
let terminaConLopez = nombre.endsWith("Lopez");
let terminaConAlexa = nombre.endsWith("Alexa");

//toLowerCase: pasar a minusculas
let minusculas = nombre.toLowerCase();

//toUpperCase: pasar a mayusculas
let mayusculas = nombre.toUpperCase();

//trim: quita espacios vacios al inicio y al final
let cadenaEspacios = '    hola  '
let cadenaSinEspacios = cadenaEspacios.trim();

//includes: saber si un string include una subcadena
const incluyeArias = nombre.includes("Arias");
const incluyearias = nombre.includes("arias");

//repear: repite una cadena un determinado no. de veces
const nombrex2 = nombre.repeat(2);

//convertir string en arreglo
const frutas = 'uva,manzana,pera'
const frutasArray = frutas.split(",");

