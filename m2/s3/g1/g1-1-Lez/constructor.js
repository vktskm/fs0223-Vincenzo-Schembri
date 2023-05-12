// CONCETTO DI FUNZIONE COSTRUTTORE
console.log('constructor.js')

// Conoscere le funzioni costruttore sarà utile per creare numerosi oggetti in serie dotati
// delle stesse caratteristiche (attributi/metodi)

let person1 = {
  firstName: 'Mario',
  lastName: 'Bros',
  address: 'Via Roma 1',
  email: 'mario.bros@gmail.com',
  showCompleteName: function () {
    return 'Mi chiamo ' + this.firstName + ' ' + this.lastName
  }, // this in questo caso rappresenta l'oggeto person1
}

// benissimo, ora cerchiamo di "generalizzare" questa struttura in modo da poter creare ALTRI
// oggetti dotati delle stesse caratteristiche

// quello che NON vogliamo fare è copiare/incollare, dobbiamo seguire la cosiddetta D R Y (don't repeat yourself)

// creiamo una funzione costruttore per riutilizzare più volte questa struttura

const Person = function () {
  // convenzione: lettera iniziale MAIUSCOLA (in generale PascalCase)
  // camelCase (variabili/metodi/funzioni)
  // PascalCase (costruttori, componente)
  // kebab-case (dash-case) (classi css, id, etc.)
  // ora definisco le proprietà che caratterizzeranno ogni oggetto di tipo Person:
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.showCompleteName = function () {}
}

// ho creato lo "stampino, uno "scheletro" per creare oggetti fatti così:
// { firstName: '', lastName: '', address: '', email: '', showCompleteName: function(){} }

// proviamo a creare un oggetto con lo stampino :)

let luigiBros = new Person()
console.log('luigibros', luigiBros)

let bowser = new Person()
luigiBros.firstName = 'Luigi'
luigiBros.lastName = 'Bros'
luigiBros.showCompleteName = function () {
  return this.firstName + ' ' + this.lastName
}

console.log(luigiBros.showCompleteName())

// new Person() mi crea degli oggetti tutti uguali, ma c'è uno svantaggio: successivamente alla creazione, devo
// andare a riempire ogni proprietà a mano, altrimenti ottengo dei valori a "stringa vuota" che non mi servono a niente

// cerchiamo un modo più "intelligente" di utilizzare Person, dando già al processo di creazione dei valori
// per poter riempire le proprietà inizialmente vuote!

// creiamo un costruttore più potente:
const FilledPerson = function (firstName, lastName, address, email) {
  this.firstName = firstName // firstName verrà passato all'invocazione della FilledPerson
  this.lastName = lastName
  this.address = address
  this.email = email || '' // valore di fallback: in caso FilledPerson venga invocata SENZA 4° parametro, lascerò ''
  this.showCompleteName = function () {}
}

let warioBros = new FilledPerson('Wario', 'Bros', 'Regno dei funghi 1', null)
console.log(warioBros)
let princessPeach = new FilledPerson(
  'Peach',
  'Toadstool',
  '',
  'princess.peach@gmail.com'
)
console.log(princessPeach)

// creiamo 3 oggetti NamedPerson, con 3 name diversi esposti da un ciclo, e console.logghiamo il risultato
let marioCharactersNames = ['Mario', 'Luigi', 'Peach']
let marioCharactersArray = [] // questo poi diventerà un array di oggetti NamedPerson

marioCharactersNames.forEach((name) => {
  marioCharactersArray.push(
    new FilledPerson(name, 'Bros', 'Regno dei funghi 1', null)
  )
})

console.log(marioCharactersArray)
