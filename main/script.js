function resolve(){
    let bloq = document.getElementById("bloq")
    bloq.style.cssText = "display: none"
}
document.addEventListener("keyup",problem )

function problem(tecla){
    if(tecla.key == "F11"){
        resolve()
    }
}