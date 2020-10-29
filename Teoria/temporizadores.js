//La función se ejecutará despues de 1000 milisegundos
//--Se ejecuta solo 1 vez
setTimeout(() => {
    console.log("Paso 1 segundo");
}, 1000);


//La función se ejecutará cada 1000 milisegundos
//--Se ejecuta varias veces
setInterval(() => {
    console.log("Pasaron 2 segundos")
}, 1000);