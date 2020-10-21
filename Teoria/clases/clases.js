//DEFINIR UNA CLASE
//NOMBRE, EDAD, MUJER, DIRECCION
class Persona{

    constructor(nombre, edad, mujer, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.mujer = mujer;
        this.direccion = direccion;
    }

    saludar(){
        console.log(`Hola, Soy ${this.nombre}`)
    }
}

//INICIALIZAR OBJETO
const persona1 = new Persona("Zenely", 20, true, "Benito Juarez #30")


//ACEDER A METODOS Y PROPIEDADES
//--Notación Punto
const nombreP = persona1.nombre;
const edadP = persona1.edad;
//persona1.saludar()
//--Notacion corchetes
const nombreC = persona1["nombre"];
const edadC = persona1["edad"];


