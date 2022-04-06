console.log("linked")
$('.leftmenu').hide()
$('#np-head').hide();
$('#fe-head').hide();
$('#gg-head').hide();
$('#fedcr-head').hide();
$('#fetr-head').hide();
$('#np-head-a').hide();
$('#np-head-b').hide();
$('#np-head-c').hide();
$('#np-head-d').hide();
$('#np-head-e').hide();
$('#np-head-f').hide();
$('#np-head-g').hide();
$('#np-head-h').hide();
$('#km-head').hide();
$('#adm-head').hide();



/*if (getCookie("Login") != "correcto") { // Comprueba si la cookie existe  
    document.location = "uac.html"
    console.log("false")
} else {
    console.log(document.cookie)
    console.log("true")

}
*/
function openmenu() {
    $('.leftmenu').show()
    $('#left-menu1').slideUp("slow")
    $('.windowslogo').removeAttr("onclick", "openmenu()")
    $('.windowslogo').attr("onclick", "closemenu()")
    console.log("funciono")
}

function closemenu() {
    $('.leftmenu').hide()
    $('.windowslogo').removeAttr("onclick", "closemenu()")
    $('.windowslogo').attr("onclick", "openmenu()")
}

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}

function hideGoogle() {
    $('#igoogle').hide();
    $('#gg-head').hide();
}

function hideKombat() {
    $('#km').hide();
    $('#km-head').hide();
}

function hideFiles() {
    $('#ifilesexplorer').hide();
    $('#fe-head').hide();
}

function hideFilesdcr() {
    $('#ifilesexplorer-filesdcr').hide();
    $('#fedcr-head').hide();
}

function hideTrash() {
    $('#ifilesexplorertrash').hide();
    $('#fetr-head').hide();
}

function showNotepad() {
    $('#np-head').show();
}

function showFiles() {
    $('#ifilesexplorer').show();
    $('#fe-head').show();
}

function showGoogle() {
    $('#igoogle').show();
    $('#gg-head').show();
}

function showFilesdcr() {
    $('#iifilesexplorer-filesdcr').show();
    $('#fedcr-head').show();
}

function showTrash() {
    $('#iifilesexplorertrash').show();
    $('#fetr-head').show();
}

setInterval(function() {
    console.log(getCookie('Kombat'))
    if (weakGetCookie('descarga') == 'realizada') {
        document.getElementById('app-7 virus').style.cssText = 'visibility = visible'
        console.log('mostrado');
    }
    if(weakGetCookie('decrypt') == 'si'){
        desencriptar();
        console.log('desencriptar \n');
        document.cookie = "decrypt=si; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    }
    if(weakGetCookie('Kombat') == 'Derrota'){

        document.cookie = "Kombat=Derrota; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
        location.href = "./game_over.html"
    }


}, 1000);
