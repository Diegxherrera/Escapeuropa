const Español = $('#Español');
const Euskera = $('#Euskera');
const Gallego = $('#Gallego');
const Catalan = $('#Catalan');

function cambiarcatalan() {
    console.log('cambiadoacatalan')
    Catalan.addClass('Catalan_show');
    Español.addClass('Español_hide');
    Gallego.addClass('Gallego_hide');
    Euskera.addClass('Euskera_hide');

    Español.removeClass('Español_show');
    Gallego.removeClass('Gallego_show');
    Euskera.removeClass('Euskera_show');
    Catalan.removeClass('Catalan_hide');

};

function cambiarespañol() {
    console.log('cambiadoaespañol')
    Catalan.addClass('Catalan_hide');
    Español.addClass('Español_show');
    Gallego.addClass('Gallego_hide');
    Euskera.addClass('Euskera_hide');

    Catalan.removeClass('Catalan_show');
    Gallego.removeClass('Gallego_show');
    Euskera.removeClass('Euskera_show');
    Español.removeClass('Español_hide');
};

function cambiareuskera() {
    console.log('cambiadoaeuskera')
    Catalan.addClass('Catalan_hide');
    Español.addClass('Español_hide');
    Gallego.addClass('Gallego_hide');
    Euskera.addClass('Euskera_show');

    Catalan.removeClass('Catalan_show');
    Gallego.removeClass('Gallego_show');
    Español.removeClass('Español_show');
    Euskera.removeClass('Euskera_hide');
};

function cambiargallego() {
    console.log('cambiadoagallego')
    Catalan.addClass('Catalan_hide');
    Español.addClass('Español_hide');
    Gallego.addClass('Gallego_show');
    Euskera.addClass('Euskera_hide');

    Catalan.removeClass('Catalan_show');
    Gallego.removeClass('Gallego_hide');
    Euskera.removeClass('Euskera_show');
    Español.removeClass('Español_show');
};

let sb = document.getElementById('search_bar')

function comprobar(){
    console.log(sb.value)
    if (sb.value == "Kombat.es" || sb.value == "kombat.es" || sb.value == "KOMBAT.ES" || sb.value == "KOMBAT.es"){
        document.location = "../KOMBAT.es/index.html"
    }
    else{
        console.log("valor introducido no es correcto")
    }
}

document.addEventListener("keyup", buscarkombat)

function buscarkombat(tecla){
if (tecla.key == "Enter"){
    comprobar()
}
}
