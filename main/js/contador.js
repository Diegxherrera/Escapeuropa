let minuto = 0
let segundos = 1
let comprobador_minuto = 1
let comprobador_segundo = 1
setInterval(function() {
    if (comprobador_segundo % 60 == 0) {
        minuto = 1 * comprobador_minuto
        segundos = 1
        comprobador_minuto = comprobador_minuto + 1
        comprobador_segundo = 1
        if(segundo < 10){
            document.getElementById("time").innerHTML = minuto +  ":" + '0' + segundos
        }
    } else {
        segundos++
        if(segundos < 10){
            document.getElementById("time").innerHTML = minuto +  ":" + '0' + segundos
        }
        comprobador_segundo++
    }
}, 1000)