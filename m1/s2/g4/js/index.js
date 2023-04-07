const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
Crea una variabile chiamata "characters" e inserisci un array vuoto
*/

let characters ;
let arrayVuoto =[];
characters = arrayVuoto;
console.log(characters);
console.log(arrayVuoto);
console.log(arrayVuoto.length);

/* ESERCIZIO 2
Usando un for loop, cicla l'array "starWarsCharacters" ed accedi alla proprietà "name". 
Usa il valore contenuto inserendolo nell'array creato precedentemente. 
Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", 
"C-3PO", "R2-D2", etc..]
*/

console.log(starWarsCharacters.length);

for(i=0; i<starWarsCharacters.length; i++)
{
      console.log(starWarsCharacters[i].name);
      arrayVuoto.push(starWarsCharacters[i].name);
}


console.log("------------------");
console.log(arrayVuoto);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un array chiamato "femaleCharacters" e 
  inserisci un oggetto con questa struttura: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/


let femaleCharacters=[];
 // {name: "Leia Organa",  hair_color: "brown", eye_color: "brown"}]


 for(i=0; i<starWarsCharacters.length; i++)
 {
        if(starWarsCharacters[i].gender == "female")
        { femaleCharacters.push({ name : starWarsCharacters[i].name,
          hair_color:starWarsCharacters[i].hair_color,
          eye_color: starWarsCharacters[i].eye_color});
        }
  }
  
  /*  for(i=0; i<starWarsCharacters.length; i++)
    {
          if(starWarsCharacters[i].gender == "female")
          { 
            femaleCharacters.push(starWarsCharacters[i]);
          }
    }
  
  */
  console.log(femaleCharacters);
  
  console.log("------------------");
  console.log(femaleCharacters);
  


console.log(femaleCharacters);

console.log("------------------");
console.log(femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia come proprietà: blue, yellow, brown, red, 
  blue-gray. Ognuna di queste proprietà contiene un array vuoto
*/

let eyeColor = {
      blue: arrayVuotoBlue = [],
      yellow: arrayVuotoYellow = [],
      brown: arrayVuotoBrown = [],
      blueGray: arrayVuotoBlueGray = []                
}

console.log(eyeColor);

/* ESERCIZIO 5
  Inserisci l'oggetto dei personaggi in "starWarsCharacters" nell'array 
  corrispondente al colore dei loro occhi nell'oggetto "eyeColor" precedentemente 
  creato
  Utilizza uno switch statement per determinare in quale proprietà inserire 
  il personaggio
  */

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio
  */

let massa = Number(starWarsCharacters[0].mass);
let lunWhile=0;
console.log(massa);

while(lunWhile < starWarsCharacters.length)
{
  massa += Number(starWarsCharacters[lunWhile].mass);
  console.log(starWarsCharacters[lunWhile].mass);
  lunWhile++; 
}

console.log("La massa totale è : " + massa);
console.log("----------------------------");

/* ESERCIZIO 7

Crea uno switch statement per rivelare la tipologia di carico, 
utilizzando la massa totale, di un'impotetica astronave contenente 
i personaggi dell'array "starWarsCharacters"
(cerca su un motore di ricerca switch case e conditionals)

Se la massa è inferiore a 500 stampa in console: "Ship is under loaded",
Se la massa è uguale a 500 stampa in console: "Ship is half loaded",
Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700",
Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900",
Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: Jump ship now!"

Una volta fatto, modifica la massa di qualche elemento dell'equipaggio 
e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log("Il tipo di dato di massa è")
console.log(typeof (massa));

/*for(let i=0; i<femaleCharacters.length; i++)
{
  if(characters.includes(femaleCharacters[i].name)) characters.splice(characters.indexOf(femaleCharacters[i].name),1)
}
console.log(characters);
*/
switch(true){
  case (massa > 1000):
      console.log("DANGER! OVERLOAD ALERT: Jump ship now!");
    break;
  case (massa < 500):
       console.log("Ship is under loaded");
      break;
  case (massa == 500):
     console.log("Ship is half loaded");
      break;
  case  (massa <= 700):
      console.log("Working: Load is over 700");
     break;
  case ( massa <= 900):
    console.log("Working: Load is over 900");
    break;

  default:
      console.log("ERRORE")
      break;
}


/* ESERCIZIO 8
Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi 
dal valore "n/a" a "robot" (Tip: puoi creare un nuovo array, o tentare la 
  riassegnazione del valore corrispondente)
*/

let arrayCopia=[];
 // {name: "Leia Organa",  hair_color: "brown", eye_color: "brown"}]


 for(i=0; i<starWarsCharacters.length; i++)
 {
       arrayCopia.push(starWarsCharacters[i])
        
 }
 
 console.log(arrayCopia);

 for(i=0; i<arrayCopia.length; i++)
  {
        if(arrayCopia[i].gender == "n/a")
        { 
          arrayCopia[i].gender= "robot";
        }
  }

  console.log(arrayCopia);

/* EXTRA ESERCIZIO 9

Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "
characters" le stringhe corrispondenti a personaggi con lo stesso nome"
Usa uno più for loop per raggiungere il risultato

(tip: cerca un metodo degli array per rimuovere un elemento)

Una volta fatto crea un console.log per controllare la proprietà length di
 "characters" prima e dopo l'operazione
*/

console.log(femaleCharacters);

for(i=0; i<starWarsCharacters.length ; i++)
{
  for(j=1; j<starWarsCharacters.length ; j++) 
  {
       if( starWarsCharacters[i].name == starWarsCharacters[j].name )
       {
        //elimina 
         //delete.starWarsCharacters[j];
       }
  }
}

/* EXTRA ESERCIZIO 10
Crea una funzionalità che prenda un elemento casuale dall'array 
"starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo
*/
