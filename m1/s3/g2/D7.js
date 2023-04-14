/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della prima e gli ultimi 3 della seconda. 
  Converti la stringa risultante in maiuscolo e mostrala con un console.log(). */
console.log("----- ESERCIZIO 01 -----");

{
  function unisciStringa(str1 , str2)
  {
    console.log("La prima stringa1 è " + str1 + " la seconda stringa2 è " + str2 );
    str1 = str1.slice( 0 , 2 )
    str2 = str2.slice( str2.length - 3 ) 
    let frase = str1+str2;
    frase = frase.toUpperCase()
    return frase;
  }
  console.log(unisciStringa("ciao","mondo") ) ;
}

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere 
  un valore random compreso tra 0 e 100 (incluso). */
console.log("----- ESERCIZIO 02 -----");
{
  function giveRandom(n){
  let arrayVuoto = [];
  for( let i=0; i<n; i++)
    arrayVuoto.push(Math.floor(Math.random()*100));

  return arrayVuoto;
}

console.log(giveRandom(10));
}
/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto 
  da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
console.log("----- ESERCIZIO 03 -----");

{

  const arrayC = [-4, -2, 0, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log("L'array originale è " + arrayC);


  let numeroPari = arrayC.filter( function(n){
          return n % 2 === 0;
  });
  
console.log("I numeri pari sono " + numeroPari);

}

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("----- ESERCIZIO 04 -----");
{
   
  let arrayD = [-3, 5, 6, 13];
  console.log("L'array originale è " + arrayD);
  
  function somma( )
  {
     let sum = 0;
        for( let el in arrayD)
            console.log(el);
    //  for( let i=0; i < n.length ; i++) 
    //       sum += n[i];
     console.log("sum")
     return sum;    
  }

//console.log("La somma è " + somma(arrayD));

}

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/
console.log("----- ESERCIZIO 05 -----");

{
  let arrayVuoto = [3,5, 7,8,5];


  let sommaCausali = arrayVuoto.reduce((a,b) => a+b)
  console.log(sommaCausali);

  
}
/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, 
  ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("----- ESERCIZIO 06 -----");
{
  let num = [8,9,8,7];
  let  n = 3 ;

  let increase = num.map( x => x + n)
  console.log(increase);
}

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente 
  le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("----- ESERCIZIO 08 -----");
{
  let arrayS = ["EPICODE", "is", "great"] ;

  let arrayN = arrayS.map(x => x.length);
  console.log(arrayN);

}

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("----- ESERCIZIO 09 -----");
{


        let numD = [];
       function dispari()
       {
          for( let i=0 ; i <100 ; i++)
          {
              if( i % 2 == 1)
              {
                 numD.push(i);
              }
          }
           
          return numD ;
          
       }

console.log(dispari());
}

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("----- ESERCIZIO 10 -----");
{
  let annoVecchio = movies.reduce(function (a,b){

    if( a.Year > b.Year){
         return b;
    }else{
              return a;
          }

  })

  console.log(annoVecchio);
   
}


/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/console.log("----- ESERCIZIO 11 -----");

{

  function numMovie(){
    return movies.length;
  }
  
  console.log(numMovie());
}

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("----- ESERCIZIO 12 -----");

{
  let nomiM = [];
  for( let i=0 ; i <movies.length; i++)
     nomiM.push(movies[i].Title);

     console.log(nomiM);
}

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("----- ESERCIZIO 13 -----");

function filmNuovi(array) {
  let arrayFilms = [];
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i].Year) >= 2000) {
      arrayFilms.push(array[i]);
    }
  }
  return arrayFilms;
}

console.log(filmNuovi(movies));

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("----- ESERCIZIO 14 -----");
function getFilmById(imdbID) {
  const film = movies.find((film) => film.imdbID === imdbID);
  return film;
}

console.log(getFilmById("tt0077869"));

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("----- ESERCIZIO 15 -----");

function sommaAnni(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i].Year);
  }
  return sum;
}

console.log(sommaAnni(movies));
