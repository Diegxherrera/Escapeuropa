console.log("linked")
$('.leftmenu').hide()

function openmenu() {
    $('.leftmenu').show()
    $('.windowslogo').removeAttr("onclick", "openmenu()")
    $('.windowslogo').attr("onclick", "closemenu()")
    console.log("funciono")
}
function closemenu() {
    $('.leftmenu').hide()
    $('.windowslogo').removeAttr("onclick", "closemenu()")
    $('.windowslogo').attr("onclick", "openmenu()")
}