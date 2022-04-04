let cambiado = false
let index_value = 100

document.getElementById("archivo").style.cssText = "visibility: hidden"
document.getElementById("editar").style.cssText = "visibility: hidden"
document.getElementById("formato").style.cssText = "visibility: hidden"
document.getElementById("vista").style.cssText = "visibility: hidden"
document.getElementById("ayuda").style.cssText = "visibility: hidden"

function dblclick(id) {
    const element = document.getElementById(id)
    element.style.cssText = "visibility: visible"
    element.style.cssText = "z-index: 10"
    element.style.cssText = "z-index: " + index_value
    console.log(element + "funciono")
    index_value++
}
