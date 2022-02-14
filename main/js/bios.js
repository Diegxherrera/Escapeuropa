const Main = $('#Main');
const Advanced = $('#Advanced');
const Boot = $('Boot')
const Bselector = document.getElementById('menu_hardrive');
const text1 = document.getElementById('text_menu_hardrive');
const text2 = document.getElementById('text_menu_hardrive2');
const text3 = document.getElementById('text_menu_hardrive3');


var sel = 0;
var val = 0;

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
    Boot.removeClass('boot_page_show');
};

function menuhardrive() {
    console.log('menu boot mostrado');
    Bselector.style.visibility = 'visible'
};
function closehardrive() {
    console.log('menu boot ocultado');
    Bselector.style.visibility = 'hidden'
};
document.addEventListener("keyup", next)

function next(tecla){
    if(tecla.key == "ArrowUp"){ // Subir
        console.log(tecla);
        if(sel!=0){
            sel--
        }
        console.log(sel);
    

    }
    if(tecla.key == "ArrowDown"){ // Bajar
        console.log(tecla);
        if(sel<2){
            sel++
        }
        console.log(sel);
        }
        if(tecla.key == "ArrowLeft"){ // Subir
            console.log(tecla);
            if(val!=0){
                val--
            }
            console.log(val);
        
    
        }
        if(tecla.key == "ArrowRight"){ // Bajar
            console.log(tecla);
            if(val<2){
                val++
                Main.addClass('main_page_show');
                Advanced.addClass('advanced_page_hide');
                Boot.addClass('boot_page_hide');
            }
            console.log(val);
        }
        if(val==0){
            Main.addClass('main_page_show');
            Advanced.addClass('advanced_page_hide');
            Boot.addClass('boot_page_hide');
            Main.removeClass('main_page_hide');
            Advanced.removeClass('advanced_page_show');
            Boot.removeClass('boot_page_show');

        }
        if(val==1){
            Main.addClass('main_page_hide');
            Advanced.addClass('advanced_page_show');
            Boot.addClass('boot_page_hide');
        
            Main.removeClass('main_page_show');
            Advanced.removeClass('advanced_page_hide');
            Boot.addClass('boot_page_show');
        }
        if(val==2){
            Main.addClass('main_page_hide');
            Advanced.addClass('advanced_page_hide');
            Boot.addClass('boot_page_show');

            Main.removeClass('main_page_show');
            Advanced.removeClass('advanced_page_show');
            Boot.addClass('boot_page_hide');
        }
    if(sel==0){
        text1.style.backgroundColor='white';
        text1.style.color='#1100ff';
        text2.style.backgroundColor='#1100ff';
        text2.style.color='white';
        text3.style.backgroundColor='#1100ff';
        text3.style.color='white';
    }
    if(sel==1){
        text1.style.backgroundColor='#1100ff';
        text1.style.color='white';
        text2.style.backgroundColor='white';
        text2.style.color='#1100ff';
        text3.style.backgroundColor='#1100ff';
        text3.style.color='white';
    }
    if(sel==2){
        text1.style.backgroundColor='#1100ff';
        text1.style.color='white';
        text2.style.backgroundColor='#1100ff';
        text2.style.color='white';
        text3.style.backgroundColor='white';
        text3.style.color='#1100ff';
    }
    if(tecla.key == "Escape"){
        console.log(tecla)
        Bselector.style.visibility = 'hidden';
        console.log('hardrive menu cerrado');
    }
    if(tecla.key == "Enter"){
        console.log(tecla)
        Bselector.style.visibility = 'hidden';
        console.log('hardrive menu cerrado');
    }
}
