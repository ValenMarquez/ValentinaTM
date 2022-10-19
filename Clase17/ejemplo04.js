const numeros = [1,2,3,4,5,6,7,8,9];
const pares =numeros.filter(num => num % 2 === 0);

//La division es / y el resto %
//El operador resto (%) devuelve el resto de la división entre dos operandos.Siempre toma el signo del dividendo.

console.log(numeros); //1,2,3,4,5,6,7,8,9,10
console.log(pares); //2,4,6,8,10