function accendiLuceRossa(){
    document.getElementById('red').classList.add('on');
    document.getElementById('green').classList.remove('on');
    document.getElementById('yellow').classList.remove('on');
}

function accendiLuceGialla(){
    document.getElementById('red').classList.remove('on');
    document.getElementById('green').classList.remove('on');
    document.getElementById('yellow').classList.add('on');
}

function accendiLuceVerde(){
    document.getElementById('red').classList.remove('on');
    document.getElementById('green').classList.add('on');
    document.getElementById('yellow').classList.remove('on');
}

setInterval(accendiLuceRossa, 1000)