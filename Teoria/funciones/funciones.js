function saludar(nombre, profesion){
    console.log(`Hola mi nombre es ${nombre} y soy ${profesion}`)
}

function functionX(data1, data2, data3){
    console.log(data1);
    console.log(data2);
    console.log(data3);
    return "Se imprimieron todos los datos";
}

const valorRegresado = functionX("A", "B", "C");
console.log(valorRegresado);