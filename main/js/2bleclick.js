//default
document.getElementById("igoogle").style.cssText = "visibility: hidden"
document.getElementById("ifilesexplorer").style.cssText = "visibility: hidden"
document.getElementById("inotepad").style.cssText = "visibility: hidden"

//en html debe ser llamado en el elemento appicon como ondblclick="dblclick" 
//IMPORTANTE LE DEBES AÑADIR EL ID DENTRO DE LA FUNCIÓN DE LO QUE QUIERES QUE SE MUESETRE AL HACER DOBLE CLICK 
function dblclick(id) {
    const element = document.getElementById(id)
    element.style.cssText = "visibility: visible"
    element.style.cssText = "z-index: 100"
    console.log(element + "funciono")
}
//este para el borón de cerrar funciona igual pero hace lo contrario
function close(id) {
    const element = document.getElementById(id)
    element.style = "visibility: hidden"
    element.style = "z-index: -100"
}
//en html debe ser llamado en el elemento appicon como onclick="unclick"
function unclick(id) {
    const elemento = document.getElementById(id)
    if (elemento != document.getElementById('app-4 blocked')) {
        elemento.style.cssText = "background-color: rgba(255, 255, 255, 0.199); border: 1px dotted white;"
    } else {
        elemento.style.cssText = "background-color: rgba(255, 0, 0, 0.199); border: 1px dotted red;"
    }
    setTimeout("reset()", 100)
}

function reset() {
    const body = document
    body.onclick = function() {
        //cuando añadas mas apps al html añadelas aqui tambien
        const app1 = document.getElementById("app-1 trash")
        const app2 = document.getElementById("app-2 chrome")
        const app3 = document.getElementById("app-3 files-explorer")
        const app4 = document.getElementById("app-4 blocked")
        const app5 = document.getElementById("app-5 notepad")

        app1.style.cssText = ""
        app2.style.cssText = ""
        app3.style.cssText = ""
        app4.style.cssText = ""


        //fin del espacio de añadir apps
        body.onclick = ""
    }
}