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
    if (id == "archivo") {
        cambio('archivo', 'abrir-archivo')
    }
    if (id == "editar") {
        cambio('editar', 'abrir-editar')
    }
    if (id == "formato") {
        cambio('formato', 'abrir-formato')
    }
    if (id == "vista") {
        cambio('vista', 'abrir-vista')
    }
    if (id == "ayuda") {
        cambio('ayuda', 'abrir-ayuda')
    }
}

function cerrar(id) {
    const boton = document.getElementById(id)
    boton.style.cssText = "visibility: hidden";
    if (id == "archivo") {
        cambio('archivo', 'abrir-archivo')
    }
    if (id == "editar") {
        cambio('editar', 'abrir-editar')
    }
    if (id == "formato") {
        cambio('formato', 'abrir-formato')
    }
    if (id == "vista") {
        cambio('vista', 'abrir-vista')
    }
    if (id == "ayuda") {
        cambio('ayuda', 'abrir-ayuda')
    }
}

function cambio(id, target) {
    const boton = document.getElementById(target)
    if (cambiado == true) {
        boton.setAttribute("onclick", "dblclick(" + '"' + id + '"' + ")")
        cambiado = false
    } else {
        boton.setAttribute("onclick", "cerrar(" + '"' + id + '"' + ")")
        cambiado = true
    }
}