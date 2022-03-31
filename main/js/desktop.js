console.log("linked")
$('.leftmenu').hide()
$('#np-head').hide();


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

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}

function hideNotepad() {
    $('#inotepad').hide();
    $('#np-head').hide();
}