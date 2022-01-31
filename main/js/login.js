var usuario;
var pass;

function comprobar(){
    var usuario = document.getElementById('email_text').value;
    var pass = document.getElementById('password_text').value;
    if(usuario=='Roberto'&&pass=='1234'){
        var correcto = true;
        console.log(correcto);

        setTimeout(function(){
            window.location.href="cargainicio.html";
        }, 2000);
    }else{
        document.write('Inicio de sesion fallido')
        var correcto = false;
        console.log(correcto);
    }
}