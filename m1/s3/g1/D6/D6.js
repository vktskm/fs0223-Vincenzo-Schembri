/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa 
che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema 
operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e 
 calcola l'area del rettangolo associato..  */
console.log("----- Esercizio 01 -----");
{ 
   function area(l1,l2){
         return l1 * l2;
   }
   
   let risultato = area(8,7);
   console.log("Area1 è uguale a " + risultato);
   risultato = area("4","3");//mi converte le stringe in number
   //risultato = area("df","7");NaN
   console.log("Area2 è uguale a " + risultato);
}

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due
parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.*/
console.log("----- Esercizio 02 -----");
{
    function crazySum(a,b){
        if(a===b)
        {
            return (a+b)*3;
        }else{
                 return a+b;
              }
    }//end function
/*console.log(crazySum("10","10"));prima concatena 1010 in stringa, la converte 
in number e la molriplica per 3 , il risultato finale è 3030 
console.log(crazySum("19","10"));//ritorna una concatazione stringhe 1910*/
console.log("Il risultato1 è " + crazySum(10,10));
console.log("Il risultato2 è " + crazySum(12,10));
}

/* ESERCIZIO 3 
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un 
 numero fornito come parametro e 19. Deve inoltre tornare la differenza assoluta 
 moltiplicata per tre qualora il numero fornito sia maggiore di 19.*/
console.log("----- Esercizio 03 -----");
{
    function crazyDiff(num){
        if(num > 19)
        {
            return  Math.abs( ( num - 19 ) * 3);
        }else{
                 return Math.abs( num - 19 );
              }

    }
console.log("Il risultato1 è "+crazyDiff(20));
console.log("Il risultato2 è "+crazyDiff(8));
}
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n 
 come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) 
 oppure se n è uguale a 400.*/
 console.log("----- Esercizio 04 -----");
{
    function boundary(n){
        if ((n > 20 && n <= 100) || n === 400) {
            return true
          } else {
            return false
          }

    }
    
console.log("Il risultato1 è " + boundary(200));
console.log("Il risultato2 è " + boundary(400));
console.log("Il risultato3 è " + boundary(100));
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("----- Esercizio 05 -----");
{
      function epify(str)
      { /*Il metodo startsWith() determina se una stringa inizia con i caratteri 
         di una stringa specificata,restituendo vero o falso a seconda dei casi.
         Syntax      startsWith(searchString)
         startsWith(searchString, position)*/
        if(str.startsWith("EPICODE"))
        {
            return str;
        }else{
                 return "EPICODE"+ str;
             }
      }

    console.log("Il risultato1 è "+ epify("Epicode"));
    console.log("Il risultato2 è "+ epify("EPICODERS"));
    console.log("Il risultato3 è "+ epify("Hello"));
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo 
 come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)*/
 console.log("----- Esercizio 06 -----");
{
function check3and7(n){
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
        return true
      } else {
        return false
      }
    }
console.log("Il risultato1 è " + check3and7(-9));
console.log("Il risultato2 è " + check3and7(5));
console.log("Il risultato3 è " + check3and7(6));
console.log("Il risultato4 è " + check3and7(14));
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")*/
 console.log("----- Esercizio 07 -----");
 /*Il metodo split() prende un modello e divide una stringa in un elenco ordinato 
 di sottostringhe cercando il modello, inserisce queste sottostringhe in un array 
 e restituisce l'array. Syntax  split(separator) ,split(separator, limit)
 Il metodo reverse() inverte un array in posizione e restituisce il riferimento 
 allo stesso array, il primo elemento dell'array ora diventa l'ultimo e l'ultimo 
 elemento dell'array diventa il primo. In altre parole, l'ordine degli elementi 
 nell'array sarà rivolto verso la direzione opposta a quella precedentemente 
 indicata.  Syntax reverse() 
 Il metodo join() crea e restituisce una nuova stringa concatenando tutti gli 
 elementi in un array (o un oggetto simile ad un array), separati da virgole o 
 da una stringa di separazione specificata. Se l'array ha un solo elemento, 
 quell'elemento verrà restituito senza utilizzare il separatore.
 Syntax  join() , join(separator) */

 {
        const reverseString = function (str) {
        
        let splitString = str.split('')//dividi la stringa in lettere
        console.log("La stringa divisa in caratteri è " + splitString);
        let reverseString = splitString.reverse();//inverte la stringa
        console.log("La stringa invertita è " + reverseString);
        let finalString = reverseString.join('');//Unisce i caratteri senza spazio
        return finalString;
        }
      
      console.log("La frase invertita è "+reverseString('EPICODE FULL STACK'))
 }

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata 
 da diverse parole.La funzione deve rendere maiuscola la prima lettera di ogni parola 
 contenuta nella stringa.
*/
console.log("----- Esercizio 08 -----");
{
      function upperFirst(str)
      {
        let parole = str.split(" ");
        console.log(parole);

        for(i=0 ; i < parole.length; i++)
        {
            parole[i]=parole[i].charAt(0).toUpperCase()+parole[i].slice(1);
        }

        console.log(parole);
      }


upperFirst("ciao mondo");
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.*/
 console.log("----- Esercizio 09 -----");
{
   /* function cutString( str){
        
        let arrayNuovo=[];
        for( i=1 ; i < (str.length-1) ; i++)
        {
           arrayNuovo.push(str[i]);
        }

        console.log(arrayNuovo);

        
        for( i=0 ; i < arrayNuovo.length ; i++)
        {
           frase += arrayNuovo[i];
        }
    }*/

    function cutString(stringa){
        stringa = stringa.slice(1, stringa.length - 1)
        return stringa
    }

}
console.log(cutString("ciao mondo"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("----- Esercizio 10 -----");
/* SCRIVI QUI LA TUA RISPOSTA */
{
    function giveMeRandom (num){
    

    }

console.log(giveMeRandom(8));

}
