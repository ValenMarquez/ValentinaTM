const items = document.getElementsByClassName('item');

function CambiarVisibilidad() {
    const item = items[2];
    if(item.style.visibility ==0){
        item.style.visibility = 'hidden'
    } else{
        item.style.visibility = ''
    }
}

setInterval(CambiarVisibilidad,500); // 500 medio segundo
//Hacelo cada tanto

