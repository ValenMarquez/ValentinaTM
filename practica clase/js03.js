/*const numeros = [16,28,1426,48,156,208]; //mayor ni en principio ni en final!

var mayor = 0; // 1426

for(var i=0; i<numeros.length; i++) {
    if(numeros[i] > mayor){
        mayor = numeros[i]
    }
}

console.log(`El mayor de ${numeros} es ${mayor}`)*/


const numeros = [];
for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Ingrese un numero', ''))
    numeros[i] = num;
}
console.log(numeros)

let mayor = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

document.write(`El mayor es ${mayor}`)

