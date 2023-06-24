console.log('object.js')

// JS può venire utilizzato come linguaggio OOP (orientato agli oggetti) in quanto possiede una trasposizione
// dei 3 pilastri OOP fondamentali:
// - incapsulamento
// - ereditarietà
// - polimorfismo

// JS ha una caratteristica che lo differenzia da tutti i linguaggi OOP classici: può creare oggetti direttamente
// senza passare da una classe/stampino/fabbrica/progetto; lo potete creare direttamente attraverso la cosiddetta
// "NOTAZIONE LETTERALE"

let teacher = {
  name: 'Stefano',
  module: 'U2',
  'type-of-teacher': 'frontend',
  explains: function () {
    return 'JS può venire interpretato come linguaggio OOP' // dichiarazione del metodo explains
  },
}

// Poi sappiamo che possiamo accedere a queste proprietà in 2 modi:
console.log(teacher.name) // "dot notation"
console.log(teacher['module']) // "square-bracket notation"
console.log(teacher['type-of-teacher'])
console.log(teacher.explains()) // invocazione del metodo explains

// Benissimo! Creare gli oggetti in JS è molto semplice, perchè non abbiamo bisogno della classe/stampino/fabbrica/progetto,
// tuttavia questa semplicità vi si ritorce contro nel momento in cui dovete creare più oggetti dello stesso tipo:

let teacher2 = {
  name: 'Alberto',
  modules: ['U1', 'U2'], // typo con diverso tipo di valore
  type: 'frontend', // typo
  explains: function () {
    return 100 // valore di ritorno sbagliato
  },
}

// Questo oggetto simula degli errori che potreste compiere nel cercare di copiare a memoria la struttura di un oggetto
// precedente, quando invece creare esplicitamente uno stampino vi renderebbe la vita più facile...!

// Proseguiamo su constructor.js
