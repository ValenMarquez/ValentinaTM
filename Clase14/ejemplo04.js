const valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5', ''));

switch (valor) {
    case 1:
        document.write('Hola soy el número 1')
        break;

    case 2:
        document.write('Hola soy el número 2')
        break;

    case 3:
        document.write('Hola soy el número 3')
        break;

    case 4:
        document.write('Hola soy el número 4')
        break;

    case 5:
        document.write('Hola soy el número 5')
        break;

    default:
        document.write('Debe ingresar un numero entre 1 y 5')
        break;
}