/* const metros = 3500000; 
let transportes = '';

if (metros > 0 && metros <=1000) {
    transportes = 'pie'
} else if(metros > 1000 && metros <=10000){
    transportes = 'bicicleta' 
} else if(metros > 10000 && metros <=30000){
    transportes = 'colectivo' 
} else if(metros > 30000 && metros <=100000){
    transportes = 'auto' 
} else if(metros > 100000){
    transportes = 'avion' 
}

console.log(`Hola! Para ${metros} metros te recomendamos ir en ${transportes}`); */

//opcion 02

const distancia = document.write(prompt('Ingrese en valor numerico los metros de su distancia a recorrer'))

function transporteIndicado(distancia) {
    if (distancia > 0 && metros <= 1000) {
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a pie.`)
    }
        else if (distancia > 1000 && metros <= 10000) {
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a bicicleta.`)
    }
        else if (distancia > 10000 && metros <= 30000) {
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a colectivo.`)
    }
        else if (distancia > 30000 && metros <= 100000) {
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a auto.`)
    }
        else {
        document.write(`Para recorrer ${distancia} metros, la mejor forma es ir a avión.`)
    }}



transporteIndicado();
