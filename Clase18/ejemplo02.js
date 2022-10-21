const alumnos = [
    {
        nombre: 'Gaspar', edad: 10

    },
    {
        nombre: 'Emilia', edad: 3

    },
    {
        nombre: 'Pilar', edad: 5

    },
    {
        nombre: 'Julia', edad: 2

    },
    {
        nombre: 'Emma', edad: 3

    }
] //Estructura de objeto o lista compleja (un JSON)

//para que aparescan las edades clasificada hay que crear un NUEVO ARRAY

const chicos = alumnos.filter(
    alumno => alumno.edad <=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(`<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}<p>`)
}