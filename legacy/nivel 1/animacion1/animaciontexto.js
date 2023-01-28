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
let texto_siguiente = setInterval("comprobar_escribir('ROBERTO:  Veo que has podido obtener los componentes de repuesto.',1,texto_siguiente)", 100)
let texto_siguiente2 = setInterval("comprobar_escribir('ROBERTO: No me puedo creer que hayas tenido que pedir componentes de repuesto, relájate yo pago los costes, pero eso si...',2,texto_siguiente2)", 100)
let texto_siguiente3 = setInterval("comprobar_escribir('ROBERTO: Que sepas que tienes 4 puntos menos en el parcial',3,texto_siguiente3)", 100)
let texto_siguiente4 = setInterval("comprobar_escribir('ROBERTO: Bien ponte a montarlo.',4,texto_siguiente4)", 100)
let texto_siguiente5 = setInterval("comprobar_escribir('Estas trabajando, te impresiona lo facil que te esta resultando, encajas correctamente la cpu en su socket, levantas las pestañas y colocas la ram, rápidamente identificas el puerto SATA para colocar el disco, enseguida prosigues a conectar la gráfica a su puerto PCIE, notas lo mucho que has aprendido en estos meses.... ',5,texto_siguiente5)", 100)
let texto_siguiente6 = setInterval("comprobar_escribir('Roberto: Bien, ¿has terminado ya verdad? no creas que has acabado, esto solamente ha sido el hardware ahora toca el software, quiero que le instales a este equipo un windows 10. El usuario debe ser Roberto y la contraseña 1234',6,texto_siguiente6)", 100)


