const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

texto.addEventListener('keyup' , function(){
    contar.innerText = texto.ariaValueMax.length; // contar los caracteres

})