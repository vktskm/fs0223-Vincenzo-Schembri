
function accendi(){
    var lampadina = document.getElementById('bulb');
    lampadina.style.backgroundColor = 'yellow';
}

function spegni(){
    var lampadina = document.getElementById('bulb');
    lampadina.style.backgroundColor = 'grey';
}

//funzione alternativa che fa sia on che off
function onOff(){
    var lampadina = document.getElementById('bulb');
    var colore = lampadina.style.backgroundColor;

    if(colore == ''){
        lampadina.style.backgroundColor = 'yellow'
    }else{
        lampadina.style.backgroundColor = ''
    }
}