const inFocus = document.querySelector('#focus');
const inBlur = document.querySelector('#blur');
const inOndblclick = document.querySelector('#ondblclick');
const inOnmouseover = document.querySelector('#onmouseover');
const inOnmouseout = document.querySelector('#onmouseout');
const inOnkeypress = document.querySelector('#onkeypress');

inFocus.addEventListener('focus', () => {
    console.log("Obtuve el foco");
})
/*
inFocus.onfocus = () => {
    console.log("Obtuve el foco");
}*/

inBlur.addEventListener('blur', () => {
    console.log("Perdi el foco");
})
/*
inBlur.onblur = () => {
    console.log("Perdi el foco");
}*/
inOndblclick.addEventListener('dblclick', () => {
    console.log("Diste doble click");
})
/*
inOndblclick.ondblclick = () => {
    console.log("Diste doble click");
}*/
inOnmouseover.addEventListener('mouseover', () => {
    console.log("Mouse entro a mi");
})
/*
inOnmouseover.onmouseover = () => {
    console.log("Mouse entro a mi");
}*/
inOnmouseout.addEventListener('mouseout', ()=>{
    console.log("Mouse salio de mi");
})
/*
inOnmouseout.onmouseout = () => {
    console.log("Mouse salio de mi");
}*/
inOnkeypress.addEventListener('keypress', ()=>{
    console.log("Presionaste una letra");
})
/*
inOnkeypress.onkeypress = () => {
    console.log("Presionaste una letra");
}*/







