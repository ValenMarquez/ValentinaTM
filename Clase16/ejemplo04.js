const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (e){
    e.preventDefault();

    if (e.currentTarget.nombre.value == '') {
        alert('El campo nombre es requerido');
        return;
    }

    if (e.currentTarget.mensaje.value == '') {
        alert('El campo mensaje es requerido');
        return;
    }

    alert(`Gracias ${e.currentTarget.nombre} por enviarnos el siguiente ${e.currentTarget.mensaje.value}.`)
})