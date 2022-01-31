function comprobar(){
    setTimeout(function(){
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;
    console.log(height);
    console.log(width);
    if(width<700){
        document.getElementById('apptitletrash').innerHTML='8';
        document.getElementById('apptitlechrome').innerHTML='2';
        document.getElementById('apptitlexplorer').innerHTML='7';
        document.getElementById('apptitleblock').innerHTML='1';
    }else{
        if(width<900){
            document.getElementById('apptitletrash').innerHTML='8';
            document.getElementById('apptitlechrome').innerHTML='#';
            document.getElementById('apptitlexplorer').innerHTML='7';
            document.getElementById('apptitleblock').innerHTML='1';
        }else{
            if(width<1000){
                document.getElementById('apptitletrash').innerHTML='&';
                document.getElementById('apptitlechrome').innerHTML='2';
                document.getElementById('apptitlexplorer').innerHTML=';';
                document.getElementById('apptitleblock').innerHTML='>';
            }else{
                    document.getElementById('apptitletrash').innerHTML='Trash';
                    document.getElementById('apptitlechrome').innerHTML='Google Chrome';
                    document.getElementById('apptitlexplorer').innerHTML='File Explorer';
                    document.getElementById('apptitleblock').innerHTML="[1/^*Jw?¡'2:&";
            }
        }
    }
    comprobar()
}, 200);
}
function blockedapp(){
    console.log('Funcion operativa')
}
window.onload=comprobar();
