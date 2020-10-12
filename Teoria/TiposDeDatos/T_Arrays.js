//ARRAYS, ARREGLOS, MATRICES
const colores = ['guinda', 'blanco', 'azul', 'dorado'];
const arrayRandom = ['uvas', 1, [10, 20, 30]];

//Dos dimensiones
const array1D = ["e1", "e2", "e3"]
const array2D = [["e1", "e2", "e3"], [10, 20, 30]]
const array3D = [ [ ["e1", "e2", "e3"], [ 10, 20, 30] ] , [ ["a1", "a2", "a3"], [100, 200, 300] ] ]

//Acceder a un nodo
const color4 = colores[3]

//Editar nodo
colores[1] = 'white';

//Obtener tamaño
const coloresTamaño = colores.length;

//agregar elementos al inicio de la matriz
colores.unshift('rosa');

//eliminar primer elemento de la matriz
colores.shift();

//unir dos arrays
const array1 = ["Dessire", "Nahomi"]
const array2 = ["Diego", "Gonzalo"]
const arraysUnion = array1.concat(array2);

//convertir arreglo en string
const coloresString = colores.join();
const coloresDiagonal = colores.join('/');

//encontrar en un array el primer elemento que coincida con la condicion
const numeros = [1,2,3,4,5,6,7,8,9,10];
const numMayores5 = numeros.find((n) => {
    return n > 5
});

//encontrar en un array todos los elementos que coincidan con una condicion
const numsMayores5 = numeros.filter( 
    ( n ) => {
        return n>5
    }
)

//Obtener un nuevo array resultante de aplicar acciones a cada elemento de otro array
const numerosx2 = numeros.map((n)=>{
    return n*2;
})