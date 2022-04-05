//vida jugador
let vida1 = 150
    //vida enemigo
let vida2 = 120

let uso1 = document.getElementById("uso1")
let uso2 = document.getElementById("uso2")

let vidan1 = document.getElementById("vidan1")
vidan1.innerHTML = vida1
let vidan2 = document.getElementById("vidan2")
vidan2.innerHTML = vida2

function restart() {
    vida1 = 150
    vida2 = 120

    let vidan1 = document.getElementById("vidan1")
    vidan1.innerHTML = vida1
    let vidan2 = document.getElementById("vidan2")
    vidan2.innerHTML = vida2

}

function combat(yourselect) {
    const selector = parseInt(Math.random() * 3)
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
        
        setTimeout('location.href = "../carganivel4.html"',1000)
    }
    if (vida1 == 0) {
        setTimeout("restart()",1000)
    }
}