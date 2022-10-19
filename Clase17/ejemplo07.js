const frutas = ['palta', 'narajas', 'manzanas', 'anana'];

console.log(frutas)
console.log(frutas.sort());

const numeros = [78, 10, 7, 1, 2];

console.log(numeros); // 78,10,7,1,2
console.log(numeros.sort()); //1,10,2,7,78
//UNICODE, 

const num = numeros.sort(function (a, b) {
    return a - b; //odenamos de la A-Z
})

console.log(num) //78,10,7,2,1

const num2 = numeros.sort(function (a, b) {
    return b - a;

})

console.log(num2); //78,10,7,2,1

const palabras = ['flavia', 'pablo', 'abeja', 'perro', 'animal'];

const palab = palabras.sort();

console.log(palab);

console.log(palabras.sort().reverse()); //posible solucion

const palabrs = palabras.sort(function (a, b) {
    if (b > a) return -1;
    return 0;
}) //otra solucion

console.log(palabrs);

