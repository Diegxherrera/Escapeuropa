console.log("linked")
$('.leftmenu').hide()
$('#np-head').hide();
if (!document.cookie.match(/^(.*;)?\s*Login\s*=\s*[^;]+(.*)?$/)) { // Comprueba si la cookie existe
 document.location = "uac.html"
} else {
    document.cookie = "Login" + '=Verificado;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // Elimina la cookie

}

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
    $('#ichrome').hide();
    $('#google-head').hide();
}

function hideFiles() {
    $('#ifilesexplorer').hide();
    $('#files-head').hide();
}

function showNotepad() {
    $('#np-head').show();
}

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}