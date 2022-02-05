let cpu = false
let gpu = false
let dis = false
let mot = false
let ram = false

let textquality = ""
let comprobador = ""
let secuencia = ""
let quality = parseInt(Math.random() * 10) + 1

if (quality <= 6){
    console.log("baja calidad")
    comprobador = "aaaaa"
    textquality = "bajos recursos"
}
else if (quality <= 9){
    console.log("media calidad")
    comprobador = "bbbbb"
    textquality = "medios recursos"
}
else if (quality <= 10){
    console.log("alta calidad")
    comprobador = "ccccc"
    textquality = "altos recursos"
}

$('#listacontenido').text(textquality)
$('#texto_lista').text("Es posible que haya componentes que seán ireparables, encuentra su reemplazo que sepas que los componentes deben ser de " + textquality)

function cpuclick(id){
    if(cpu == false){
    const argid = document.getElementById(id)
    argid.style.cssText = "border: 3px solid rgba(21, 255, 0, 0.623);"
    if(id == "cpulow"){secuencia = secuencia + "a"}
    if(id == "cpumid"){secuencia = secuencia + "b"}
    if(id == "cpuhig"){secuencia = secuencia + "c"}
    console.log(secuencia)
    }
    cpu = true
}

function ramclick(id){
    if(ram == false){
    const argid = document.getElementById(id)
    argid.style.cssText = "border: 3px solid rgba(21, 255, 0, 0.623);"
    if(id == "ramlow"){secuencia = secuencia + "a"}
    if(id == "rammid"){secuencia = secuencia + "b"}
    if(id == "ramhig"){secuencia = secuencia + "c"}
    console.log(secuencia)
    }
    ram = true
}

function gpuclick(id){
    if(gpu == false){
    const argid = document.getElementById(id)
    argid.style.cssText = "border: 3px solid rgba(21, 255, 0, 0.623);"
    if(id == "gpulow"){secuencia = secuencia + "a"}
    if(id == "gpumid"){secuencia = secuencia + "b"}
    if(id == "gpuhig"){secuencia = secuencia + "c"}
    console.log(secuencia)
    }
    gpu = true
}

function disclick(id){
    if(dis == false){
    const argid = document.getElementById(id)
    argid.style.cssText = "border: 3px solid rgba(21, 255, 0, 0.623);"
    if(id == "dislow"){secuencia = secuencia + "a"}
    if(id == "dismid"){secuencia = secuencia + "b"}
    if(id == "dishig"){secuencia = secuencia + "c"}
    console.log(secuencia)
    }
    dis = true
}

function motclick(id){
    if(mot == false){
    const argid = document.getElementById(id)
    argid.style.cssText = "border: 3px solid rgba(21, 255, 0, 0.623);"
    if(id == "motlow"){secuencia = secuencia + "a"}
    if(id == "motmid"){secuencia = secuencia + "b"}
    if(id == "mothig"){secuencia = secuencia + "c"}
    console.log(secuencia)
    }
    mot = true
}

function comprobacion(){
    if (comprobador == secuencia){
        console.log("correcto") //animación de montaje del pc
    }
    else ("incorrecto") //si falla 3 veces restart desde into
}


