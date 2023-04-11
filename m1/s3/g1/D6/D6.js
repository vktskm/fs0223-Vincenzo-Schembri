/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e 
 calcola l'area del rettangolo associato..
*/
{
   
   function area(l1,l2){
         return l1 * l2;
   }

   let risultato = area(4,8);
   console.log(risultato);

}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due
parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/
{
    function crazySum(a,b){
        if(a===b)
        {
            return (a+a)*3;
        }else{
                 return a+b;
              }

    }
}

console.log(crazySum(10,10));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un 
 numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre 
 qualora il numero fornito sia maggiore di 19.
*/

{
    function crazyDiff(a){
        if(a>19)
        {
            return  Math.abs((a-19)*3);
        }else{
                 return Math.abs(a-19);
              }

    }
}

console.log(crazyDiff(20));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n 
 come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

{
    {
        function boundary(n){
            if(n >= 20 && n <= 100)
            {
                return true;
            }else if (n=== 400){
                     return true;
                  }else{
                    return false;
                  }
    
        }
    }
    
    console.log(boundary(200));
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

{
      function epify(str)
      {
        if(str.startsWith(`Epicode`))
        {
            return str;
        }else{
                 return "Epicode"+ str;
             }
    }

}

console.log(epify("ghujj Epicode"));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

{
function check3and7(n){
    if(n>0)
    {
        if( ( n%3 == 0) || (n%7 ==0))
        {
           return true;
        }else{
                return false;
                   }          
    }               
    else{
            console.log("Errore");
            return false;
         }

    }

console.log(check3and7(-9))
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
{

    function reverseString(stringa) {
        let agnirts = ""
        for (let i = stringa.length - 1; i >= 0; i--) {
            agnirts += stringa[i]
        }
        return agnirts
    }
}

console.log(reverseString("EPICODE"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata 
 da diverse parole.La funzione deve rendere maiuscola la prima lettera di ogni parola 
 contenuta nella stringa.
*/

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

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
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

    function cutString(stringa) {
        stringa = stringa.slice(1, stringa.length - 1)
        return stringa
    }

}
cutString("ciao mondo");

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
