const link = document.getElementById('link');

link.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Quisiste ir a: ' + e.currentTarget.href)

})