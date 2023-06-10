/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 4
let y = 7

if (x > y) {
  console.log('Il numero più grande è', x)
} else if (x < y) {
  console.log('Il numero più grande è', y)
} else {
  console.log('I numeri sono uguali')
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let x1 = 7

if (x1 !== 5) {
  console.log('not equal')
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let x2 = 15

if (x2 % 5 === 0) {
  console.log('divisibile per 5')
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let y1 = 10
let y2 = 2

if (y1 === 8 || y2 === 8 || y1 + y2 === 8 || y1 - y2 === 8 || y2 - y1 === 8) {
  console.log('verificato')
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 65
let shippingCost = 10
let amountToPay = totalShoppingCart

if (totalShoppingCart < 50) {
  amountToPay += shippingCost
}

console.log('Totale da pagare:', amountToPay)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 65
totalShoppingCart2 = totalShoppingCart2 * 0.8
let shippingCost2 = 10
let amountToPay2 = totalShoppingCart2

if (totalShoppingCart2 < 50) {
  amountToPay2 += shippingCost2
}

console.log('Totale da pagare:', amountToPay2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let z1 = 6
let z2 = 14
let z3 = 10

if (z1 >= z2) {
  if (z3 >= z1) {
    console.log(z3, z1, z2)
  } else {
    if (z3 >= z2) {
      console.log(z1, z3, z2)
    } else {
      console.log(z1, z2, z3)
    }
  }
} else {
  if (z3 >= z2) {
    console.log(z3, z2, z1)
  } else {
    if (z3 >= z1) {
      console.log(z2, z3, z1)
    } else {
      console.log(z2, z1, z3)
    }
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let test = 'Ciao'

if (typeof test === 'number') {
  console.log('è un numero!')
} else {
  console.log('non è un numero!')
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let test2 = 31

if (test2 % 2 === 0) {
  console.log('è un numero pari!')
} else {
  console.log('è un numero dispari!')
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let myArray = []
myArray.push(1)
myArray.push(2)
myArray.push(3)
myArray.push(4)
myArray.push(5)
myArray.push(6)
myArray.push(7)
myArray.push(8)
myArray.push(9)
myArray.push(10)
console.log(myArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

myArray[9] = 100
console.log(myArray)
