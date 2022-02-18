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


let autoProgress = true;

if (autoProgress = true) {

    autoProgress = false;
    
    
}

