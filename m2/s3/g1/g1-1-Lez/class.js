// JS nel corso delle varie revisioni che ha subito nel corso degli anni ha sempre cercato di facilitare il suo percorso
// di apprendimento a sviluppatori provenienti anche da altri linguaggi
// ha quindi pian piano introdotti costrutti e funzionalità che erano cardine di altri linguaggi
// uno di questi è il costrutto class, che in altri linguaggi serve a definire lo stampino/fabbrica/progetto
// class non è altro che uno SUGAR COATING alle funzioni costruttore, perchè sotto il cofano non è cambiato niente

// nella programmazione a oggetti "classica" ci sono le CLASSI (stampino/fabbrica/progetto) e ci sono le ISTANZE ()
console.log('class.js')

// scriviamo la funzione costruttore FilledPerson con un'altra sintassi, la sintassi a CLASSE

class FilledPerson {
  constructor(firstName, lastName, address, email) {
    // constructor è la funzione della classe in carico di "inizializzare" l'oggetto,
    // partendo volendo da parametri che passeremo durante l'invocazione della classe con la parola "new"
    this.firstName = firstName
    this.lastName = lastName
    this.address = address
    this.email = email
    // il constructor è l'UNICO posto in cui posso inizializzare le proprietà dell'oggetto a partire
    // dai parametri
  }

  // game è un valore fisso, non dipende dai parametri, lo dichiaro come attributo della classe
  // fuori dal constructor
  game = 'Super Mario Bros'

  sayHello(obj) {
    return 'Hello, my name is ' + this.firstName
    // il this in questo caso non si riferisce alla classe ma all'ISTANZA generato dalla classe
  }
}

// let toad = new FilledPerson('Toad', 'Toad', 'Mushroom Road 1', 'toad@gmail.com')
// console.log(toad)

// let waluigi = new FilledPerson(
//   'Waluigi',
//   'Waluigi',
//   'Mushroom Road 2',
//   'waluigi@gmail.com'
// )

// waluigi.sayHello(toad)
