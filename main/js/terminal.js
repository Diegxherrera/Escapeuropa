
//llamada1
document.addEventListener("keydown", next)

//valores iniciales
const newline = document.createElement('input');
let value = 0;
//main route
let directory = 'C:&bsol;Users&bsol;Roberto&#62;';
let directoryw = 'C:&bsol;Users&bsol;Roberto';
let dir = 'rob';
//respuesta1
function next(tecla){
    if(tecla.key == 'Enter'){
        //llamada2
        newLine();
        document.getElementById('input_text'+value).focus(); // Selecciona el nuevo campo de texto (nueva linea)
    }else{
    document.getElementById('input_text'+value).focus(); 
    console.log('Focused' + 'input_text'+value);
    }
}   

//respuesta2
function newLine(){
    let val = document.getElementById('input_text'+value).value;
    let command = document.getElementById('input_text'+value).value;
    var exist = val.search("cd "); // Comprueba si hay un 'cd ' en el input y lo almacena en exist (-1 si no hay)
    var exist2 = val.search('decrypt ');
    switch(command){
    //caso dir
    case 'dir':
        switch(dir){
            case 'rob':
                $('body').append('</br>15/02/2022ㅤㅤㅤㅤ14:08ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤ.android<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤBoot<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤdebug<br>11/02/2022ㅤㅤㅤㅤ20:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤDesktop <br>');
                break
            case 'windows':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤSystem32 <br>11/01/2022ㅤㅤㅤㅤ21:02ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤLogs <br>11/02/2022ㅤㅤㅤㅤ23:11ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤData Profiles<br>');
                break
            case 'users':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤRoberto');
                break
            case 'c':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ10:21ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤProgram Files</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤWindows</br>12/02/2022ㅤㅤㅤㅤ12:43ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤUsers <br>');
                break
            case 'desktop':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ09:21ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤPapelera</br>11/02/2022ㅤㅤㅤㅤ10:51ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤGoogle Chrome</br>11/02/2022ㅤㅤㅤㅤ08:12ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤExplorador de Archivos</br>11/02/2022ㅤㅤㅤㅤ10:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤRDNzM25jUjFwVDRkMFIg</br>11/02/2022ㅤㅤㅤㅤ11:27ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤQ2xhdmUgZGUgZGVzZW5jcmlwdGFjacOzbg==</br>');
                break
        }  
        break 
    //caso cls
    case 'cls':
        $('#body').empty();
        break
    //caso cd
    case 'cd':
        $('body').append('</br>'+directoryw+'</br>');
        break
    
    // caso decrypt
    case 'decrypt RDNzM25jUjFwVDRkMFIg':
        if(dir === 'desktop'){
        create_short_cookie('decrypt', 'si');
    setTimeout(function() {
        $('body').append('<br>9@]v(AWbT/hUX8g!qG7{QD9yUT!u;V</br>');
        setTimeout(function() {
            $('body').append('AVbG@KN6[m-5$5S/M.}%T2khBnj#_</br>');
            setTimeout(function() {
                $('body').append('XHqru@rDmeUn@z8LHPUU#{-tyrc{+L</br>');
                    setTimeout(function() {
                        $('body').append('SXw[JPmpZ#[6G{@$LbQDCUd,QLue5:</br>');
                        setTimeout(function() {
                            $('body').append('fcpQ?tC,g!5R5{wcA*KXh.{R5f@3Pw</br>');
                            setTimeout(function() {
                                $('body').append('r2f3H[@bjG_F23_&+Cq*uJe_g]dFay</br>');
                                setTimeout(function() {
                                    $('body').append('Jr*fLqh(REDADEcRe$)AW!b@</br>');
                                    setTimeout(function() {
                                        $('body').append('J3%9fes D043kr6Pt0?4r</br>');
                                        setTimeout(function() {
                                            $('body').append('J%mfes D3kryPt)=r</br>');
                                            setTimeout(function() {
                                                $('body').append('J(3mes D3kryPt(r</br>');
                                                setTimeout(function() {
                                                    $('body').append('J)ames D33crypt33r</br>');
                                                    setTimeout(function() {
                                                        $('body').append('James D3crypt3R</br>');
                                                        setTimeout(function() {
                                                            $('body').append('James D3crypt3R</br>');
                                                            setTimeout(function() {
                                                                $('body').append('James D3crypter</br>');
                                                                setTimeout(function() {
                                                                    createCookie('decrypted','si');
                                                                    $('body').append('James Decrypter</br>Decryption succesfully completed! <br>');
                                                                    }, 400)
                                                                }, 500)
                                                            }, 500)
                                                        }, 500)
                                                    }, 400)
                                                }, 400)
                                            }, 400)
                                        }, 400)
                                    }, 600)
                                }, 600)
                            }, 600)
                        }, 600)
                    },
                    600)
            }, 600)
        }, 600)
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
        break;
    //caso cd ..
    case 'cd ..':
    case 'cd..':
        switch(dir){
            case 'rob':
                directoryw = 'C:&bsol;Users';
                directory = 'C:&bsol;Users&#62;';
                dir = 'users';
                break
            case 'windows':
                directoryw = 'C:&bsol;';
                directory = 'C:&bsol;&#62;';
                dir = 'c';
                break
            case 'users':
                directoryw = 'C:&bsol;';
                directory = 'C:&bsol;&#62;';
                dir = 'c';
                break
            case 'desktop':
                directoryw = 'C:&bsol;Users&bsol;Roberto&bsol;';
                directory = 'C:&bsol;Users&bsol;Roberto&#62;';
                dir = 'rob'
        }
        break
    //cd Windows
    case 'cd Windows':
        if(dir == 'c'){
            directory = 'C:&bsol;Windows&#62;';
            dir = 'windows'
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
        break
    // caso cd desktop
    case 'cd Desktop':
        if(dir == 'rob'){
            directory = 'C:&bsol;Users&bsol;Roberto&bsol;Desktop&#62;';
            dir = 'desktop'
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
        break
    //caso cd Users
    case 'cd Users':
        if(dir == 'c'){
            directoryw = 'C:&bsol;Users';
            directory = 'C:&bsol;Users&#62;';
            dir = 'users';
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
        break
    //caso cd Roberto
    case 'cd Roberto':
        if(dir == 'users'){
            directoryw = 'C:&bsol;Users&bsol;Roberto';
            directory = 'C:&bsol;Users&bsol;Roberto&#62;';
            dir = 'rob';
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
        break
    case 'cd System32':
        if(dir != 'windows'){ // En caso de no estar en el directorio windows
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break
    case 'cd Program Files':
        if(dir != 'c'){ // En caso de no estar en el directorio c
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break
    case 'cd .android':
        if(dir != 'rob'){ // En caso de no estar en el directorio Roberto
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break
    case 'cd debug': 
        if(dir != 'rob'){ // En caso de no estar en el directorio Roberto
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break
    case 'cd Boot':
        if(dir != 'rob'){ // En caso de no estar en el directorio Roberto
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break
    case 'cd Data Profiles':
        if(dir != 'windows'){
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            $('body').append('</br> El directorio esta bloqueado o es inaccesible. </br>'); // Bloqueo para directorios que no se van a usar
        }
        break

    case '': // Si esta en blanco
        
        break
    case 'help':
        $('body').append('</br> Los comandos disponibles son: </br> cd -> Muestra el directorio actual</br>decrypt -> Desencripta el directorio/documento especificado </br> cd (directorio) -> Accede al directorio actual </br> dir -> Muestra los archivos que hay dentro del directorio actual </br> cd.. / cd .. -> Retrocede un directorio en la ruta </br> cls -> Limpia la consola de comandos (borra todo lo escrito) </br>');
        break;
    default: 
    if(exist != -1){ // Si no es igual a -1 (es decir, si hay un 'cd ')
        $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }else{
            if(exist2 != -1){
                $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
            }else{ // Si no
                $('body').append('</br> "'+ val + '" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable. </br>');
                }
                break;
            }
    }
    //final del switch


    //newline
    value++
    var text = "</br>"+ directory +"<input type='text' spellcheck='false' class='typing' autocomplete='off' autofocus id='input_text" + value + "'>";       
    $("body").append(text); 
}