let numero = 5;

//WHILE. Primero Valida, luego hace
/*
while(numero<5 && numero>0){
    console.log(numero);
    numero--;
}


//DO-WHILE. Primero Hace, luego valida
do{
    console.log(numero);
    numero--;
}while(numero<5 && numero>0);
*/
/*

//FOR
for(let i=0; i<contactos.length; i++){
    console.log(`Contacto ${i} es ${contactos[i]}`);
}
*/

//FOR-EACH. Ya es obsoleta
/*for each(let c in contactos){
    console.log(c);
}*/

//FOR OF. Es la nueva de for-each
/*



for(const contacto of contactos){
    console.log(contacto);
}
*/
//ARRAY FOR EACH

let contactos = ["Contacto_1", "Contacto_2", "Contacto_3", "Contacto_4"]

contactos.forEach((c, i)=>{
    console.log(`El contacto ${i} es ${c}`);
})


