const Option1 = $('option1');
const Option2 = $('option2');
var value = 0;
numeros = new Array();

numeros[0] = "0%"
numeros[1] = "1%";
numeros[2] = "2%";
numeros[3] = "3%";
numeros[4] = "4%";
numeros[5] = "5%";
numeros[6] = "6%";
numeros[7] = "7%";
numeros[8] = "8%";
numeros[9] = "9%";
numeros[10] = "10%";
numeros[11] = "11%";
numeros[12] = "33%";
numeros[13] = "34%";
numeros[14] = "35%";
numeros[15] = "36%";
numeros[16] = "37%";
numeros[17] = "50%";
numeros[18] = "67%";
numeros[19] = "68%";
numeros[20] = "69%";
numeros[21] = "70%";
numeros[22] = "77%";
numeros[23] = "98%";
numeros[24] = "99%";
numeros[25] = "100%";
window.onload = numero_progress();

let i = 0;

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

        incorrect = true;
    }
}

//Le decimos a nuestra funcion onclick que cuando correct sea true, incorrect sea false, y viceversa.


function keyboard() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = true;
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
    numero[31] = "100%";
    numero[32] = "100%";
    numero[33] = "100%";
    numero[34] = "100%";
    numero[35] = "100%";
    numero[36] = "100%";
    numero[37] = "100%";
    numero[38] = "100%";
    numero[39] = "100%";
    numero[40] = "100%";


//Creamos una función y le decimos que el array numero es igual a i.

function numero_progress() {

    console.log('autoProgress');

    numero = i;
}

//Le decimos al codigo que onload es igual a la funcion.

onload = function() {

    //Creamos un intervalo para la funcion en el que decimos que i aumentará uno cada 1000 ms, i se presentara en la capa que contiene el identificador "autoProgress".

    setInterval(function() {
 
        i++;

        document.getElementById('autoProgress').innerHTML = numero[i];

    },1000);
}


