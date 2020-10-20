//PROTOTIPOS
//    Mecanismo por el cual un objeto puede heredar del padre, metodos o atributos

//PROTOTYPE Object
//  El padre de cualquier objeto es Object
//  Si imprimo el objeto y abro sus propiedades veré que el prototipo de Object
const Fruta = {
    nombre: "Fresa",
    color: "Roja",
    precio: 20,
    vender: function(){
        console.log("Estoy vendiendo una fruta");
    }
}


//CREAR MIS PROPIOS PROTOTIPOS
function Alumno(matricula, carrera){
    this.matricula = matricula,
    this.carrera = carrera,
    this.hacerTarea = function(){
        console.log("Estoy haciendo tarea...");
    }
}
Alumno.prototype.inscribirMateria = function(){
    console.log("Inscribiendo materia");
}
//Estos 3 objetos tendrán CADA uno la función hacer tarea, por que no esta en el prototipo de la función constructorá
//Estos 3 objetos compartiran UN SOLO metodo inscribirMateria, por que si esta dento de la función constructora
const a1 = new Alumno(2020304057, "Ing. en Informatica");
const a2 = new Alumno(2020304057, "Ing. en Informatica");
const a3 = new Alumno(2020304057, "Ing. en Informatica");


