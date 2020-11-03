//GUARDANDO ARRAYS DE OBJETOS
const user = {
    name: "Fernanda",
    age: 19
}

const users = new Array();
users.push(user);

//Al guardar lo convertimos a string
localStorage.setItem('users', JSON.stringify(users));

//Al obtenerlo lo convertimos a objeto
let usr = JSON.parse(localStorage.getItem('users'));