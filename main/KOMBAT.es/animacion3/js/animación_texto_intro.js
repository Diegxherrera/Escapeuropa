//funcion compleja no tocar
let longitud_texto = 0
    //variable comprobadora de indices
let x = 1
let i = 0
let y = 1

function indice() {
    x++
    y--
    document.getElementById("textboxp").innerHTML = ""
    i = 0
    chimg()
}


function escribir(texto) {
    //inicio de bucle con intervalo de 100ms
    //reestructuración del input de texto
    let arr_texto = texto.split("")
    let longitud_texto = arr_texto.length
    console.log(arr_texto, longitud_texto)
        //nombrar para borrar
    const interval = setInterval(function() {
        if (i > longitud_texto - 1 || y == 0) {
            clearInterval(interval)
            y++
        } else {
            let textbox = document.getElementById("textboxp")
            textbox.innerHTML += arr_texto[i]
                //incremento del bucle, se sigue ejecutando
            i++
        }
        //tiempo editable, mayor numero mas lento aparecen las letras
    }, 30)
}

//funcion 2 sirve para añadir mas lineas que la inicial comprobando que su indice sea correcto
function comprobar_escribir(text, indice, titulo) {
    if (x == indice) {
        escribir(text)
        clearInterval(titulo)
    }
}
//funcion 1 vale para añadir solo 1 texto no mas solo usar 1 vez o no usar
let texto_siguiente = setInterval("comprobar_escribir('ROBERTO: Hola hoy vas a hacer un labs, debes estar a la altura, coge tus cosas vienes conmigo.',1,texto_siguiente)", 100)
let texto_siguiente2 = setInterval("comprobar_escribir('ROBERTO: ¿Que donde están los demas?',2,texto_siguiente2)", 100)
let texto_siguiente3 = setInterval("comprobar_escribir('ROBERTO: Verás ultimamente no vas bien en clase y se que no me estás demostrando todo tu potencial, así que hoy me centraré en tí...',3,texto_siguiente3)", 100)
let texto_siguiente4 = setInterval("comprobar_escribir('ROBERTO: Los demás tendrán clase con Juán de Dios.',4,texto_siguiente4)", 100)
let texto_siguiente5 = setInterval("comprobar_escribir('ROBERTO: ¿En fin, te comento vés ese ordenador de ahí?',5,texto_siguiente5)", 100)
let texto_siguiente6 = setInterval("comprobar_escribir('trrr trrr.... pum',6,texto_siguiente6)", 100)
let texto_siguiente7 = setInterval("comprobar_escribir('Miras al ordenador y sin nisiquiera darte tiempo a pestañear, roberto había tirado el ordenador al suelo....',7,texto_siguiente7)", 100)
let texto_siguiente8 = setInterval("comprobar_escribir('ROBERTO: Debes arreglarlo, este es tu trabajo de hoy, no vas a poder salir hoy hasta que termines de arreglarlo, ...... no me mires con esa cara, tus padres ya estan al corriente, te aviso en cuanto me vaya no preguntes nada o tendrás un cero, ¿Tienes alguna duda antes de que me vaya?  ',8,texto_siguiente8)", 100)
let texto_siguiente9 = setInterval("comprobar_escribir('ROBERTO: ¿ninguna verdad?, bien pues empieza. ',9,texto_siguiente9)", 100)

