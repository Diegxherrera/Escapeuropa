const escenario = $('.grid_escenario')
const estanteria = $('.estanteria')
const lista = $('.lista')
//x defecto
escenario.show()
estanteria.hide()
lista.hide()

//cambios
function openestanteria(){
    escenario.hide()
    estanteria.show()
}
function estanteriaback(){
    escenario.show()
    estanteria.hide()
}
function openlist(){
    escenario.hide()
    lista.show()
}
function openrepair(){
    escenario.hide()
}
function cerrarlista(){
    lista.hide()
    escenario.show()
}


