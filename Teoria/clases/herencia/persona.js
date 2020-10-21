class Persona{
    
    constructor(nombre, edad, mujer, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.mujer = mujer;
        this.direccion = direccion;
    }

    saludar(){
        console.log(`Soy ${this.nombre}`);
    }

}

let usr = new Persona("Diego", 16, false, "Puente Ramirez #14");