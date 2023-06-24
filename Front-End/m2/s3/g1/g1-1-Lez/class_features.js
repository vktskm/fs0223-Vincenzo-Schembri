// utilizzando il costrutto "class" per generare degli oggetti invece delle tradizionali funzioni costruttore
// ci si aprono le porte a nuove funzionalità:

// EXTENDS
// Creando una classe NON da zero ma a partire da una precedentemente creata è possibile ereditarne i metodi/proprietà

class Computer {
  constructor(brand) {
    this.brand = brand
  }

  showBrand() {
    return 'Ho un computer ' + this.brand
  }

  // STATIC
  // una proprietà/metodo dichiarato come STATICO sarà presente SOLO nella classe ma NON nelle istanze generate da essa
  static canBrowseTheInternet = true
  // questo attributo è definito come STATICO! non sarà presente in macbook, surface,
}

let macbook = new Computer('Apple')
// macbook è un oggetto dotato di una proprietà, brand, il cui valore sarà 'Apple'
console.log(macbook.showBrand())

let surface = new Computer('Microsoft')
console.log(surface.showBrand())

// canBrowseTheInternet, essendo definito come attributo statico, non sarà presente in macbook o surface
console.log(
  'canBrowseTheInternet dentro macbook:',
  macbook.canBrowseTheInternet
) // undefined
console.log(
  'canBrowseTheInternet dentro la classe Computer:',
  Computer.canBrowseTheInternet
) // true

// ora introduciamo una nuova classe per creare dei computer più dettagliati, che possiedono anche un model
class ComputerWithModel extends Computer {
  // ComputerWithModel è una classe che ESTENDE da Computer
  // avrà intrinsecamente tutte le funzionalità dei Computer
  constructor(brand, model) {
    // il costruttore va comunque definito
    // volendo lasciare la funzionalità di brand IDENTICA a quella di Computer, cosa faccio come prima cosa?
    // invoco nel constructor di ComputerWithModel per prima cosa il constructor di Computer
    // super, nella classe estesa, sarà SEMPRE un riferimento alla classe da cui sto estendendo
    // posso utilizzare super per invocare il COSTRUTTORE di Computer
    super(brand) // questo mi invoca il costruttore di Computer
    this.model = model
  }
}

let macbookPro = new ComputerWithModel('Apple', 'Macbook Pro')
console.log(macbookPro)
