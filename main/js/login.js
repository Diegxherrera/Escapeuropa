let usuario;
let pass;
let clase = document.getElementById('error');
let correcto;

console.log(document.cookie)
document.addEventListener("keyup", next)

function comprobar() {
    var usuario = document.getElementById('email_text').value;
    var pass = document.getElementById('password_text').value;
    if (usuario == 'Roberto' && pass == '1234') {
        correcto = true;
        console.log(correcto);
        create_short_cookie("Login","correcto")
        getCookie("Login")
        document.location = "/main/desktop.html"
    } else {
        document.getElementById("error").style.visibility = "visible";
        correcto = false;
        console.log(correcto);
    }
}

function close_alert() {
    document.getElementById("error").style.visibility = "hidden";
}

function resetpass() {
    window.location.href = 'uac_alt.html'
}

function next(tecla) {
    if (tecla.key == "Enter") {
        console.log(tecla);
        comprobar();

    }
}
