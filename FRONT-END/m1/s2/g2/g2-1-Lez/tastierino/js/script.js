
function addNumber(n){
    
    let display = document.getElementById('display');
    console.log(display.value)
    display.value += n;
    console.log(display.value)

}

function total(){
    let display = document.getElementById("display");
    /* Il metodo replaceAll('x','*') restituisce una nuova stringa con tutte le corrispondenze 
    di un modello sostituite da una sostituzione. Il modello può essere una stringa o una RegExp 
    e la sostituzione può essere una stringa o una funzione da chiamare per ogni corrispondenza. 
    La stringa originale viene lasciata invariata.
    La funzione eval() valuta il codice JavaScript rappresentato come una stringa e restituisce 
    il suo valore di completamento. La fonte viene analizzata come uno script.
    */

    let result = eval(display.value.replaceAll('x','*'));
    console.log(display.value)
    console.log(result)
    display.value = result;
}