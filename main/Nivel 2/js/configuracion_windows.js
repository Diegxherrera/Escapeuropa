let i = 0;
let a = 0;
let i2 = 0;
let a2 = 0;

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

    progress();
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

    text [0] = "No desconecte ni apague su PC";
    text [1] = "Esto puede tardar unos minutos";
    text [2] = "No desconecte ni apague su PC";
    text [3] = "Esto puede tardar unos minutos";
    text [4] = "No desconecte ni apague su PC";
    text [5] = "Esto puede tardar unos minutos";
    text [6] = "No desconecte ni apague su PC";
    text [7] = "Esto puede tardar unos minutos";
    text [8] = "No desconecte ni apague su PC";
    text [9] = "Esto puede tardar unos minutos";;
    text [10] = "Espere unos segundos";
    text [11] = "Espere unos segundos";
    text [12] = "Espere unos segundos";
    text [13] = "Espere unos segundos";
    text [14] = "Espere unos segundos";
    text [15] = "Espere unos segundos";
 
//Creamos una función y le decimos que el array numero es igual a "i" y el array text es igual a "a".

function numero_text_progress() {

    console.log('autoProgress'); 

    numero = i;
    
    text = a;

    numero = i2;
    
    text = a2;

}


//Le decimos al codigo que onload es igual a la funcion numero_text_progress().

function progress() {

    //Creamos un intervalo para la funcion en el que decimos que "i" aumentará uno cada 200 ms, i se representara en las capas que contienen el identificador "autoProgress" y "autoProgress2".

    const numero_interval = setInterval(function() {

        i++;
        
        console.log(i)

        document.getElementById('autoProgress').innerHTML = numero[i];

        //Le decimos a "i" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (i == numero.length-1) {
            
            console.log("funciono");

            clearInterval(numero_interval);
        } 
    },200);

    //Creamos un intervalo para la funcion en el que decimos que "a" aumentará uno cada 2000 ms, i se representara en las capas que contienen el identificador "text_change" y "text_change2".

    const text_interval = setInterval(function() {

        a++;

        console.log(a)

        document.getElementById('text_change').innerHTML = text[a];

        //Le decimos a "a" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (a == text.length-1) {

            console.log("funciono");

            clearInterval(text_interval);

            document.getElementById('option3').style.display = "none";
            document.getElementById('option4').style.display = "block";

            progress2();
        } 
    },2000);


}

const numero2 = new Array();

    numero2[0] = "0%";
    numero2[1] = "1%";
    numero2[2] = "2%";
    numero2[3] = "3%";
    numero2[4] = "4%";
    numero2[5] = "5%";
    numero2[6] = "6%";
    numero2[7] = "7%";
    numero2[8] = "8%";
    numero2[9] = "9%";
    numero2[10] = "10%";
    numero2[11] = "11%";
    numero2[12] = "12%";
    numero2[13] = "13%";
    numero2[14] = "14%";
    numero2[15] = "15%";
    numero2[16] = "16%";
    numero2[17] = "17%";
    numero2[18] = "18%";
    numero2[19] = "19%";
    numero2[20] = "20%";
    numero2[21] = "21%";
    numero2[22] = "22%";
    numero2[23] = "23%";
    numero2[24] = "24%";
    numero2[25] = "25%";
    numero2[26] = "26%";
    numero2[27] = "27%";
    numero2[28] = "28%";
    numero2[29] = "29%";
    numero2[30] = "30%";
    numero2[31] = "31%";
    numero2[32] = "32%";
    numero2[33] = "33%";
    numero2[34] = "34%";
    numero2[35] = "35%";
    numero2[36] = "36%";
    numero2[37] = "37%";
    numero2[38] = "38%";
    numero2[39] = "39%";
    numero2[40] = "40%";
    numero2[41] = "41%";
    numero2[42] = "42%";
    numero2[43] = "43%";
    numero2[44] = "44%";
    numero2[45] = "45%";
    numero2[46] = "46%";
    numero2[47] = "47%";
    numero2[48] = "48%";
    numero2[49] = "49%";
    numero2[50] = "50%";
    numero2[51] = "51%";
    numero2[52] = "52%";
    numero2[53] = "53%";
    numero2[54] = "54%";
    numero2[55] = "55%";
    numero2[56] = "56%";
    numero2[57] = "57%";
    numero2[58] = "58%";
    numero2[59] = "59%";
    numero2[60] = "60%";
    numero2[61] = "61%";
    numero2[62] = "62%";
    numero2[63] = "63%";
    numero2[64] = "64%";
    numero2[65] = "65%";
    numero2[66] = "66%";
    numero2[67] = "67%";
    numero2[68] = "68%";
    numero2[69] = "69%";
    numero2[70] = "70%";
    numero2[71] = "71%";
    numero2[72] = "72%";
    numero2[73] = "73%";
    numero2[74] = "74%";
    numero2[75] = "75%";
    numero2[76] = "75%";
    numero2[77] = "77%";
    numero2[78] = "78%";
    numero2[79] = "79%";
    numero2[80] = "80%";
    numero2[81] = "81%";
    numero2[82] = "82%";
    numero2[83] = "83%";
    numero2[84] = "84%";
    numero2[85] = "85%";
    numero2[86] = "86%";
    numero2[87] = "87%";
    numero2[88] = "88%";
    numero2[89] = "89%";
    numero2[90] = "90%";
    numero2[91] = "91%";
    numero2[92] = "92%";
    numero2[93] = "93%";
    numero2[94] = "94%";
    numero2[95] = "95%";
    numero2[96] = "96%";
    numero2[97] = "97%";
    numero2[98] = "98%";
    numero2[99] = "99%";
    numero2[100] = "100%";
    numero2[101] = "100%";
    numero2[102] = "100%";
    numero2[103] = "100%";
    numero2[104] = "100%";
    numero2[105] = "100%";
    numero2[106] = "100%";
    numero2[107] = "100%";
    numero2[108] = "100%";
    numero2[109] = "100%";
    numero2[110] = "100%";

const text2 = new Array ();

    text2[0] = "No desconecte ni apague su PC";
    text2[1] = "Esto puede tardar unos minutos";
    text2[2] = "No desconecte ni apague su PC";
    text2[3] = "Esto puede tardar unos minutos";
    text2[4] = "No desconecte ni apague su PC";
    text2[5] = "Esto puede tardar unos minutos";
    text2[6] = "No desconecte ni apague su PC";
    text2[7] = "Esto puede tardar unos minutos";
    text2[8] = "No desconecte ni apague su PC";
    text2[9] = "Esto puede tardar unos minutos";;
    text2[10] = "Espere unos segundos";
    text2[11] = "Espere unos segundos";
    text2[12] = "Espere unos segundos";
    text2[13] = "Espere unos segundos";
    text2[14] = "Espere unos segundos";
    text2[15] = "Espere unos segundos";

function progress2() {

    //Creamos un intervalo para la funcion en el que decimos que "i" aumentará uno cada 200 ms, i se representara en las capas que contienen el identificador "autoProgress" y "autoProgress2".

    const numero_interval2 = setInterval(function() {

        i2++;
        
        console.log(i2)

        document.getElementById('autoProgress2').innerHTML = numero2[i2];

        //Le decimos a "i" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (i2 == numero.length-1) {
            
            console.log("funciono");

            clearInterval(numero_interval2);
        } 
    },200);

    //Creamos un intervalo para la funcion en el que decimos que "a" aumentará uno cada 2000 ms, i se representara en las capas que contienen el identificador "text_change" y "text_change2".

    const text_interval2 = setInterval(function() {

        a2++;

        console.log(a2)

        document.getElementById('text_change2').innerHTML = text2[a2];

        //Le decimos a "a" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (a2 == text.length-1) {

            console.log("funciono");

            clearInterval(text_interval2);
        } 
    },2000);


}

