const Option1 = $('option1');
const Option2 = $('option2');

let i = 0;
let a = 0;

//Le decimos a nuestra funcion onclick que cuando hagamos click en la funcion se nos cambie el display de las capas, de esta manera x capas serán invisibles y x serán visibles.

function cambiarInstall() {
    
    console.log('CambiarInstall');

    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option2_error").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";

};

//Le damos un valor a correct e incorrect

let correct = true;
let incorrect = true;

//Le decimos a nuestra funcion onclick que cuando correct sea true, incorrect sea false, y viceversa.

function language() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = true;
    }
}

//Le decimos a nuestra funcion onclick que cuando correct sea true, incorrect sea false, y viceversa.


function form() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = false;
    }
}

//Le decimos a nuestra funcion onclick que cuando correct sea true, incorrect sea false, y viceversa.


function keyboard() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = false;
    }
}

//Le decimos a nuestra funcion que cuando correct e incorrect sean true se cambie el display de las capas para pasar al próximo option.

function cambiarInstalling() {

    console.log('CambiarInstalling');

    if (correct === true & incorrect === true) {

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "none";
        document.getElementById("option3").style.display = "block";
        document.getElementById("option4").style.display = "none";
    }

    //Le decimos a nuestra funcion que cuando correct e incorrect sean false se cambie el display de las capas para que nos salga un error y poder reiniciar el nivel.

    else {

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "block";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";;
    }
};

//Le decimos a nuestra funcion que cuando hagamos click sobre la misma nos vuelva al principio del nivel y no conserve los valores que hemos dado anteriormente a correct e incorrect.

function reload_option2() {

    console.log('reload_option2');

    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option2_error").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";

    correct = true;
    incorrect = true;
}

// Creamos un Array para el progreso de Instalación y Preparación de Instalación de Windows 10.

const numero = new Array();

    numero[0] = "0%";
    numero[1] = "1%";
    numero[2] = "2%";
    numero[3] = "3%";
    numero[4] = "4%";
    numero[5] = "5%";
    numero[6] = "6%";
    numero[7] = "7%";
    numero[8] = "8%";
    numero[9] = "9%";
    numero[10] = "10%";
    numero[11] = "11%";
    numero[12] = "33%";
    numero[13] = "34%";
    numero[14] = "35%";
    numero[15] = "36%";
    numero[16] = "37%";
    numero[17] = "50%";
    numero[18] = "67%";
    numero[19] = "68%";
    numero[20] = "69%";
    numero[21] = "70%";
    numero[22] = "77%";
    numero[23] = "98%";
    numero[24] = "99%";
    numero[25] = "100%";
    numero[26] = "100%";
    numero[27] = "100%";
    numero[28] = "100%";
    numero[29] = "100%";
    numero[30] = "100%";


const text = new Array ();

    text [0] = "No desconecte ni apague su PC."
    text [1] = "Esto puede tardar unos minutos."
    text [2] = "No desconecte ni apague su PC."
    text [3] = "Esto puede tardar unos minutos."
    text [4] = "No desconecte ni apague su PC."
    text [5] = "Esto puede tardar unos minutos."
    text [6] = "No desconecte ni apague su PC."
    text [7] = "Esto puede tardar unos minutos."
    text [8] = "No desconecte ni apague su PC."
    text [9] = "Esto puede tardar unos minutos."
    text [10] = "No desconecte ni apague su PC."
    text [11] = "Esto puede tardar unos minutos."
    text [12] = "No desconecte ni apague su PC."
    text [13] = "Esto puede tardar unos minutos."
    text [14] = "No desconecte ni apague su PC."
    text [15] = "Esto puede tardar unos minutos."
    text [16] = "No desconecte ni apague su PC."
    text [17] = "Esto puede tardar unos minutos."
    text [18] = "No desconecte ni apague su PC."
    text [19] = "Esto puede tardar unos minutos."
    text [20] = "No desconecte ni apague su PC."
    text [21] = "Esto puede tardar unos minutos."
    text [22] = "No desconecte ni apague su PC."
    text [23] = "Esto puede tardar unos minutos."
    text [24] = "No desconecte ni apague su PC."
    text [25] = "Esto puede tardar unos minutos."
    text [26] = "No desconecte ni apague su PC."
    text [27] = "Esto puede tardar unos minutos."
    text [28] = "No desconecte ni apague su PC."
    text [29] = "Esto puede tardar unos minutos."
    text [30] = "No desconecte ni apague su PC."


//Creamos una función y le decimos que el array numero es igual a i,.

function numero_text_progress() {

    console.log('autoProgress'); 

    numero = i;
    
    text = a;

}


//Le decimos al codigo que onload es igual a la funcion.

onload = function() {

    //Creamos un intervalo para la funcion en el que decimos que i aumentará uno cada 1000 ms, i se presentara en la capa que contiene el identificador "autoProgress".
    

    setInterval(function() {
 
        i++;
        
        a++;

        document.getElementById('autoProgress').innerHTML = numero[i];
        document.getElementById('text_change').innerHTML = text[a];

    },2000);

}




