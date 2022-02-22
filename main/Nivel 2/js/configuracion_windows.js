const Option1 = $('option1');
const Option2 = $('option2');

function cambiarInstall() {
    
    console.log('CambiarInstall');

    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option2_error").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";

};

let correct = true;
let incorrect = true;

function language() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = true;
    }
}

function form() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = true;
    }
}

function keyboard() {

    if (correct === true) {

        incorrect = false;
    }

    else {

        incorrect = true;
    }
}

function cambiarInstalling() {

    console.log('CambiarInstalling');

    if (correct === true & incorrect === true) {

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "none";
        document.getElementById("option3").style.display = "block";
        document.getElementById("option4").style.display = "none";
    }

    else {

        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option2_error").style.display = "block";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";;
    }
};

function reload_option2() {

    setInterval(function() {

    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option2_error").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";

    },5000);
}

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

let i = 0;

function numero_progress() {

    console.log('autoProgress');

    numero = i;
}

onload = function() {
  
    setInterval(function() {

        i++;

        document.getElementById('autoProgress').innerHTML = numero[i];

    },1000);
}


