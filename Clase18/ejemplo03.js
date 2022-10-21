const empleados =[
    {
        nombre: 'Gaspar', trabajo: 'desarrollador'

    },
    {
        nombre: 'Emilia', trabajo: 'doctora'

    },
    {
        nombre: 'Pilar', trabajo: 'desarrollador'

    },
    {
        nombre: 'Julia', trabajo: 'maestra'

    },
    {
        nombre: 'Emma', trabajo: 'desarrollador'

    }
]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
)

const noDesarrollador = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
)

console.log(desarrollador)
console.log(noDesarrollador)

