//DEFINIR UN OBJETO
// nombre : valor
// cada par se separá por comas ","
const persona = {
    nombre: {
        nombre: "Aldair",
        apellido: "Granados"
    },
    edad: 19,
    mujer: false,
    hobbies: ['skate', 'musica'],
    darDatos: function() {
        console.log(`Soy ${this.nombre}`)
    }
}

const celular = {
    camara: true,
    marca: "XO",
    sonar: function() {
        console.log("SONAR");
    }    
}


//ACCEDER A PROPIEDADES
//--Notación Punto:     objeto.propiedad
const nom = persona.nombre;
//--Notación Corchetes:     objeto[propiedad]
const nom2 = persona["nombre"];
//      Usos de la notación corchetes
let propiedadBuscada = "edad";
persona[propiedadBuscada];

//ACTUALIZANDO PROPIEDAD
//  objeto.propiedad = nuevoValor
persona.nombre = "Luis";

//CREAR ó AGREGAR UNA NUEVA PROPIEDAD
//  objeto.nuevaPropiedad = valor
//  nota: a un objeto definido como constante, también se le pueden agregar nuevas propiedades
persona.estatura = 1.80;

//ELIMINAR PROPIEDAD
// delete objeto.propiedad
delete persona.estatura;

//USO DE THIS

const sabor = "Fresa";

const agua = {
    sabor: "Limon",
    cantidad: 1,
    servir: function(){
        console.log(`Estas sirviendo agua de ${this.sabor}`);
    } 
}



//const ataque = 12;
//Sin quitamos this, personaje.getAtaque imprimirá 12
//Si dejamos this, personaje.getAtaque() imprimirá 16
/*
const personaje = {
    nombre: "Personaje 1",
    ataque: 16,
    getPersonaje: function() {
        console.log(this.ataque);
    }
}*/

//FUNCIÓN CONSTRUTORA
function Alumno(nombre, matricula, carrera){
    this.nombre = nombre;
    this.matricula = matricula;
    this.carrera = carrera;
}

function Figura(lados, perimetro, area){
    this.lados = lados;
    this.perimetro = perimetro;
    this.area = area
}

const fig1 = new Figura(1,2,3)
const fig2 = new Figura(1,2,3)
const fig3 = new Figura(1,2,3)
const fig4 = new Figura(1,2,3)
const fig5 = new Figura(1,2,3)
const fig6 = new Figura(1,2,3)

















//---Crear instancias
const primerAlumno = new Alumno("Yahir", 2020601012, "Ing. en Informatica");
const segundoAlumno = new Alumno("Kim", 2018601120, "Ing. en Administración");








