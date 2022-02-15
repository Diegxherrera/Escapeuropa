const Main = $('#Main');
const Advanced = $('#Advanced');
const Boot = $('Boot')
const Bselector = document.getElementById('menu_hardrive');
const text1 = document.getElementById('text_menu_hardrive');
const text2 = document.getElementById('text_menu_hardrive2');
const text3 = document.getElementById('text_menu_hardrive3');
const enabled = document.getElementById('enabled');
const disabled = document.getElementById('disabled');
const menuenabled = document.getElementById('menu_enabled');
const none1 = document.getElementById('none1');
const none2 = document.getElementById('none2');
const none3 = document.getElementById('none3');
const none4 = document.getElementById('none4');
const rmv = document.getElementById('rmvdevices');
const hdrive = document.getElementById('hdrive');
const cdrive = document.getElementById('cd_drive');
const nboot = document.getElementById('nw_boot');



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
 
    // Menu superior 
    if(tecla.key == 'ArrowLeft'){
        if(topvalue==0){
            console.log('no se puede disminuir mas');
        }else{
            topvalue--;
            console.log('disminuido correctamente');
        }
    }
    if(tecla.key == 'ArrowRight'){
        if(topvalue==2){
            console.log('no se puede aumentar mas');
        }else{
            topvalue++;
            console.log('ampliado correctamente');
        }
    }
    if(topvalue==0){
        Main.addClass('main_page_show');
        Advanced.addClass('advanced_page_hide');
        Boot.addClass('boot_page_hide');
        Main.removeClass('main_page_hide');
        Advanced.removeClass('advanced_page_show');
        Boot.removeClass('boot_page_show');

    }
    if(topvalue==1){
        Main.addClass('main_page_hide');
        Advanced.addClass('advanced_page_show');
        Boot.addClass('boot_page_hide');
    
        Main.removeClass('main_page_show');
        Advanced.removeClass('advanced_page_hide');
        Boot.addClass('boot_page_show');
    }
    if(topvalue==2){
        Main.addClass('main_page_hide');
        Advanced.addClass('advanced_page_hide');
        Boot.addClass('boot_page_show');

        Main.removeClass('main_page_show');
        Advanced.removeClass('advanced_page_show');
        Boot.addClass('boot_page_hide');
    }
    // Depende del menu seleccion
    if(topvalue==0){
        if(tecla.key == 'ArrowUp'){
            if(mainpagevalue==0){
                console.log('minimo alcanzado');
            }else{
                console.log('disminuido');
                mainpagevalue--;
            }
        }
        if(tecla.key == 'ArrowDown'){
            if(mainpagevalue == 5){
                console.log('maximoalcanzado');
            }else{
                mainpagevalue++;
            }
        }
        if(mainpagevalue==0){
            enabled.style.backgroundColor='#1100FF';
            enabled.style.color='white';
            disabled.style.backgroundColor='white'
            disabled.style.color='#1100FF';
            
        }
        if(mainpagevalue==1){
            disabled.style.backgroundColor='#1100FF'
            disabled.style.color='white';
            enabled.style.backgroundColor='white';
            enabled.style.color='#1100FF';
            none1.style.backgroundColor='white';
            none1.style.color='#1100FF';

        }
        if(mainpagevalue==2){
            disabled.style.backgroundColor='white'
            disabled.style.color='#1100FF';
            none1.style.backgroundColor='#1100FF';
            none1.style.color='white';
            none2.style.backgroundColor='white';   
            none2.style.color='#1100FF';

        }
        if(mainpagevalue==3){
            none1.style.backgroundColor='white';
            none1.style.color='#1100FF';
            none2.style.backgroundColor='#1100FF';   
            none2.style.color='white';
            none3.style.backgroundColor='white';
            none3.style.color='#1100FF';

        }
        if(mainpagevalue==4){
            none2.style.backgroundColor='white';   
            none2.style.color='#1100FF';
            none3.style.backgroundColor='#1100FF';
            none3.style.color='white';
            none4.style.backgroundColor='white';   
            none4.style.color='#1100FF';

        }
        if(mainpagevalue==5){
            none3.style.backgroundColor='white';   
            none3.style.color='#1100FF';
            none4.style.backgroundColor='#1100FF';
            none4.style.color='white';
        }
    }
    if(topvalue==2){
        if(tecla.key=='ArrowUp'){
            if(bootpagevalue==0){
                console.log('minimo alcanzado boot');
            }else{
                console.log('disminuido boot');
                bootpagevalue--;
            }
        }
        if(tecla.key=='ArrowDown'){
            if(bootpagevalue==3){
                console.log('max alcanzado boot');
            }else{
                console.log('ampliado boot');
                bootpagevalue++;
            }
        }
        if(bootpagevalue==1){
            if(tecla.key=='ArrowDown'){
                if(bootpagevalue==2){
                    console.log('max alcanzado boot page');
                }else{
                    hardriveselec++;
                    console.log('aumentado boot page');
                }
            }
            if(tecla.key=='ArrowUp'){
                if(bootpagevalue==0){
                    console.log('min alcanzado boot page');
                }else{
                    hardriveselec--;
                    console.log('disminuido boot page')
                }
            }
        }
        if(bootpagevalue==0){
            rmv.style.backgroundColor='#1100FF';
            rmv.style.color='white';
            hdrive.style.backgroundColor='white';
            hdrive.style.color='#1100FF';
        }
        if(bootpagevalue==1){
            rmv.style.backgroundColor='white';
            rmv.style.color='#1100FF';
            hdrive.style.backgroundColor='#1100FF';
            hdrive.style.color='white'
            cdrive.style.backgroundColor='white';
            cdrive.style.color='#1100FF';
            if(tecla.key==' '){
                Bselector.style.visibility='visible';
                inner = 1;
            }
        }
        if(bootpagevalue==2){
            hdrive.style.backgroundColor='white';
            hdrive.style.color='#1100FF';
            cdrive.style.backgroundColor='#1100FF';
            cdrive.style.color='white';
            nboot.style.color='#1100FF';
            nboot.style.backgroundColor='white';
                }
        if(bootpagevalue==3){
            cdrive.style.backgroundColor='white'
            cdrive.style.color='#1100FF';
            nboot.style.color='white';
            nboot.style.backgroundColor='#1100FF';
        }
        
        
        if(inner==1){
            if(hardriveselec==0){
                text1.style.backgroundColor='white';
                text1.style.color='#1100ff';
                text2.style.backgroundColor='#1100ff';
                text2.style.color='white';
                text3.style.backgroundColor='#1100ff';
                text3.style.color='white';
            }
            if(hardriveselec==1){
                text1.style.backgroundColor='#1100ff';
                text1.style.color='white';
                text2.style.backgroundColor='white';
                text2.style.color='#1100ff';
                text3.style.backgroundColor='#1100ff';
                text3.style.color='white';
            }
            if(hardriveselec==2){
                text1.style.backgroundColor='#1100ff';
                text1.style.color='white';
                text2.style.backgroundColor='#1100ff';
                text2.style.color='white';
                text3.style.backgroundColor='white';
                text3.style.color='#1100ff';
            }
            if(tecla.key=='Escape'){
                Bselector.style.visibility='hidden'
                inner = 0;
            }
            if(tecla.key=='Enter'){
                Bselector.style.visibility='hidden'
                inner = 0;
            }

            
        }


    }





}
        var topvalue = 0; // Valor barra superior
        var mainpagevalue = 0; // Valor desplazamiento pagina main
        var bootpagevalue = 0; // Valor desplazamiento pagina boot
        var hardriveselec = 0; // Valor seleecion hardrive boot
        var inner = 0; // ID Si esta abierto

