const nombre = prompt ('Ingrese su nombre','');
const nota = parseInt (prompt ('Ingrese su nota',''));

//console.log(nombre);
//console.log(nota);

if(Number.isNan (nota)){
    document.write('La nota ingresada no es válida')
} else if( nota >= 4 ){
    document.write(`${nombre} estás aprobado con ${nota}`)
 }else {
    document.write(`${nombre} estás desaprobado con ${nota} Seguí estudiando!!!`)
 }
 