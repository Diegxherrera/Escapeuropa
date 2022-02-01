jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js";
function cargar(){
    setTimeout(function(){
        window.location.href="desktop.html";
    }, 5000);
}
window.onload(cargar());