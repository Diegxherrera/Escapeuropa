const carrito = $('#listacompra')

function hidec(){
    carrito.addClass('hide')
    carrito.removeClass('show')
    setTimeout('carrito.removeClass("hide")',2000)
}
function showc(){
    carrito.addClass('show')
    carrito.removeClass('hide')
}