const nombre = prompt('Ingrese su nombre', '');
const edad = parseInt(prompt('Ingrese su edad',''));

if(Number.isNaN(edad)){
    document.write('Debes ingresar un número')
} else if(edad >= 18){
    document.write(`Hola ${nombre} , tienes la edad suficiente para conducir!`)
} else{
    document.write(`Hola ${nombre} ,No tienes la edad suficiente para conducir!`)
}
