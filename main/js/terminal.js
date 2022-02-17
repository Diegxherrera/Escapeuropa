document.addEventListener("keydown", next)
const newline = document.createElement('input');
let value = 0;
let directory = 'C:&bsol;Users&bsol;Roberto&#62;';
let directoryw = 'C:&bsol;Users&bsol;Roberto';
let dir = 'rob';


function next(tecla){
    if(tecla.key == 'Enter'){
        newLine();
        console.log('Append')
        document.getElementById('input_text'+value).focus();
    }else{
    document.getElementById('input_text'+value).focus();
    console.log('Focused' + 'input_text'+value);
    }
}   


function newLine(){
    let val = document.getElementById('input_text'+value).value;
    let command = document.getElementById('input_text'+value).value;
    if(command=='dir'){
        if(dir == 'rob'){
        $('body').append('</br>15/02/2022ㅤㅤㅤㅤ14:08ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤ.android<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤBoot<br>11/02/2022ㅤㅤㅤㅤ19:03ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤdebug <br>');
        }else{
            if(dir == 'windows'){
                $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤSystem32 <br>11/01/2022ㅤㅤㅤㅤ21:02ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤLogs <br>11/02/2022ㅤㅤㅤㅤ23:11ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤ<br>1#/^2/2?2@ㅤㅤㅤ%9:0@ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤX4nn*<br>');
            }else{
                if(dir == 'users'){
                    $('body').append('</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤRoberto');
                }else{
                    if(dir == 'c'){
                        $('body').append('</br>11/02/2022ㅤㅤㅤㅤ10:21ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤProgram Files</br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤWindows</br>12/02/2022ㅤㅤㅤㅤ12:43ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤUsers <br>11/02/2022ㅤㅤㅤㅤ11:42ㅤㅤㅤㅤ&lt;DIR&gt;ㅤㅤㅤㅤSystem32 <br>');
                    }
                }
            }
        }
    }else{
    if(command=='cls'){
        $('#body').empty();
    }else{
    if(command=='cd'){
        $('body').append('</br>'+directoryw+'</br>');
    }else{
        // CD..
    if(command=='cd..' || command == 'cd ..'){
        if(dir == 'rob'){
            directoryw = 'C:&bsol;Users';
            directory = 'C:&bsol;Users&#62;';
            dir = 'users';
        }else{
            if(dir=='users'){
                directoryw = 'C:&bsol;';
                directory = 'C:&bsol;&#62;';
                dir = 'c';
            }else{
                if(dir == 'windows'){
                directoryw = 'C:&bsol;';
                directory = 'C:&bsol;&#62;';
                dir = 'c';
                }
            }
        }
    }else{
        // CD WINDOWS
    if(command=='cd Windows'){
        if(dir == 'c'){
        directory = 'C:&bsol;Windows&#62;';
        dir = 'windows'
        }else{
            $('body').append('</br> El sistema no puede encontrar la ruta especificada.  </br>');
        }
    }else{
    if(command=='cd Users'){
        if(dir == 'c'){
            directoryw = 'C:&bsol;Users';
            directory = 'C:&bsol;Users&#62;';
            dir = 'users';
        }
    }else{
        if(command == 'cd Roberto'){
            if(dir == 'users');
            directoryw = 'C:&bsol;Users&bsol;Roberto';
            directory = 'C:&bsol;Users&bsol;Roberto&#62;';
            dir = 'rob';
        }else{
    if(command==''){
    }else{ 
        $('body').append('</br> "'+ val + '" no se reconoce como un comando interno o externo, programa o archivo por lotes ejecutable. </br>');
    }}}}}}}}
    value++

    var text = "</br>"+ directory +"<input type='text' class='typing' autocomplete='off' autofocus id='input_text" + value + "'>";        
    $("body").append(text); 
}


