// ESEMPIO DI CODICE ASINCRONO

// proviamo a scrivere una funzione che stamperà un messaggio in console DOPO aver contato fino a 3

let countUntilThree = function () {
  setTimeout(() => {
    console.log('conto fino a 3...')
  }, 3000)
}

let start = function () {
  countUntilThree() // non viene aspettato :(
  console.log('FATTO!')
}

// start()

// come facciamo a fare in modo che countUntilThree(), l'operazione ASYNC, venga "aspettata" prima di eseguire il
// console.log() alla riga 13?

// SOLUZIONE 1) approccio con CALLBACKS
let countUntilThreeWithCallback = function (nextCode) {
  setTimeout(() => {
    console.log('conto fino a 3...')
    // questa riga successiva per forza di cose verrà lanciata DOPO il conteggio!
    nextCode()
  }, 3000)
}

let startWithCallback = function () {
  countUntilThreeWithCallback(() => {
    console.log('FATTO!')
  })
}

// startWithCallback()

// SOLUZIONE 2) approccio con Promise
let countUntilThreeWithPromise = function () {
  return new Promise((resolve, reject) => {
    // corpo della Promise
    setTimeout(() => {
      console.log('conto fino a 3...')
      // questa riga successiva per forza di cose verrà lanciata DOPO il conteggio!
      if (5 > 10) {
        // condizione impossibile, ma è solo di esempio
        reject(new Error('Oibò!')) // <-- il catch() partirà da qua!
      }
      resolve('Tutto ok!') // <-- il then() partirà da qua!
    }, 3000)
  })
}

// ora impariamo la parte più importante: UTILIZZARE la Promise, con i .then() e il .catch()
let startWithPromise = function () {
  countUntilThreeWithPromise()
    .then((str) => {
      // qui inserisco COSA FARE se la Promise viene risolta
      console.log('FATTO!', str)
    })
    .catch((err) => {
      // qui inserisco COSA FARE se la Promise viene rejectata
      console.log('qualcosa è andato storto', err)
    })
}

startWithPromise()
