//Para traer el cuerpo de la tabla
//  # para referirse a id
//  . para referirse a class
const tableProductos = document.querySelector("#table__products");
const tableProductosBody = document.querySelector("#table__products__body");
//Metodo antiguo
//const tableProductosBody = document.getElementById('table__products__body');

const form__producto = document.querySelector("#form__producto");

form__producto.addEventListener("submit", submitForm);


function submitForm(e){
    //Traigo el valor de los input
    const producto = document.querySelector('#producto').value;
    const precio = document.querySelector('#precio').value;
    //Creo una nueva fila
    const tr = document.createElement('tr');
    //Creo las celdas
    const tdProducto = document.createElement('td');
    const tdPrecio = document.createElement('td');
    //Les pongo el texto
    tdProducto.textContent = producto;
    tdPrecio.textContent = precio;
    //Meto las celdas en la fila
    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    //Meto la fila en el cuerpo de la tabla
    tableProductosBody.appendChild(tr);
    e.preventDefault();
}