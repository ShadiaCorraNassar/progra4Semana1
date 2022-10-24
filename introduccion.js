const NUMERODIA=5;
//NUMERODIA=10;
console.log(NUMERODIA)

let nombre='Pedro';
console.log(nombre)
nombre='Luis';
console.log(nombre)
if(true){
    let nombre='Juan';
    nombre='Maria';
}
console.log(nombre)

if(true){
    let edad=20;
    console.log(edad)
}
//edad=15;
//console.log(edad)

var saludo='Hola';
console.log(saludo)

function saludar(){
    this.nombre='Gustavo';
    console.log(this.nombre);
    let nombre='Linda';
    console.log(this.nombre,nombre)
}

saludar();