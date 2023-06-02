/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa 
che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla 
volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo 
sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in 
    console.
*/
console.log("-------ESERCIZIO 1--------");
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log("L'array pets è = " + pets);
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("-------ESERCIZIO 2--------");
pets.sort();
console.log("Array ordinato in ordine alfabetico = " + pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", 
    questa volta in ordine invertito.
*/
console.log("-------ESERCIZIO 3--------");
pets.reverse();
console.log("Array l'ordine è invertito = " + pets);


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("-------ESERCIZIO 4--------");
let ultimo="";
let primo="";
primo = pets[0];
ultimo = pets[pets.length-1];
console.log("Il primo attualmente è  "+primo );
console.log("L'ultimo attualmente è  "+ultimo );
pets[0] = ultimo;
pets[pets.length-1] = primo;
console.log("Ecco il nuovo array scambiato "+pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di 
    essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("-------ESERCIZIO 5--------");
let cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("L'array cars è uguale a =  ");
console.log(cars);

for(i=0; i<cars.length; i++)
 {
    cars[i].licensePlate="SD09"+i+"AD";     
 }

console.log("Il nuovo array cars è uguale a =  ");
console.log(cars);


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array 
    "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("-------ESERCIZIO 6--------");
let auto = {
  brand: 'Ferrari',
  model: '246GT',
  color: 'red',
  trims: ['Sport', 'Gt'],
}
cars.push(auto);

for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" 
    di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("-------ESERCIZIO 7--------");
const justTrims = []
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}
console.log(justTrims); 


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi 
    messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". 
    Altrimenti, mostra in console "Buzz".
*/
console.log("-------ESERCIZIO 8--------");
for (i = 0; i < cars.length; i++) 
{
      if (cars[i].color.charAt(0) == "b") 
      {
                console.log("Fizz");
      } else {
                console.log("Buzz");
      }

}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array 
    numerico fino al raggiungimento del numero 32.
*/
console.log("-------ESERCIZIO 9--------");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let contatore = 0;
let numero = 0;
while(numero != 32)
{
  numero = numericArray[contatore];
  if(numero != 32 )
  {
    console.log("Il numero è "+numero);
  }else{
         console.log("Il numero è "+numero + " allora ci fermiamo");
       }
  
  contatore++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo 
    array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("-------ESERCIZIO 10--------");
const charactersArray = ["g", "n", "u", "z", "d"]

const arrayVuoto = [];

/*
for(i=0; i < charactersArray.length, i++)
{
  switch (charactersArray[i]) {
    case 'd':
         arrayVuoto.push(4);
      break;
    case 'g':
        arrayVuoto.push(7);
      break;
    case 'n':
         arrayVuoto.push(12);
      break;
    case 'u':
        arrayVuoto.push(20);
      break;
    case 'z':
        arrayVuoto.push(21);
      break;
    
    default:
      console.log("Errore");
}

console.log(arrayVuoto); */
