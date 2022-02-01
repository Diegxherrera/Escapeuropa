const Main = $('#Main');
const Advanced = $('#Advanced');

function cambiarAdvanced() {

    console.log('cambiadoaadvanced');

    Main.addClass('main_page_hide');
    Advanced.addClass('advanced_page_show');

    Main.removeClass('main_page_show');
    Advanced.removeClass('advanced_page_hide');
};

function cambiarMain() {

    console.log('cambiadoamain');

    Main.addClass('main_page_show');
    Advanced.addClass('advanced_page_hide');

    Main.removeClass('main_page_hide');
    Advanced.removeClass('advanced_page_show');
};