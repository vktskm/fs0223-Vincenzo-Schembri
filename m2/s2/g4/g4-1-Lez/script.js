console.log('hello world!')

// JS RECAP!
// creazione di variabili: let & const
// let permette di creare una variabile riassegnabile in futuro
let x = 50
x = 100

// const crea una variabile di tipo "costante", con un valore che non potrà essere riassegnato in futuro
const y = 'STEFANO'
// y = 'CASASOLA' // <-- errore!

// quali sono i tipi di dato che una variabile può ospitare? questi sono i tipi PRIMITIVI in JS:
// strings
// numbers
// booleans
// undefined
// null
// Symbols

console.log(typeof x)
console.log(typeof y)

// JS è un linguaggio debolmente tipizzato (weakly typed)
x = 'ho cambiato il valore a x e ne ho cambiato anche il tipo'
// riassegnare il TIPO di dato di una variabile non è una buona pratica

const myString = 'Hello!'
console.log(myString.toLocaleUpperCase())
const anotherString = myString + ' World'
console.log(anotherString.length)
// Object -> String -> myString // in JS tutto è un oggetto, a causa dell'eredità prototipale

// ARRAY: collezione ordinata di valori
const myArray = [1, 5, 'ciao', false]

// negli array si accede agli elementi tramite la loro posizione, detta INDICE (che parte da 0!)
console.log(myArray[2].slice(0, 1)) // seleziono il primo carattere della stringa in posizione 2 (il terzo elemento)
// slice è un metodo delle stringhe che permette di selezionare una porzione di una stringa, tramite l'indice di inizio
// della porzione e l'indice di fine

// OGGETTI: collezioni di valori strutturate secondo coppie proprietà/valore
const myObj = {
  // una collezione di coppie chiave/valore
  firstName: 'EPICODE',
  lastName: 'ITALIA',
  locations: ['Italy', 'Germany'],
  'date-of-birth': 1987,
}

// due modi per accedere alle proprietà:
console.log(myObj.firstName) // accedo a firstName con la dot-notation
console.log(myObj.locations[1]) // <-- secondo elemento della proprietà locations dentro myObj

console.log(myObj['firstName']) // accedo a firstName con la squarebracket-notation
console.log(myObj)

console.log(myObj['date-of-birth'])
console.log(myObj['locations'][1])

// in JS primitive e array/oggetti vengono salvati ed assegnati con metodologie diverse

let a = 50
let b = a

console.log('b?', b)
a = 75
console.log('b?', b)

// ora con un oggetto
let objA = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  mariaChiara: null,
}

let objB = objA // questa NON È una clonazione di un oggetto

console.log('objB', objB)
objA.firstName = 'Giovanni'
console.log('objB', objB)

let federico
console.log(federico) // undefined

let arr = [1, 2, 3]
arr[400] = 4

console.log(arr)

// metodo corretto #1 per clonare un oggetto
let properCopy = Object.assign({}, objA) // questa è una copia VERA di objA
let properPartialCopy = Object.assign(
  {},
  { firstName: objA.firstName, lastName: objA.lastName }
) // questa è una copia VERA di solamente qualche proprietà di objA
console.log('properCopy', properCopy)

objA.mariaChiara = true
console.log('properCopy', properCopy)
console.log('properPartialCopy', properPartialCopy)

// metodo corretto #2 per clonare un oggetto
let anotherProperCopy = { ...objA } // utilizzando lo spread operator
let arr2 = [...arr] // ... funziona anche con gli array!

let xx = 50
// console.log(xx.toPrecision()) // Number

// costrutti condizionali: if/else
let cartTotal = 40
let shippingCost = 5
let freeShippingThreshold = 50 // ammontare richiesto per ricevere la spedizione gratuita
let total

// total?
if (cartTotal >= freeShippingThreshold) {
  total = cartTotal
} else {
  total = cartTotal + shippingCost
}

console.log('Il totale è', total)

// ternary operator
// utile per risolvere one-line l'assegnazione di una variabile
// la condizione va inserita prima del ?
// il valore subito dopo il ? è il valore da assegnare se la condizione si verifica
// il valore invece dopo i : è quello da assegnare in caso di condizione che NON si verifica

let anotherTotal =
  cartTotal >= freeShippingThreshold ? cartTotal : cartTotal + shippingCost
console.log('Il totale calcolato con il ternary operator è:', anotherTotal)

// CICLI
// for, while, do...while, forEach, map, filter, reduce, ...
// un ciclo serve per eseguire la stessa operazione un numero definito/indefinito di volte

// utilizzo numero 1 del ciclo for: esplorare un array
let arrayToCycle = ['andrea', 'vincenzo', 'arturo', 'francesca']
// arrayToCycle[3]

// FOR
for (let i = 0; i < arrayToCycle.length; i++) {
  // arrayToCycle[i] sarà l'elemento corrente da ciclare
  // possiamo contare sul fatto che i sarà SEMPRE un indice valido per l'esplorazione di arrayToCycle
  console.log(arrayToCycle[i])
}

// le istruzioni successive

// WHILE
let randomNumber = 0
console.log('randomNumber', randomNumber)

while (randomNumber < 8) {
  console.log('randomNumber non è ancora >=8', randomNumber)
  randomNumber = Math.ceil(Math.random() * 10) // questo torna un valore da circa 0.00000001 * 10 a 0.99999999 *10
}

// DO... WHILE (poco usato)
do {
  console.log('sono nel ciclo do... while', randomNumber)
} while (randomNumber < 8)

// F U N Z I O N I
// una funzione è un blocco di codice riutilizzabile.
// una funzione va prima DICHIARATA e poi INVOCATA (utilizzata)
const bark = function () {
  console.log('this dentro bark', this)
  console.log('bau!')
}

// for (let i = 0; i < 3; i++) {
// bark() // 3 bau! in console
// }

let bauButton = document.querySelector('button')
console.log(bauButton)
// bauButton.onclick = bark
bauButton.addEventListener('click', bark)

let humanBeing = {
  gender: 'male',
  age: 20,
  sayHello: function () {
    console.log('hello! my age is ' + this.age)
  },
}

// sayHello è un METODO di humanBeing
humanBeing.age = 50
humanBeing.sayHello()

// funzioni freccia
const arrowBark = () => {
  console.log(this)
  console.log('bau dalla freccia!')
}

const valoreDiRitorno = arrowBark()
console.log(valoreDiRitorno) // undefined

const firstArrow = () => 'ciao' // 'ciao' è il valore di ritorno, implicito in una funzione freccia se non aprite le {}

const hello = firstArrow()
console.log(hello)

const calculateArea = () => 5 * 10

const area = calculateArea() // tornerà sempre 50

const betterCalculateArea = (n1 = 10, n2 = 20) => n1 * n2

const anotherArea = betterCalculateArea(3, 8)
console.log('anotherArea', anotherArea)

// le funzioni freccia NON hanno un proprio this
// ma ereditano quello circostante
// le funzioni definite con function invece
// hanno un this ben preciso che può variare
// a seconda del contesto di esecuzione

// SUGAR COATING -> quando viene introdotta una nuova funzionalità che altro non è che un metodo "migliore"
// // di fare una cosa già possibile

let anotherArray = [40, 6, 1, 29, 100]

anotherArray.forEach((currentElement) => {
  // currentElement è il primo elemento dell'array nella prima esecuzione del ciclo
  // currentElement è il secondo elemento dell'array nella seconda esecuzione del ciclo
  // ...
  console.log(currentElement)
})

// map, a differenza di forEach, TORNA SEMPRE UN NUOVO ARRAY
// map nasce per TRASFORMARE un array in un ALTRO ARRAY
let newArray = anotherArray.map((currentElement) => {
  return currentElement + 10
})

console.log(newArray)

const stringArray = ['ciao', 'sono', 'stefano']

let uppercaseStringArray = stringArray.map((s) => s.toUpperCase())

console.log(uppercaseStringArray)

// filter, come map, torna un nuovo array
let filteredArray = stringArray.filter((s) => {
  // filter ritorna per ogni elemento o true o false
  // se torna true, l'elemento FARÀ PARTE del valore di ritorno
  // provo a filtrare l'array e a tenere in filteredArray SOLO gli elementi che cominciano con la lettera 's'
  if (s.slice(0, 1) === 's') {
    // finirò qui per "sono" e per "stefano"
    return true
  } else {
    // finirò qui invece per l'elemento "ciao"
    return false
  }

  // versione PRO :) abbreviata
  // return s.slice(0, 1) === 's'
})

console.log('filteredArray', filteredArray)

// FIND
// .find() cicla l'array, permette di impostare una condizione e ritornerà IL PRIMO elemento che verifica tale condizione
const foundElement = stringArray.find((s) => {
  return s.length === 4
})

console.log('foundElement', foundElement)

console.log(4 == '4') // NON USATE ==

let myNum = '2.99'
console.log(parseInt(myNum))
console.log(parseFloat(myNum))
