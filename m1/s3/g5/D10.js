/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di 
qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio 
alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo 
sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

    console.log("----- ESERCIZIO A -----");
    let sum = 10 + 20;

    console.log("La somma è " + sum);



/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato 
    dinamicamente a ogni esecuzione).
*/

  console.log("----- ESERCIZIO B -----");
  let random = Math.floor(Math.random() * 21);

  console.log("Il numero causale è " + random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti 
  proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

  console.log("----- ESERCIZIO C -----");
  let me = {
              nome : 'Vincenzo',
              cognome : 'Schembri',
              age : 34 
           }

  console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("----- ESERCIZIO D -----");
delete me.age;
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato 
  "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("----- ESERCIZIO E -----");
me.skills = ['JavaScript', 'CSS'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("----- ESERCIZIO F -----");
me.skills.push ('JavaScript');
console.log(me);


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto 
  nell'oggetto "me".
*/
console.log("----- ESERCIZIO G -----");
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("----- ESERCIZIO 1 -----");
function dice(){
    return  Math.floor((Math.random()*6)+1);
}
console.log( "Numero causale da 1 a 6  = " + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("----- ESERCIZIO 2 -----");
function whoIsBigger( n1 , n2){
    if( n1 > n2)
    {
      return n1;
    }else{
            return n2;
         }
}
console.log("Il maggiore è " + whoIsBigger(16, 8));


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e 
  ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("----- ESERCIZIO 3 -----");
function splitMe(str){
      return str.split(' ');
}

console.log(splitMe('I love coding'));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.*/
console.log("----- ESERCIZIO 4 -----");
function deleteOne(str, b){
      if( b == true )
      {
          return str.slice(1, str.length);
      }else{
              return str.slice(0,str.length-1);
            }
      
}
console.log(deleteOne('CIAO', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e
   la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("----- ESERCIZIO 5 -----");

function onlyLetters(str) {
  return str.replace(/[0-9]/g, "");
}


console.log(onlyLetters('cia57 ui9'))
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true 
  se la stringa è un valido indirizzo email.
*/
console.log("----- ESERCIZIO  6 -----");
function isThisAnEmail(str) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(str);
}

console.log(isThisAnEmail("vktskm@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("----- ESERCIZIO  7 -----");
function whatDayIsIt() {
  const today = new Date();
  const giorno = today.getDay();
  // console.log(giorno);
  let giorni = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
  return giorni[giorno];
}

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti 
  i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("----- ESERCIZIO  8 -----");
function rollTheDices(num) {
  let sum = 0;
  let valori = [];
  for (let i = 0; i < num; i++) {
    sum += dice();
    valori.push(dice());
  }
  return { sum, valori };
}

console.log(rollTheDices(7));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna
   il numero di giorni trascorsi da tale data.
*/

console.log("----- ESERCIZIO  9 -----");
function howManyDays(data) {
  const oggi = new Date();
  const differenza = oggi.getTime() - data.getTime();
  console.log(differenza)
  const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
  return giorni;
}

console.log("Il numero di giorni della mia nascita è "+ howManyDays(new Date(1988, 9, 16)));


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è 
  il tuo compleanno, falso negli altri casi.
*/
console.log("----- ESERCIZIO  10 -----");
function isTodayMyBirthday(data) {
  const oggi = new Date();
  const cGiorno = oggi.getDate();
  console.log(cGiorno);
  const cMese = oggi.getMonth();
  console.log(cMese);
  const bGiorno = data.getDate();
  const bMese = data.getMonth();//Metto + 1 a cMese perchè conta i mese da 0
  if ( cGiorno == bGiorno && (cMese+1) == bMese) {
            return true;
  } else {
            return false;
  }
}

console.log("Oggi è il mio compleanno " + isTodayMyBirthday(new Date( 1988, 9, 14)));



// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("----- ESERCIZIO  11 -----");
function deleteProp(oggetto, prop) {
  delete oggetto[prop];
  return oggetto;
}

console.log( deleteProp({ nome: "Vincenzo", cognome: "Schembri", lingua: "Tedesco"}, "nome"));



const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("----- ESERCIZIO  12 -----");

const newestMovie = arrayM => {

  let ris = { Year: 2100 };//Creo ogggetto solamente con l'atrributo Anno
  for (let i = 0; i < arrayM.length; i++) {
    
    let cYear = Number(arrayM[i].Year);
    
    if (cYear < ris.Year) {
      ris = arrayM[i];//copio tutte le proprietà dell'oggetto
    }
  }

  return ris;
};
console.log("Il film più vecchio è ")
console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti 
  nell'array "movies" fornito.
*/
console.log("----- ESERCIZIO  13 -----");
const countMovies = (arrayM) => {
  return arrayM.length;
};

console.log("La lunghezza dell'array Movies è "+countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli 
  anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("----- ESERCIZIO  14 -----");
function onlyTheYears(arrayM) {
  let years = [];

  for( let i=0; i < arrayM.length; i++)
       years.push(Number(arrayM[i].Year)); 

  return years;
}
console.log("Array anni film " + onlyTheYears(movies));



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film 
  prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("----- ESERCIZIO  15 -----");
function onlyInLastMillennium(arrayM) {
  let years = [];

  for( let i=0; i < arrayM.length; i++){
       
    if( Number(arrayM[i].Year) <= 2000)
        years.push(Number(arrayM[i].Year)); 
  }
  return years;
}

console.log("Anni dei film fino al 2000 sono " + onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui 
  sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("----- ESERCIZIO  16 -----");
const sumAllTheYears = arrayM => {
  let ris = 0;
  for (let movie of arrayM) {
    ris += Number(movie.Year);
  }
  return ris;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro 
  e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("----- ESERCIZIO  17 -----");
function searchByTitle(str) {
  let result = [];
  for (let movie of movies) {
    if (movie.Title.includes(str)) {
      result.push(movie);
    }
  }
  return result;
}
console.log(searchByTitle("fguufdrvrs"));//Prova titolo sbagliato mi restituisce arrayVuoto
console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e 
  ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la 
  stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti 
  i rimanenti.
*/
console.log("----- ESERCIZIO  18 -----");
function searchAndDivide(strC) {
  let ris = { match: [], unmatch: [] };
  for (let movie of movies) {
    if (movie.Title.includes(strC)) {
             ris.match.push(movie);
    } else {
             ris.unmatch.push(movie);
    }
  }
  return ris;
}

console.log(searchAndDivide("Avengers"));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come
  parametro e ritorna l'array "movies" fornito privo dell'elemento nella 
  posizione ricevuta come parametro.
*/
console.log("----- ESERCIZIO  19 -----");
function removeIndex(indice) {
  let ris = [];
  //codice in più controllo indice
  if( indice >= 0 &&  indice < movies.length )
  {
        console.log("L'indice immesso appartiene all'array");
  }else{
              console.log("L'indice immesso è sbagliato");
       }

  for (let i = 0; i < movies.length; i++) {
    if (i !== indice) {
      ris.push(movies[i]);
    }
  }
  return ris;
}

console.log(removeIndex(13));
console.log(removeIndex(-2));
console.log(removeIndex(14));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" 
  all'interno della pagina.
*/
console.log("----- ESERCIZIO  20 -----");
function seleziona() {
  let container = document.getElementById("container");  
}


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("----- ESERCIZIO  21 -----");
function selezionaTutto() {
  let tabella = document.querySelectorAll("td");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console
   il testo contenuto in ogni tag 
  <td> all'interno della pagina.
*/
console.log("----- ESERCIZIO  22 -----");
function stampa() {
  let tabella = document.querySelectorAll("td");
  for (let td of tabella) {
    console.log(td.textContent);
  }
}
stampa();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a 
  ogni link all'interno della pagina.
*/
console.log("----- ESERCIZIO  23 -----");
function aggiungiBackground() {
  let collegamenti = document.querySelectorAll("a");
  for (let link of collegamenti) {
    link.style.background = "red";
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla 
  lista non ordinata con id "myList".
*/
console.log("----- ESERCIZIO  24 -----");
function addList() {
  let list = document.querySelector('#myList');
  let nuovaLista = document.createElement('li');
  nuovaLista.textContent = 'Nuovo elemento';
  list.appendChild(nuovaLista);
}
addList();//Aggiungo un nuovo tag li con scritto Nuovo Elemento dentro <ul></ul>

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("----- ESERCIZIO  25 -----");
function removeElement() {
  let myList = document.querySelectorAll("#myList li");
    for (let li of myList) {
         li.remove();
  }
}
removeElement();//Elimino tutti i tag <li></li> ma mantego<ul></ul>
addList();//Aggiungo un nuovo tag li con scritto Nuovo Elemento dentro <ul></ul>


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> 
  la classe CSS "test"
*/
console.log("----- ESERCIZIO  26 -----");
function aggiungiClass() {
  let tabella = document.querySelectorAll("tr");
  for (let tr of tabella) {
    tr.classList.add("test");
  }
}

aggiungiClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo 
  albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("----- ESERCIZIO  27 -----");

function stampaAsterischi(n){
   let str="";
   for(let a=0; a<n; a++){
      str +="*";
   }
      return str;
}


function halfTree( num){
  
  let strA="";
  let tipo = typeof(num);

  if(num > 0 && tipo == "number")
  {
    for ( let i=0; i<num; i++)
    {  
       strA = stampaAsterischi(i+1);
       console.log(strA);  
    } 
  }else{
          console.log("Errore hai inserito un numero negativo o una stringa")
       }  
}

halfTree("jj");//Errore
halfTree(-3);//Errore
halfTree(10);//Errore


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("----- ESERCIZIO  28 -----");

function stampaSpazioVuoto(n){
  let str="";

  for(let a=0; a<n; a++){
      str +=" ";
     }
    return str;
}

function tree( num){
  let strV="";
  let strA="";
  let tipo = typeof(num);
  
  if(num%2 == 0 && num>0)
  {
     num++;
     console.log("Il numero è pari non posso costruire la piramide" + 
       " resetto il numero in dispari aggiungendo un asterisco");
  }
  
  let c = num;

  if(num > 0 && tipo == "number")
  {
    for ( let i=0; i<num; i += 2)
    {  
       strV = stampaSpazioVuoto((c/2));
       strA = stampaAsterischi(i+1);
       console.log(strV+strA);  
       c -= 2;
    } 
  }else{
          console.log("Errore hai inserito un numero negativo o una stringa")
       }  
}

tree("gf")//Errore
tree(-7)//Errore
tree(6)//aggiunge un asterisco
tree(9);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro 
  e ritorna true se il numero fornito è un numero primo.
*/
console.log("----- ESERCIZIO  29 -----");

function isItPrime(num){
  
  let tipo = typeof(num);
  
  if(num > 0 && tipo == "number")
  {
       let divisore = 0;
       for(let i=2; i<num; i++)
       {   
           if( num % i == 0 )
           divisore++;  
       }
      if (divisore == 0)
      {
        console.log("Il numero è primo " + num) 
        return true;
      } else{
               console.log("Il numero non è primo " + num) 
               return false;  
             }
   }else{
         console.log("Errore hai inserito un numero negativo o una stringa");
         return false;
        }  
}
console.log(isItPrime(-4));//Errore
console.log(isItPrime("gh"));//Errore
console.log(isItPrime(17));
console.log(isItPrime(33));
