//variables/const globales 

//Comprobación de selección
let cpu = false
let gpu = false
let dis = false
let mot = false
let ram = false

//Posibles componentes
let disco = false
let grafica = false
let procesador = false
let placa = false
let memoria = false

//comprobación de secuencia correcta
let textquality = ""
let comprobador = ""
let secuencia = ""
let correcto = false
let vecescorrecto = 0
let comprado = false

//declaración de secuencia
const quality = parseInt(Math.random() * 10) + 1
let componente1 = parseInt(Math.random() * 5 + 1)
let componente2 = parseInt(Math.random() * 5 + 1)
let componente3 = parseInt(Math.random() * 5 + 1)

//recalculo para evitar duplicados
while (componente1 == componente2 || componente1 == componente3 || componente2 == componente3) {
    componente1 = parseInt(Math.random() * 5 + 1)
    componente2 = parseInt(Math.random() * 5 + 1)
    componente3 = parseInt(Math.random() * 5 + 1)
    console.log("reecalculo c1 = " + componente1 + "\n" + "reecalculo c2 = " + componente2 + "\n" + "reecalculo c3 = " + componente3)
}

if (componente1 == 1) { disco = true; console.log("disco") }
else if (componente1 == 2) { grafica = true; console.log("grafica") }
else if (componente1 == 3) { procesador = true; console.log("procesador") }
else if (componente1 == 4) { placa = true; console.log("placa") }
else if (componente1 == 5) { memoria = true; console.log("memoria") }

if (componente2 == 1) { disco = true; console.log("disco") }
else if (componente2 == 2) { grafica = true; console.log("grafica") }
else if (componente2 == 3) { procesador = true; console.log("procesador") }
else if (componente2 == 4) { placa = true; console.log("placa") }
else if (componente2 == 5) { memoria = true; console.log("memoria") }

if (componente3 == 1) { disco = true; console.log("disco") }
else if (componente3 == 2) { grafica = true; console.log("grafica") }
else if (componente3 == 3) { procesador = true; console.log("procesador") }
else if (componente3 == 4) { placa = true; console.log("placa") }
else if (componente3 == 5) { memoria = true; console.log("memoria") }

if (quality <= 6) {
    console.log("baja calidad")
    comprobador = "AAA"
    textquality = "bajos recursos"
}
else if (quality <= 9) {
    console.log("media calidad")
    comprobador = "BBB"
    textquality = "medios recursos"
}
else if (quality <= 10) {
    console.log("alta calidad")
    comprobador = "CCC"
    textquality = "altos recursos"
}

$('#listacontenido').text(textquality)
$('#texto_lista').text("Algunos componentes son ireparables, encuentra su reemplazo que sepas que los componentes deben ser de " + textquality)

const componentes = document.getElementById('componentes')
if (procesador == true) {
    componentes.innerHTML += "procesador <br>"
}
if (disco == true) {
    componentes.innerHTML += "disco <br>"
}
if (grafica == true) {
    componentes.innerHTML += "gráfica <br>"
}
if (memoria == true) {
    componentes.innerHTML += "memoria <br>"
}
if (placa == true) {
    componentes.innerHTML += "placa <br>"
}

function cpuclick(id) {
    if (cpu == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"

        if (id == "cpulow") { secuencia = secuencia + "A" }
        if (id == "cpumid") { secuencia = secuencia + "B" }
        if (id == "cpuhig") { secuencia = secuencia + "C" }

        if (procesador == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "procesador es " + procesador)
    }
    cpu = true
}

function ramclick(id) {
    if (ram == false) {

        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"

        if (id == "ramlow") { secuencia = secuencia + "A" }
        if (id == "rammid") { secuencia = secuencia + "B" }
        if (id == "ramhig") { secuencia = secuencia + "C" }
        if (memoria == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "ram es " + memoria)
    }
    ram = true
}

function gpuclick(id) {
    if (gpu == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "gpulow") { secuencia = secuencia + "A" }
        if (id == "gpumid") { secuencia = secuencia + "B" }
        if (id == "gpuhig") { secuencia = secuencia + "C" }
        if (grafica == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "gpu es " + grafica)
    }
    gpu = true
}

function disclick(id) {
    if (dis == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "dislow") { secuencia = secuencia + "A" }
        if (id == "dismid") { secuencia = secuencia + "B" }
        if (id == "dishig") { secuencia = secuencia + "C" }
        if (disco == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "disco es " + disco)
    }
    dis = true
}

function motclick(id) {
    if (mot == false) {
        const argid = document.getElementById(id)
        const ctext = document.getElementById("ctext")
        ctext.innerHTML += argid.innerHTML + "<br>"
        if (id == "motlow") { secuencia = secuencia + "A" }
        if (id == "motmid") { secuencia = secuencia + "B" }
        if (id == "mothig") { secuencia = secuencia + "C" }
        if (placa == true) {
            correcto = true
            vecescorrecto++
        }
        console.log(secuencia + "\n" + "placa es " + placa)
    }
    mot = true
}
function compra() {
    comprado = true
    vaciarcarritoparcial()
}
function comprobacion() {
    if (secuencia == "" || comprado == false) {
        $('.warning').css('display', 'flex')
        setTimeout("$('.warning').css('display','none')", 2500)
    }
    else if (comprobador == secuencia && vecescorrecto == 3 && correcto == true && comprado == true) {
        switch(secuencia){
            case "CCC":
                if(disco==true){
                    createCookie("disco","SamsungSSD")
                    createCookie("tam","1TB")
                    console.log(getCookie("disco"))
                    console.log(getCookie("tam"))
                    break
                }
            case "BBB":
                if(disco==true){
                    createCookie("disco","WesternDigital")
                    createCookie("tam","1TB")
                    console.log(getCookie("disco"))
                    console.log(getCookie("tam"))
                    break
                }
            case "AAA":
                if(disco==true){
                    createCookie("disco","WesternDigital")
                    createCookie("tam","500GB")
                    console.log(getCookie("disco"))
                    console.log(getCookie("tam"))
                    break
                }
        }
        alert("correcto") //animación de montaje del pc
    }
    else { alert("incorrecto") 
    console.log(correcto)
    console.log(vecescorrecto)
    console.log(comprado)
    console.log(comprobador)} 
    //si falla 3 veces restart desde intro
}

function vaciarcarritoparcial(){
    const ctext = document.getElementById("ctext")
    ctext.innerHTML = ""
}
function vaciarcarritototal(){
    const ctext = document.getElementById("ctext")
    ctext.innerHTML = ""
    mot = false
    dis = false
    gpu = false
    ram = false
    cpu = false

    disco = false
    grafica = false
    procesador = false
    placa = false
    memoria = false

    secuencia = ""
    correcto = false
    vecescorrecto = 0

    console.log('variables playerside seteadas a default')
}