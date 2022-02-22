const Option1 = $('option1');
const Option2 = $('option2');

function cambiarInstall() {
    
    console.log('CambiarInstall');

    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "block";
    document.getElementById("option3").style.display = "none";

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
        document.getElementById("option3").style.display = "block";
    }

    else {
        alert('Por curioso te toca reiniciar');
    }
};

function numero_progress() {

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

    progressnum = Math.floor(Math.random()*25);

    return numeros [progressnum];

}

onload = function() {

    document.getElementById('autoProgress').innerHTML = numero_progress();

    this.setInterval(function() {
        document.getElementById('autoProgress').innerHTML = numero_progress();
    },1000);

}
