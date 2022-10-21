const datosUsuarios = [
    {
        nombre: 'Valentina', password: '123456'

    },
    {
        nombre: 'Nicolas', password: 'asdfgh'

    },
    {
        nombre: 'Pilar', password: 'zxcvbn'

    },
    {
        nombre: 'Paulina', password: 'qwerty'

    },
    {
        nombre: 'Francisco', password: '98745'

    }
] //Estructura de objeto o lista compleja (un JSON)

//para que aparescan las contraseñas hay que crear un NUEVO ARRAY
const soloPassword = datosUsuarios.map(function (p) {
    return p.password;
})

console.log(soloPassword);