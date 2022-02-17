
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
        console.log('Append')
        document.getElementById('input_text'+value).focus();
    }else{
    document.getElementById('input_text'+value).focus();
    console.log('Focused' + 'input_text'+value);
    }
}   

//respuesta2
function newLine(){
    let val = document.getElementById('input_text'+value).value;
    let command = document.getElementById('input_text'+value).value;
    switch(command){
    //caso dir
    case 'dir':
        switch(dir){
            case 'rob':
                $('body').append('</br>15/02/2022ㅤㅤㅤㅤ14:08ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤ.android<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤBoot<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤdebug <br>');
                break
            case 'windows':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤSystem32 <br>11/01/2022ㅤㅤㅤㅤ21:02ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤLogs <br>11/02/2022ㅤㅤㅤㅤ23:11ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤ<br>1#/^2/2?2@ㅤㅤㅤ%9:0@ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤX4nn*<br>');
                break
            case 'users':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤRoberto');
                break
            case 'c':
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ10:21ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤProgram Files</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤWindows</br>12/02/2022ㅤㅤㅤㅤ12:43ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤUsers <br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤSystem32 <br>');
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
    default: 
        $('body').append('</br> "'+ val + '" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable. </br>');
        break
    }
    //final del switch

    //newline
    value++
    var text = "</br>"+ directory +"<input type='text' class='typing' autocomplete='off' autofocus id='input_text" + value + "'>";        
    $("body").append(text); 
}