const escenario = $('.grid_escenario')
const estanteria = $('.estanteria')
//x defecto
escenario.show()
estanteria.hide()

//cambios
function openestanteria(){
    escenario.hide()
    estanteria.show()
}
function estanteriaback(){
    escenario.show()
    estanteria.hide()
}
function openrepair(){
    escenario.hide()
}
