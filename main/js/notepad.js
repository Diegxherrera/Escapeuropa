//default
let index_value = 100
archivo.style.cssText = "visibility: hidden"
editar.style.cssText = "visibility: hidden"
formato.style.cssText = "visibility: hidden"
vista.style.cssText = "visibility: hidden"
ayuda.style.cssText = "visibility: hidden"

//elements html
const archivo = document.getElementById("archivo")
const editar = document.getElementById("editar")
const formato = document.getElementById("formato")
const vista = document.getElementById("vista")
const ayuda = document.getElementById("ayuda")

const archivo2 = document.getElementById("abrir-archivo")
const editar2 = document.getElementById("abrir-editar")
const formato2 = document.getElementById("abrir-formato")
const vista2 = document.getElementById("abrir-vista")
const ayuda2 = document.getElementById("abrir-ayuda") 

//funciones
function dblclick(id) {
    const element = document.getElementById(id)
    element.style.cssText = "visibility: visible"
    element.style.cssText = "z-index: 10"
    element.style.cssText = "z-index: " + index_value
    console.log(element + "funciono")
    index_value++

    if (id == "archivo") {

        editar.style.cssText = "visibility: hidden"
        vista.style.cssText = "visibility: hidden"
        ayuda.style.cssText = "visibility: hidden"
        formato.style.cssText = "visibility: hidden"

        archivo2.setAttribute("onclick","cerrar('archivo')")
        editar2.setAttribute("onclick","dblclick('editar')")
        vista2.setAttribute("onclick","dblclick('vista')")
        ayuda2.setAttribute("onclick","dblclick('ayuda')")
        formato2.setAttribute("onclick","dblclick('formato')")
    }
    if (id == "editar") {
        archivo.style.cssText = "visibility: hidden"
        vista.style.cssText = "visibility: hidden"
        ayuda.style.cssText = "visibility: hidden"
        formato.style.cssText = "visibility: hidden"

        editar2.setAttribute("onclick","cerrar('editar')")
        archivo2.setAttribute("onclick","dblclick('archivo')")
        vista2.setAttribute("onclick","dblclick('vista')")
        ayuda2.setAttribute("onclick","dblclick('ayuda')")
        formato2.setAttribute("onclick","dblclick('formato')")
    }
    if (id == "formato") {
        editar.style.cssText = "visibility: hidden"
        vista.style.cssText = "visibility: hidden"
        ayuda.style.cssText = "visibility: hidden"
        archivo.style.cssText = "visibility: hidden"

        formato2.setAttribute("onclick","cerrar('formato')")
        archivo2.setAttribute("onclick","dblclick('archivo')")
        vista2.setAttribute("onclick","dblclick('vista')")
        ayuda2.setAttribute("onclick","dblclick('ayuda')")
        editar2.setAttribute("onclick","dblclick('editar')")
    }
    if (id == "vista") {
        editar.style.cssText = "visibility: hidden"
        archivo.style.cssText = "visibility: hidden"
        ayuda.style.cssText = "visibility: hidden"
        formato.style.cssText = "visibility: hidden"

        vista2.setAttribute("onclick","cerrar('vista')")
        archivo2.setAttribute("onclick","dblclick('archivo')")
        formato2.setAttribute("onclick","dblclick('formato')")
        ayuda2.setAttribute("onclick","dblclick('ayuda')")
        editar2.setAttribute("onclick","dblclick('editar')")
    }
    if (id == "ayuda") {
        editar.style.cssText = "visibility: hidden"
        vista.style.cssText = "visibility: hidden"
        archivo.style.cssText = "visibility: hidden"
        formato.style.cssText = "visibility: hidden"

        ayuda2.setAttribute("onclick","cerrar('ayuda')")
        archivo2.setAttribute("onclick","dblclick('archivo')")
        formato2.setAttribute("onclick","dblclick('formato')")
        vista2.setAttribute("onclick","dblclick('vista')")
        editar2.setAttribute("onclick","dblclick('editar')")
    }
}

function cerrar(id) {
    const boton = document.getElementById(id)
    boton.style.cssText = "visibility: hidden";
    switch(boton){
        case "archivo":
            archivo2.setAttribute("onclick","dblclick('archivo')")
            break
        case "editar":
            editar2.setAttribute("onclick","dblclick('editar')")
            break
        case "formato":
            formato2.setAttribute("onclick","dblclick('formato')")
            break
        case "vista":
            vista2.setAttribute("onclick","dblclick('vista')")
        case "ayuda":
            ayuda2.setAttribute("onclick","dblclick('ayuda')")
            break
        default:
            console.log("error")
            break


    }
}
