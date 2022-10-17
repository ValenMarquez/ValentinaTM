const parrafo = document.getElementById('parrafo');
const menos = document.getElementById('menos');
const mas = document.getElementById('mas');
const base = document.getElementById('base');


menos.addEventListener('click', function() {
    parrafo.style.fontSize = '10px';
})

mas.addEventListener('click', function() {
    parrafo.style.fontSize = '30px';
})

base.addEventListener('click', function() {
    parrafo.style.fontSize = '16px';
})