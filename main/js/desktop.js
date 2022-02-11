console.log("linked")
$('.left-menu').show()
function openmenu(){
    $('.left-menu').show()
    $('.windowslogo').removeAttr("onclick" , "openmenu()")
    $('.windowslogo').attr("onclick" , "closemenu()")
    console.log("funciono")
}
function closemenu(){
    $('.left-menu').hide()
    $('.windowslogo').removeAttr("onclick" , "closemenu()")
    $('.windowslogo').attr("onclick" , "openmenu()")
    
}