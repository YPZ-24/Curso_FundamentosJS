function Usuario(name, email){
    this.name = name;
    this.email = email;
}

//CRUD

//Create
function addNewUser(name, email){
    const newUser = new Usuario(name, email);
    let usuarios = JSON.parse(localStorage.getItem('users'));
    if(usuarios){
        usuarios.push(newUser);
    }else{
        usuarios = new Array();
        usuarios.push(newUser);
    }
    localStorage.setItem('users', JSON.stringify(usuarios));
}

//Read
function getUsers(){
    let usuarios = JSON.parse(localStorage.getItem('users'));
    return usuarios? usuarios : [];
}

//Update
function updateName(email, name){
    const usuarios = getUsers();
    let cambiado;
    //buscando
    usuarios.forEach((usr, i)=>{
        if(usr.email === email){
            //encontrando y guardando su index
            cambiado = usuarios[i].name = name;
            localStorage.setItem('users', JSON.stringify(usuarios));
        }
    })
    //cambiando nombre
    return cambiado? "Cambiado" : "No encontrado";
}

//Delete
function deleteUser(email){
    const usuarios = getUsers();
    let eliminado;
    //buscando
    usuarios.forEach((usr, i)=>{
        if(usr.email === email){
            //encontrando y guardando su index
            eliminado = usuarios.splice(i, 1);
            localStorage.setItem('users', JSON.stringify(usuarios));
        }
    })
    //cambiando nombre
    return eliminado? "Eliminado" : "No encontrado";
}


