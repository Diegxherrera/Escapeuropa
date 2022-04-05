//vida jugador
let vida1 = 150
    //vida enemigo
let vida2 = 120
let veces_perdidas = 0

let uso1 = document.getElementById("uso1")
let uso2 = document.getElementById("uso2")

let vidan1 = document.getElementById("vidan1")
vidan1.innerHTML = vida1
let vidan2 = document.getElementById("vidan2")
vidan2.innerHTML = vida2
let selector;
let attacktype;

function restart() {
    vida1 = 150
    vida2 = 120

    let vidan1 = document.getElementById("vidan1")
    vidan1.innerHTML = vida1
    let vidan2 = document.getElementById("vidan2")
    vidan2.innerHTML = vida2

    document.getElementById("button_a").setAttribute("onclick","combat(0)")
    document.getElementById("button_b").setAttribute("onclick","combat(1)")
    document.getElementById("button_c").setAttribute("onclick","combat(2)")
    console.log(veces_perdidas)

}
function random(){
    selector = parseInt(Math.random() * 3)
    attacktype = ["que use fuerza bruta","un contraataque","una finta"]
    uso2.innerHTML = "Prevees "+ attacktype[selector]
}
random()
function combat(yourselect) {
    const attack = ["rojo", "azul", "verde"]
    console.log("p1" + attack[yourselect] + " p2 " + attack[selector])

    if (attack[selector] == "rojo" && attack[yourselect] == "rojo") {
        console.log("empate")
        uso1.innerHTML = "Usaste fuerza bruta"
        uso2.innerHTML = "Enemigo uso fuerza bruta"
    }
    if (attack[selector] == "rojo" && attack[yourselect] == "azul") {
        console.log("ganas")
        vida2 = vida2 - 20
        $("#daño2").show()
        uso1.innerHTML = "Usaste contraataque"
        uso2.innerHTML = "Enemigo uso fuerza bruta"
        setTimeout("$('#daño2').hide()", "1500")
    }
    if (attack[selector] == "rojo" && attack[yourselect] == "verde") {
        console.log("pierdes")
        vida1 = vida1 - 25
        $("#daño1").show()
        uso1.innerHTML = "Usaste finta"
        uso2.innerHTML = "Enemigo uso fuerza bruta"
        setTimeout("$('#daño1').hide()", "1500")
    }


    if (attack[selector] == "azul" && attack[yourselect] == "rojo") {
        console.log("pierdes")
        vida1 = vida1 - 25
        $("#daño1").show()
        uso1.innerHTML = "Usaste fuerzabruta"
        uso2.innerHTML = "Enemigo uso contraataque"
        setTimeout("$('#daño1').hide()", "1500")
    }
    if (attack[selector] == "azul" && attack[yourselect] == "azul") {
        console.log("empate")
        uso1.innerHTML = "Usaste contraataque"
        uso2.innerHTML = "Enemigo contraataque"
    }
    if (attack[selector] == "azul" && attack[yourselect] == "verde") {
        console.log("ganas")
        vida2 = vida2 - 20
        $("#daño2").show()
        uso1.innerHTML = "Usaste finta"
        uso2.innerHTML = "Enemigo contraataque"
        setTimeout("$('#daño2').hide()", "1500")
    }


    if (attack[selector] == "verde" && attack[yourselect] == "rojo") {
        console.log("ganas")
        vida2 = vida2 - 20
        $("#daño2").show()
        uso1.innerHTML = "Usaste fuerza bruta"
        uso2.innerHTML = "Enemigo finta"
        setTimeout("$('#daño2').hide()", "1500")
    }
    if (attack[selector] == "verde" && attack[yourselect] == "azul") {
        console.log("pierdes")
        vida1 = vida1 - 25
        $("#daño1").show()
        uso1.innerHTML = "Usaste contraataque"
        uso2.innerHTML = "Enemigo uso finta"
        setTimeout("$('#daño1').hide()", "1500")
    }
    if (attack[selector] == "verde" && attack[yourselect] == "verde") {
        console.log("empate")
        uso1.innerHTML = "Usaste finta"
        uso2.innerHTML = "Enemigo finta"
    }


    let vidan1 = document.getElementById("vidan1")
    vidan1.innerHTML = vida1
    let vidan2 = document.getElementById("vidan2")
    vidan2.innerHTML = vida2
    console.log(vida1 + "/" + vida2)

    if (vida2 == 0) {

        document.getElementById("button_a").removeAttribute("onclick")
        document.getElementById("button_b").removeAttribute("onclick")
        document.getElementById("button_c").removeAttribute("onclick")
        setTimeout('location.href = "../Nivel 4/descargavirus.html"',1200)
    }
    if (vida1 == 0) {
        document.getElementById("button_a").removeAttribute("onclick")
        document.getElementById("button_b").removeAttribute("onclick")
        document.getElementById("button_c").removeAttribute("onclick")
        veces_perdidas++
        if(veces_perdidas == 3){
            location.href = "../game_over.html"
        }
        setTimeout("restart()",1200)
        
    }
    random()
}