var minuto = 0
var segundos = 1
let comprobador_minuto = 1
let comprobador_segundo = 1
setInterval(function() {
    if(segundos == 59){
        document.getElementById('time').innerHTML = '0' + minuto + ':' + segundos
        segundos = 0;
        minuto++
        if(minuto == 8){
            document.location = "game_over.html"
        }
    }else{
        if(segundos <= 9 ){
            document.getElementById('time').innerHTML = '0' + minuto + ':' + '0' + segundos
            segundos++
        }else{
        document.getElementById('time').innerHTML = '0' + minuto + ':' + segundos
        segundos++
        }
    }
}, 1000)