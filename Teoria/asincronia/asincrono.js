
//Sincrona
console.log("1");

//Asincrona: Toma tiempo
setTimeout(()=>{
    console.log("2")
}, 0000)

//Sincrona
console.log("3")


//El programa primero ejecutará las tareas sincronas, dejando pendiente las asincronas
//La salida sería
//  1
//  3
//  2
