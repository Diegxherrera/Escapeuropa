const img1 = $('#img1')
const img2 = $('#img2')
const img3 = $('#img3')
const img4 = $('#img4')
const img5 = $('#img5')
const textbox = $('#textbox')
const ilumination = $('.ilumination')
let contador = 1


function cerrar() {
    textbox.css({ "border": "2px solid white" })
    textbox.animate({
            "font-size": "0",
            "height": "0"

        }, 2000

    );

    setTimeout("textbox.hide(1000)", "2000")

    ilumination.hide()
    img4.hide()


}

function chimg() {
    if (contador == 1) {
        img1.hide()
        console.log("hide")
        img2.show()
    }
    if (contador == 2) {
        img2.hide()
        console.log("hide")
        img3.show()
    }
    if (contador == 3) {
        img3.hide()
        console.log("hide")
        img2.show()
    }
    if (contador == 4) {
        img2.hide()
        console.log("hide")
        img5.show()
    }
    if (contador == 5) {
        img5.hide()
        $('body').addClass('temblor')
        setTimeout("$('body').removeClass('temblor')", 500)
        console.log("hide")
    }
    if (contador == 6) {
        img5.addClass('img5rt')
        img5.show()
    }
    if (contador == 8) {
        img5.hide()
        console.log("hide")
        img4.show()
    }
    if (contador == 9) {
        cerrar()

    }
    contador++
}
document.addEventListener("keyup", next)

function next(tecla){
    if(tecla.key == "Enter" || tecla.key == " "){
        indice()
    }
}