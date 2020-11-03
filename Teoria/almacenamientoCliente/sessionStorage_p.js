//Guardar dato
sessionStorage.setItem('name', 'Fernanda');
console.log("Dato guardado")

//Leer dato
const name = sessionStorage.getItem('name');
console.log("El dato es: "+name);

//Eliminar dato
sessionStorage.removeItem('name');
console.log("Dato eliminado")
