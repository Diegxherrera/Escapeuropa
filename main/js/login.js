var usuario;
var pass;
var clase = document.getElementById('error');
document.addEventListener("keyup", next)


function comprobar() {
    var usuario = document.getElementById('email_text').value;
    var pass = document.getElementById('password_text').value;
    if (usuario == 'Roberto' && pass == '1234') {
        var correcto = true;
        console.log(correcto);
        document.cookie = "Login=Verificado;";  // Crea cookie de verificado
        setTimeout(function() {
            window.location.href = "desktop.html";
        }, 50);
    } else {
        document.getElementById("error").style.visibility = "visible";
        var correcto = false;
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