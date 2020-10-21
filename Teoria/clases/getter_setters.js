//LOS GETTER
/*  Nos sirve para decirle que haga con el atributo cuando se lo solicito */
//LOS SETTERS
/*  Nos sirve para decirle que haga con el atributo cuando se lo mando */
class Figura{
    constructor(nombre, lados){
        this.nombre = nombre;
        this.lados = lados;
    }

    //Cuando me lo traiga, quiero que lo regrese en mayuculas
    get nombre(){
        let nombre = this._nombre.toUpperCase();
        return nombre;
    } 
    
    //Cuando se lo mande, quiero que lo guarde en minusculas
    set nombre(nombre){
        if(nombre==='' || nombre===undefined){
            return "Error, Necesitas enviar un nombre"
        }
        this._nombre = nombre;
    }

}

const triangulo = new Figura("Triangulo", 2);