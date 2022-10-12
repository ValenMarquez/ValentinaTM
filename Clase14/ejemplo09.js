function validarLargo(texto,largoRequerido){
    return texto.length >= largoRequerido
}

function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo(document.form1.text1.value, 5);

    const resultado= nombreValido &&
    passWordValido;

    if(resultado) {
        alert('Es valido')
    } else{
        alert ('NO ES valido')
    }
}