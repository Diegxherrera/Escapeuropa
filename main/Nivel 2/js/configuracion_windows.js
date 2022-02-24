let i = 0;
let a = 0;

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

        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "none";
        document.getElementById("option3").style.display = "block";
        document.getElementById("option4").style.display = "none";
    }

    //Le decimos a nuestra funcion que cuando correct e incorrect sean false se cambie el display de las capas para que nos salga un error y poder reiniciar el nivel.

    else {

        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "block";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";;
    }

    interval()
};

// Creamos dos Array para el progreso de Instalación y Preparación de Instalación de Windows 10.

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
    numero[12] = "12%";
    numero[13] = "13%";
    numero[14] = "14%";
    numero[15] = "15%";
    numero[16] = "16%";
    numero[17] = "17%";
    numero[18] = "18%";
    numero[19] = "19%";
    numero[20] = "20%";
    numero[21] = "21%";
    numero[22] = "22%";
    numero[23] = "23%";
    numero[24] = "24%";
    numero[25] = "25%";
    numero[26] = "26%";
    numero[27] = "27%";
    numero[28] = "28%";
    numero[29] = "29%";
    numero[30] = "30%";
    numero[31] = "31%";
    numero[32] = "32%";
    numero[33] = "33%";
    numero[34] = "34%";
    numero[35] = "35%";
    numero[36] = "36%";
    numero[37] = "37%";
    numero[38] = "38%";
    numero[39] = "39%";
    numero[40] = "40%";
    numero[41] = "41%";
    numero[42] = "42%";
    numero[43] = "43%";
    numero[44] = "44%";
    numero[45] = "45%";
    numero[46] = "46%";
    numero[47] = "47%";
    numero[48] = "48%";
    numero[49] = "49%";
    numero[50] = "50%";
    numero[51] = "51%";
    numero[52] = "52%";
    numero[53] = "53%";
    numero[54] = "54%";
    numero[55] = "55%";
    numero[56] = "56%";
    numero[57] = "57%";
    numero[58] = "58%";
    numero[59] = "59%";
    numero[60] = "60%";
    numero[61] = "61%";
    numero[62] = "62%";
    numero[63] = "63%";
    numero[64] = "64%";
    numero[65] = "65%";
    numero[66] = "66%";
    numero[67] = "67%";
    numero[68] = "68%";
    numero[69] = "69%";
    numero[70] = "70%";
    numero[71] = "71%";
    numero[72] = "72%";
    numero[73] = "73%";
    numero[74] = "74%";
    numero[75] = "75%";
    numero[76] = "76%";
    numero[77] = "77%";
    numero[78] = "78%";
    numero[79] = "79%";
    numero[80] = "80%";
    numero[81] = "81%";
    numero[82] = "82%";
    numero[83] = "83%";
    numero[84] = "84%";
    numero[85] = "85%";
    numero[86] = "86%";
    numero[87] = "87%";
    numero[88] = "88%";
    numero[89] = "89%";
    numero[90] = "90%";
    numero[91] = "91%";
    numero[92] = "92%";
    numero[93] = "93%";
    numero[94] = "94%";
    numero[95] = "95%";
    numero[96] = "96%";
    numero[97] = "97%";
    numero[98] = "98%";
    numero[99] = "99%";
    numero[100] = "100%";
    numero[101] = "100%";
    numero[102] = "100%";
    numero[103] = "100%";
    numero[104] = "100%";
    numero[105] = "100%";
    numero[106] = "100%";
    numero[107] = "100%";
    numero[108] = "100%";
    numero[109] = "100%";
    numero[110] = "100%";


const text = new Array ();

    text [0] = "No desconecte ni apague su PC"
    text [1] = "Esto puede tardar unos minutos"
    text [2] = "No desconecte ni apague su PC"
    text [3] = "Esto puede tardar unos minutos"
    text [4] = "No desconecte ni apague su PC"
    text [5] = "Esto puede tardar unos minutos"
    text [6] = "No desconecte ni apague su PC"
    text [7] = "Esto puede tardar unos minutos"
    text [8] = "No desconecte ni apague su PC"
    text [9] = "Esto puede tardar unos minutos"
    text [10] = "No desconecte ni apague su PC"
    text [11] = "Esto puede tardar unos minutos"
    text [12] = "No desconecte ni apague su PC"
 
const numero2 = numero;
const text2 = text;


//Creamos una función y le decimos que el array numero es igual a "i" y el array text es igual a "a".

function numero_text_progress() {

    console.log('autoProgress'); 

    numero = i;
    
    text = a;

}


//Le decimos al codigo que onload es igual a la funcion numero_text_progress().

function interval() {

    //Creamos un intervalo para la funcion en el que decimos que "i" aumentará uno cada 200 ms, i se representara en las capas que contienen el identificador "autoProgress" y "autoProgress2".

    const numero_interval = setInterval(function() {

        i++;
        
        console.log(i)

        document.getElementById('autoProgress').innerHTML = numero[i];

        document.getElementById('autoProgress').innerHTML = numero[i]; 
    },200);

    //Le decimos a "i" que cuando supere la longitud de su array correspondiente se limpie el intervalo.


        //Le decimos a "i" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (i == numero.length-1) {
            
            console.log("funciono");

            clearInterval(numero_interval);
        } 

    //Creamos un intervalo para la funcion en el que decimos que "a" aumentará uno cada 2000 ms, i se representara en las capas que contienen el identificador "text_change" y "text_change2".

    const text_interval = setInterval(function() {

        a++;

        console.log(a)

        document.getElementById('text_change').innerHTML = text[a];

        if (a == text.length-1) {

            console.log("funciono");

            clearInterval(text_interval);
        } 
    },2000);

    //Le decimos a "a" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

}

