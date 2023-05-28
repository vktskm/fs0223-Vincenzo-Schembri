
function addNumber(n){
    
    let display = document.getElementById('display');

    
    display.value += n;

}

function total(){
    let display = document.getElementById("display");
    let result = eval(display.value.replaceAll('x','*'));
    display.value = result;
}