const Main = $('#Main');
const Advanced = $('#Advanced');
const Boot = $('Boot')
const Bselector = document.getElementById('menu_hardrive');
const text1 = document.getElementById('text_menu_hardrive');

var sel = 0;

function cambiarAdvanced() {

    console.log('cambiadoaadvanced');

    Main.addClass('main_page_hide');
    Advanced.addClass('advanced_page_show');
    Boot.addClass('boot_page_hide');

    Main.removeClass('main_page_show');
    Advanced.removeClass('advanced_page_hide');
    Boot.addClass('boot_page_show');
    
};

function cambiarBoot() {

    console.log('cambiadoaboot');

    Main.addClass('main_page_hide');
    Advanced.addClass('advanced_page_hide');
    Boot.addClass('boot_page_show');

    Main.removeClass('main_page_show');
    Advanced.removeClass('advanced_page_show');
    Boot.addClass('boot_page_hide');
};

function cambiarMain() {

    console.log('cambiadoamain');

    Main.addClass('main_page_show');
    Advanced.addClass('advanced_page_hide');
    Boot.addClass('boot_page_hide');

    Main.removeClass('main_page_hide');
    Advanced.removeClass('advanced_page_show');
    Boot.addClass('boot_page_show');
};

function menuhardrive() {
    console.log('menu boot mostrado');
    Bselector.style.visibility = 'visible'
    if(selected = 1){
        text1.style.backgroundColor = 'white';
        text1.style.color = 'blue';
    }
};
function closehardrive() {
    console.log('menu boot ocultado');
    Bselector.style.visibility = 'hidden'
};

