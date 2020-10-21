class Maestro extends Persona{
    constructor(nombre, edad, mujer, direccion, materias){
        super(nombre, edad, mujer, direccion);
        this.materias = materias;
    }
}


const maestro1 = new Maestro ("Diego", 30, false, "Buenaventura #12", ["Matematicas", "Fisica"]);
//maestro1.saludar()