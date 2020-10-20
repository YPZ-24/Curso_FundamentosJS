//DESTRUCTURING
/*const figura = {
    nombre: "Triangulo",
    lados: 3,
    descripcion: null
}

const {nombre, lados} = figura;
*/

const triangulo = {
    base: 12,
    altura: 34,
    imagen: "Imagen",
    descripcion: "KDFNKDSNFKLNDKLFND"
}

function Area({ base, altura }){
    return (base * altura)/2;
}

const res = Area(triangulo);





//Si nuestra variable y la propiedad tienen diferente nombre
//const {lados:numeroDeLados} = figura;
//Si nuestra variable y la propiedad tienen nombre igual
//const {nombre} = figura;
