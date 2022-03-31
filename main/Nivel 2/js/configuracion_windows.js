let i = 0;
let a = 0;
let z = 0;
let x = 0;
let m = 0;

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
        document.getElementById("option4").style.display = "none";
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
 
//Creamos una función y le decimos que el array numero es igual a "i" y el array text es igual a "a".

function numero_text_progress() {

    console.log('autoProgress'); 

    numero = i;
    
    text = a;

}


//Le decimos al codigo que onload es igual a la funcion numero_text_progress().

function progress() {

    //Creamos un intervalo para la funcion en el que decimos que "i" aumentará uno cada 200 ms, i se representara en las capas que contienen el identificador "autoProgress" y "autoProgress2".

    const numero_interval = setInterval(function numero_text_progress() {

        i++;
        
        console.log(i)

        document.getElementById('autoProgress').innerHTML = numero[i];

        //Le decimos a "i" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (i == numero.length-1) {
            
            console.log("funciono");

            clearInterval(numero_interval);
        } 
    },600);

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

            progress2()

        } 
    },2000);

}


const numero2 = new Array();

    numero2[0] = "34%";
    numero2[1] = "35%";
    numero2[2] = "36%";
    numero2[3] = "37%";
    numero2[4] = "38%";
    numero2[5] = "39%";
    numero2[6] = "40%";
    numero2[7] = "41%";
    numero2[8] = "42%";
    numero2[9] = "43%";
    numero2[10] = "44%";
    numero2[11] = "45%";
    numero2[12] = "46%";
    numero2[13] = "47%";
    numero2[14] = "48%";
    numero2[15] = "49%";
    numero2[16] = "50%";
    numero2[17] = "51%";
    numero2[18] = "52%";
    numero2[19] = "53%";
    numero2[20] = "54%";
    numero2[21] = "55%";
    numero2[22] = "56%";
    numero2[23] = "57%";
    numero2[24] = "58%";
    numero2[25] = "59%";
    numero2[26] = "60%";
    numero2[27] = "61%";
    numero2[28] = "62%";
    numero2[29] = "63%";
    numero2[30] = "64%";
    numero2[31] = "65%";
    numero2[32] = "66%";
    numero2[33] = "67%";
    numero2[34] = "68%";
    numero2[35] = "69%";
    numero2[36] = "70%";
    numero2[37] = "71%";
    numero2[38] = "72%";
    numero2[39] = "73%";
    numero2[40] = "74%";
    numero2[41] = "75%";
    numero2[42] = "76%";
    numero2[43] = "77%";
    numero2[44] = "78%";
    numero2[45] = "79%";
    numero2[46] = "80%";
    numero2[47] = "81%";
    numero2[48] = "82%";
    numero2[49] = "83%";
    numero2[50] = "84%";
    numero2[51] = "85%";
    numero2[52] = "86%";
    numero2[53] = "87%";
    numero2[54] = "88%";
    numero2[55] = "89%";
    numero2[56] = "90%";
    numero2[57] = "91%";
    numero2[58] = "92%";
    numero2[59] = "93%";
    numero2[60] = "94%";
    numero2[61] = "95%";
    numero2[62] = "96%";
    numero2[63] = "97%";
    numero2[64] = "98%";
    numero2[65] = "99%";
    numero2[66] = "100%";

const text2 = new Array ();

    text2 [0] = "No desconecte ni apague su PC";
    text2 [1] = "Esto puede tardar unos minutos";
    text2 [2] = "No desconecte ni apague su PC";
    text2 [3] = "Esto puede tardar unos minutos";
    text2 [4] = "No desconecte ni apague su PC";
    text2 [5] = "Esto puede tardar unos minutos";
    text2 [6] = "No desconecte ni apague su PC";
    text2 [7] = "Esto puede tardar unos minutos";
    text2 [8] = "No desconecte ni apague su PC";
    text2 [9] = "Esto puede tardar unos minutos";;
    text2 [10] = "Espere unos segundos";
    text2 [11] = "Espere unos segundos";
    text2 [12] = "Espere unos segundos";
 
//Creamos una función y le decimos que el array numero2 es igual a "i2" y el array text2 es igual a "a2".

function numero_text_progress2() {

    console.log('autoProgress2'); 

    numero2 = z;
    
    text2 = x;

}

//Le decimos al codigo que onload es igual a la funcion numero_text_progress().

function progress2() {

    //Creamos un intervalo para la funcion en el que decimos que "z" aumentará uno cada 305 ms, z se representara en las capas que contienen el identificador "autoProgress" y "autoProgress2".

    const numero_interval2 = setInterval(function numero_text_progress2() {

        z++;
        
        console.log(z)

        document.getElementById('autoProgress2').innerHTML = numero2[z];

        //Le decimos a "z" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (z == numero2.length-1) {
            
            console.log("funciono2");

            clearInterval(numero_interval2);
        } 
    },305);

    //Creamos un intervalo para la funcion en el que decimos que "x" aumentará uno cada 2000 ms, x se representara en las capas que contienen el identificador "text_change" y "text_change2".

    const text_interval2 = setInterval(function numero_text_progress2() {

        x++;

        console.log(x)

        document.getElementById('text_change2').innerHTML = text2[x];

        //Le decimos a "a" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (x == text2.length-1) {

            console.log("funciono2");

            clearInterval(text_interval2);

            document.getElementById('option4').style.display = "none";
            document.getElementById('option5').style.display = "block";

            progress3()

        } 
    },2000);

}

const text3 = new Array ();

    text3 [0] = "No desconecte ni apague su PC";
    text3 [1] = "Estamos realizando algunos preparativos";
    text3 [2] = "No desconecte ni apague su PC";
    text3 [3] = "Estamos realizando algunos preparativos";
    text3 [4] = "No desconecte ni apague su PC";
    text3 [5] = "Estamos realizando algunos preparativos";
    text3 [6] = "Su equipo se va a reiniciar, espere unos segundos";
    text3 [7] = "Su equipo se va a reiniciar, espere unos segundos";
    text3 [8] = "Su equipo se va a reiniciar, espere unos segundos";

function numero_text_progress3() {

    console.log('autoProgress3'); 
          
    text2 = m;
    
}

function progress3() {

    const text_interval3 = setInterval(function numero_text_progress3() {

        m++;

        console.log(m)

        document.getElementById('text_change3').innerHTML = text3[m];

        //Le decimos a "a" que cuando supere la longitud de su array correspondiente se limpie el intervalo.

        if (m == text3.length-1) {

            console.log("funciono3");

            clearInterval(text_interval3);

            document.getElementById('option5').style.display = "none";
            document.getElementById('option6').style.display = "block";

            

        } 
    },2000);

}