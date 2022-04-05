//funcion compleja no tocar
let longitud_texto = 0
    //variable comprobadora de indices
let x = 1
let i = 0
let y = 1

function indice() {
    x++
    y--
    document.getElementById("g-ov-bd-txt").innerHTML = ""
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
            let textbox = document.getElementById("g-ov-bd-txt")
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
        setTimeout("location.href = './intro/intro.html'",5000)
    }
}
//funcion 1 vale para añadir solo 1 texto no mas solo usar 1 vez o no usar
let texto_siguiente = setInterval("comprobar_escribir('Tu Pc encontró un error fatal. Fallaste e hiciste que tu Pc crasheara mientras jugabas a escaperoom Puenteuropa.',1,texto_siguiente)", 100)
