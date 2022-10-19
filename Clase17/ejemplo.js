function ocultarMensaje(){
    const mensaje = document.getElementById('mensaje');
    mensaje.style.display = 'none';

}

setTimeout(ocultarMensaje, 5000); // 5 segundos