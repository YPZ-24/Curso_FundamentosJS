class Alumno extends Persona{

    constructor(nombre, edad, mujer, direccion,  matricula, carrera){
        super(nombre, edad, mujer, direccion);

        this.matricula = matricula;
        this.carrera = carrera;

    }

}

const alumno1 = new Alumno("Aldair", 19, false, "Buenaventura #45", 2020601034, "Ing. Transporte");