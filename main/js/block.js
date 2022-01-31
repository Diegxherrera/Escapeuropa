window.onload = ocultar;

function ocultar() {
    document.getElementById('blocked').style.display = 'none';
}
setTimeout(function() {
    document.getElementById('carga').style.display = 'none';
    document.getElementById('blocked').style.display = 'block';

}, 4000);

function blockedapp() {
    document.getElementById('blocked-alert').style.display = 'block';
}