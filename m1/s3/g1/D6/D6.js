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
 Il metodo charAt() di un'istanza String restituisce una nuova stringa costituita dalla 
 singola unità di codice UTF-16 situata all'offset specificato nella stringa.
 Syntax charAt(index)
 Il metodo toUpperCase() restituisce il valore della stringa chiamante convertito in maiuscolo 
 (il valore verrà convertito in una stringa se non lo è).
 Il metodo slice() restituisce una copia superficiale di una porzione di un array in un nuovo 
 oggetto array selezionato dall'inizio alla fine (fine non inclusa) dove inizio e fine 
 rappresentano l'indice degli elementi in quell'array. L'array originale non verrà modificato.

*/
console.log("----- Esercizio 08 -----");
{
    const upperFirstPhrase = function (str) {
        let words = str.split(' ')//divide la frase
        console.log("La frase divisa è " + words);
        let finalString = []
        
        for (let i = 0; i < words.length; i++) {
          let firstChar = words[i].charAt(0);//prende il primo carattere della parola
          console.log("La prima lettera della parola è " + firstChar);
          let uppercaseChar = firstChar.toUpperCase();//converte in maiuscolo la prima lettera
          console.log("La prima lettera della parola in Maiuscolo " + uppercaseChar);
          let cutString = words[i].slice(1);//taglio la parola eliminado la prima lettera
          console.log("Il resto della parola è " + cutString);
          let finalWord = uppercaseChar + cutString;//unisco la nuova stringa
          console.log("La nuova parola è " + finalWord);
          finalString.push(finalWord)
        }
        
        console.log("Array finale è "+finalString);
        let fraseFinale = finalString.join(' ');//join mi unisce array finalString in una frase
        console.log("La nuova frase finale è "+fraseFinale);
      }
      
      upperFirstPhrase('hello world today')
}


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.*/
 console.log("----- Esercizio 09 -----");
{
  
    function cutString(stringa){
        stringa = stringa.slice(1, stringa.length - 1)
        return stringa
    }
    console.log(cutString("Ciao Mondo"));

}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.*/
console.log("----- Esercizio 10 -----");
/*Il metodo statico Math.floor() arrotonda sempre per difetto e restituisce 
il numero intero più grande minore o uguale a un dato numero.
Syntax    Math.floor(x) 
Il metodo statico Math.random() restituisce un numero pseudo-casuale a virgola 
mobile maggiore o uguale a 0 e minore di 1, con una distribuzione approssimativamente 
uniforme su tale intervallo, che è quindi possibile ridimensionare all'intervallo 
desiderato. L'implementazione seleziona il seme iniziale per l'algoritmo di generazione 
di numeri casuali; non può essere scelto o resettato dall'utente.  
 Syntax    Math.random()           */
{
  const giveMeRandom = function (n) {
    const arr = []
      for (let i = 0; i < n; i++) {
         arr.push(Math.floor( Math.random() * 10))
      }
    return arr
  }
  console.log(giveMeRandom(10))
}

/*L'istruzione for...in itera su tutte le proprietà stringa enumerabili di un 
oggetto (ignorando le proprietà codificate dai simboli), incluse le proprietà 
enumerabili ereditate.
for (variable in object)
  statement                       */ 
console.log("----- For...in -----");
const object = { a: 1, b: 2, c: 3 , gusto : "Diavola" };
console.log("L'oggetto originale è " + object);
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

/*L'istruzione for...of esegue un ciclo che opera su una sequenza di valori 
provenienti da un oggetto iterabile. Gli oggetti iterabili includono istanze 
di built-in come Array, String, TypedArray, Map, Set, NodeList (e altre 
raccolte DOM), nonché l'oggetto arguments, i generatori prodotti dalle funzioni 
del generatore e gli iterabili definiti dall'utente. 
Syntax
for (variable of iterable)
  statement                  */
console.log("----- For...of -----");
const array1 = ['a', 'b', 'c' , 3 , 4];
console.log("L'array originale è " + array1);

for (const element of array1) {
  console.log(element);
}
/* Il metodo forEach() esegue una funzione fornita una volta per ogni elemento 
Syntax
forEach(callbackFn)
forEach(callbackFn, thisArg)dell'array. */
console.log("----- ForEach -----");
const array2 = ['a', 'b', 'c', 6 , 9];

array2.forEach(element => console.log(element));
