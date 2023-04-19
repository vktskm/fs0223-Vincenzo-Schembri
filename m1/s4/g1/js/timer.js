let timer = document.getElementById('timer');

function startTimer(duration, ) {
    var timer = duration, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer);
        
        document.getElementById('timer').innerHTML =  seconds;

        if (--timer < 0) {
            timer = duration;
        }
    },1000);
}
window.onload = function () {
    var timer = 15//da cambiare..collegare una functione 
        display = document.querySelector('#timer');
    startTimer(timer);
};




