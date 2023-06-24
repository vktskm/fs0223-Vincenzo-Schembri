const Q:Function = (selector:string):HTMLElement | null => {
    const element = document.querySelector(selector);
    if (element !== null){
        return document.querySelector(selector)
    } else {
        return null;
    }
};

const Qall:Function = (selectors:string):NodeListOf<Element> | null => {
    const elements = document.querySelectorAll(selectors);
    if(elements.length > 0 && elements !== null){
        return document.querySelectorAll(selectors);
    } else {
        return null;
    }
};

const Call:Function = (url:string):Promise<Response> => {
    return fetch(url)
    .then((response: Response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Request Error");
      }
    })
    .catch((error: Error) => {
      console.error(error);
    });
};

const CallAuth:Function = (url: string, auth:string):Promise<Response> => {
    return fetch(url, {
                headers: {
                  'Authorization': auth,
                },
            })
    .then((response: Response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request Error");
        }
    })
    .catch((error: Error) => {
      console.error(error);
    });
};


//In TypeScript, puoi definire una classe per creare oggetti che seguono uno schema specifico. Una classe è una struttura che definisce le proprietà 
//e i metodi che un oggetto avrà quando viene istanziato. Ecco un esempio:
class Person {
    name: string;
    age: number;
    isAdmin: boolean;
  
    constructor(name: string, age: number, isAdmin: boolean) {
      this.name = name;
      this.age = age;
      this.isAdmin = isAdmin;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  // Creazione di un oggetto istanziando la classe
  const person = new Person("Alice", 30, false);
  
  // Accesso alle proprietà dell'oggetto
  console.log(person.name); // Output: Alice
  console.log(person.age); // Output: 30
  console.log(person.isAdmin); // Output: false
  
  // Chiamata a un metodo dell'oggetto
  person.greet(); // Output: Hello, my name is Alice

//In questo esempio, la classe Person definisce le proprietà name, age e isAdmin, oltre a un metodo greet(). Nel costruttore della classe, vengono 
//assegnati i valori delle proprietà in base agli argomenti passati. Puoi istanziare un oggetto utilizzando new Person(...) e accedere alle proprietà o
//chiamare i metodi dell'oggetto istanziato.

//Le classi in TypeScript forniscono una struttura più organizzata e orientata agli oggetti per la creazione di oggetti, consentendo anche 
//l'ereditarietà e altre funzionalità avanzate della programmazione orientata agli oggetti.

//

/* 
In TypeScript (e in molti altri linguaggi di programmazione), try, catch e finally sono costrutti utilizzati per la 
gestione degli errori.

try: Il blocco try è utilizzato per incapsulare il codice che potrebbe generare un'eccezione o un errore. All'interno 
del blocco try, vengono eseguite le istruzioni normali del programma.

catch: Il blocco catch viene utilizzato per catturare e gestire le eccezioni o gli errori generati all'interno del 
blocco try. Se si verifica un'eccezione o un errore nel blocco try, l'esecuzione del programma viene interrotta e il 
controllo passa al blocco catch. All'interno del blocco catch, puoi definire il codice per gestire l'eccezione o 
l'errore in modo appropriato.

finally: Il blocco finally è facoltativo e viene eseguito sempre, indipendentemente dal fatto che si verifichi o meno 
un'eccezione o un errore nel blocco try. Il blocco finally viene utilizzato per definire il codice che deve essere 
eseguito indipendentemente dall'esito del blocco try. Ad esempio, puoi utilizzare il blocco finally per rilasciare 
risorse, chiudere connessioni o eseguire operazioni di pulizia.

Ecco un esempio che illustra l'uso di try, catch e finally in TypeScript:
 */
try {
    // Codice che potrebbe generare un'eccezione o un errore
    const result = someFunction(); // Chiamata a una funzione che potrebbe generare un'eccezione
    console.log(result);
  } catch (error) {
    // Gestione dell'eccezione o dell'errore
    console.error("Si è verificato un errore:", error);
  } finally {
    // Codice che viene eseguito sempre
    console.log("Blocco finally eseguito");
  }
/* 
Nell'esempio sopra, il codice all'interno del blocco try viene eseguito normalmente. Se si verifica un'eccezione o un 
errore durante l'esecuzione di someFunction(), l'esecuzione viene interrotta e il controllo passa al blocco catch, 
dove è possibile gestire l'eccezione o l'errore. Infine, il blocco finally viene sempre eseguito, indipendentemente 
dall'esito del blocco try.

È importante notare che catch può accettare un parametro (in questo caso error) che rappresenta l'eccezione o 
l'errore generato. Puoi utilizzare questo parametro per accedere alle informazioni sull'eccezione o sull'errore e per 
eseguire azioni di gestione specifiche.
  
Assicurati di utilizzare try, catch e finally in modo appropriato per gestire gli errori nel tuo codice e per 
garantire una gestione corretta delle eccezioni.
 */


/////////////////////////////////////////////////////////
/* 
L'incapsulamento è uno dei principi fondamentali della programmazione orientata agli oggetti (OOP) e si riferisce 
alla pratica di nascondere l'implementazione interna di una classe e fornire un'interfaccia esterna per interagire 
con gli oggetti di quella classe.

In TypeScript, puoi utilizzare l'incapsulamento per definire la visibilità delle proprietà e dei metodi di una 
classe. Ci sono tre livelli di visibilità che puoi utilizzare per le proprietà e i metodi di una classe:

public: Questa è la visibilità predefinita. Una proprietà o un metodo pubblico è accessibile da qualsiasi punto del 
codice, sia all'interno della classe stessa che dall'esterno.

private: Una proprietà o un metodo privato è accessibile solo all'interno della classe in cui sono definiti. Non 
possono essere acceduti dall'esterno della classe o da altre classi.

protected: Una proprietà o un metodo protetto è accessibile dalla classe in cui sono definiti e dalle sue classi 
derivate (sottoclassi). Non possono essere acceduti dall'esterno della classe o da altre classi che non siano 
sottoclassi.

Ecco un esempio che mostra come puoi utilizzare l'incapsulamento in TypeScript:
 */
class Car {
    private brand: string;
    public model: string;
    protected year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    public startEngine(): void {
      console.log(`Starting the engine of ${this.brand} ${this.model}`);
      // Altri codici per avviare il motore
    }
  
    private stopEngine(): void {
      console.log(`Stopping the engine of ${this.brand} ${this.model}`);
      // Altri codici per fermare il motore
    }
  
    protected honk(): void {
      console.log(`Honking the horn of ${this.brand} ${this.model}`);
      // Altri codici per suonare il clacson
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 2022);
  
  console.log(myCar.model); // Output: Corolla
  myCar.startEngine(); // Output: Starting the engine of Toyota Corolla
  // myCar.brand; // Errore! La proprietà 'brand' è privata e non può essere accessibile dall'esterno
  // myCar.stopEngine(); // Errore! Il metodo 'stopEngine' è privato e non può essere accessibile dall'esterno
  // myCar.honk(); // Errore! Il metodo 'honk' è protetto e non può essere accessibile dall'esterno


/* 
Nell'esempio sopra, la classe Car ha tre proprietà: brand, model e year. brand è dichiarata come private, quindi può 
essere accessibile solo all'interno della classe Car. model è dichiarata come public, quindi è accessibile sia 
all'interno che all'esterno della classe. year è dichiarata come protected, quindi è accessibile all'interno della 
classe e dalle sue sottoclassi.

Inoltre, la classe Car ha tre metodi: startEngine, stopEngine e honk. startEngine è dichiarato come public e può 
essere chiamato sia all'interno che all'esterno della classe. stopEngine è dichiarato come private, quindi può essere 
chiamato solo all'interno della classe. honk è dichiarato come protected e può essere chiamato all'interno della 
classe e dalle sue sottoclassi.

Nell'esempio, puoi notare che quando istanziamo un oggetto Car, possiamo accedere alla proprietà model e chiamare il 
metodo startEngine perché sono dichiarati come public. Tuttavia, non possiamo accedere direttamente alla proprietà 
brand o chiamare i metodi stopEngine e honk perché hanno rispettivamente visibilità private e protected.

L'incapsulamento è utile per nascondere i dettagli di implementazione interna di una classe, proteggere i dati da 
accessi indesiderati e garantire un'interfaccia coerente per l'utilizzo degli oggetti. Consentendo solo l'accesso 
controllato a determinate proprietà e metodi, puoi mantenere la coerenza e l'integrità dei tuoi oggetti e ridurre i 
possibili errori causati da modifiche accidentali o inattese.
 */

////////////////////////////////////////////////////
/* 
L'ereditarietà è un concetto fondamentale della programmazione orientata agli oggetti (OOP) che consente di creare 
nuove classi basate su classi esistenti. In TypeScript, puoi utilizzare l'ereditarietà per creare una gerarchia di 
classi, consentendo alle classi figlie di ereditare le proprietà e i metodi della classe genitore.

Per definire una relazione di ereditarietà tra due classi in TypeScript, utilizziamo la parola chiave extends. La 
classe figlia (detta anche classe derivata) estende la classe genitore (detta anche classe base). La classe figlia 
eredita tutte le proprietà e i metodi pubblici e protetti della classe genitore, che possono poi essere utilizzati 
nella classe figlia stessa.

Ecco un esempio che mostra come utilizzare l'ereditarietà in TypeScript:
 */

class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public eat(): void {
      console.log(`${this.name} is eating.`);
    }
  }
  
  class Dog extends Animal {
    public bark(): void {
      console.log(`${this.name} is barking.`);
    }
  }
  
  // Creazione di un oggetto della classe base
  const animal = new Animal("Generic Animal");
  animal.eat(); // Output: Generic Animal is eating.
  
  // Creazione di un oggetto della classe derivata
  const dog = new Dog("Bobby");
  dog.eat(); // Output: Bobby is eating.
  dog.bark(); // Output: Bobby is barking.

/* 
Nell'esempio sopra, abbiamo una classe base chiamata Animal con una proprietà name e un metodo eat(). La classe Dog 
estende la classe Animal utilizzando la parola chiave extends. Pertanto, la classe Dog eredita la proprietà name e il 
metodo eat() dalla classe Animal. Inoltre, la classe Dog definisce un metodo aggiuntivo bark().

Possiamo creare oggetti sia della classe base Animal che della classe derivata Dog. Entrambi gli oggetti possono 
chiamare il metodo eat(), poiché è ereditato dalla classe base. Tuttavia, solo l'oggetto della classe Dog può 
chiamare il metodo bark(), poiché è specifico della classe derivata.
  
L'ereditarietà consente di creare classi più specializzate e organizzare il codice in modo gerarchico. Puoi estendere 
ulteriormente la catena di ereditarietà creando ulteriori classi figlie basate su classi figlie esistenti. Questo ti 
consente di condividere la logica comune tra le classi e aggiungere funzionalità specifiche alle classi figlie.

In TypeScript, la parola chiave super() viene utilizzata all'interno di una classe figlia (o classe derivata) per richiamare il costruttore 
della classe genitore (o classe base). Consente di eseguire il codice del costruttore della classe genitore prima di eseguire il codice 
specifico del costruttore della classe figlia.

Quando una classe figlia estende una classe genitore utilizzando l'istruzione extends, la classe figlia eredita tutte le proprietà e i 
metodi della classe genitore. Tuttavia, il costruttore non viene ereditato automaticamente. Pertanto, se una classe figlia ha il suo 
costruttore, è necessario chiamare esplicitamente il costruttore della classe genitore utilizzando super().

Ecco un esempio che mostra come utilizzare super() per richiamare il costruttore della classe genitore:
*/

class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public eat(): void {
      console.log(`${this.name} is eating.`);
    }
  }
  
  class Dog extends Animal {
    private breed: string;
  
    constructor(name: string, breed: string) {
      super(name); // Richiamo del costruttore della classe genitore
      this.breed = breed;
    }
  
    public bark(): void {
      console.log(`${this.name} (${this.breed}) is barking.`);
    }
  }
  
  const dog = new Dog("Bobby", "Labrador");
  dog.eat(); // Output: Bobby is eating.
  dog.bark(); // Output: Bobby (Labrador) is barking.
  
/* 
Nell'esempio sopra, la classe Animal è la classe genitore e ha un costruttore che accetta un argomento name. La classe Dog estende la 
classe Animal e ha anche un suo costruttore che accetta due argomenti name e breed.

All'interno del costruttore della classe Dog, la riga super(name) viene utilizzata per richiamare il costruttore della classe genitore 
(Animal). Ciò assicura che il codice del costruttore della classe Animal venga eseguito prima del codice specifico del costruttore della 
classe Dog. In questo caso, il costruttore della classe Animal imposta il valore della proprietà name, mentre il costruttore della classe 
Dog imposta il valore della proprietà breed.

L'utilizzo di super() consente di gestire la logica del costruttore della classe genitore e assicura che lo stato iniziale della classe 
figlia sia correttamente inizializzato.
*/

//////////////////////////////////////////////////
/* 
Il polimorfismo è un concetto importante della programmazione orientata agli oggetti (OOP) che consente a oggetti di 
classi diverse di essere trattati in modo uniforme, consentendo l'esecuzione di metodi specifici della classe di 
ciascun oggetto.

In TypeScript, il polimorfismo può essere realizzato attraverso l'ereditarietà e l'uso di metodi sovrascritti e 
sovraccaricati.

1)  Sovrascrittura dei metodi (Method Overriding): La sovrascrittura dei metodi consente alle classi figlie di 
    fornire una propria implementazione di un metodo ereditato dalla classe genitore. Per sovrascrivere un metodo, è 
    necessario definire un metodo con la stessa firma (nome e parametri) nella classe figlia. Questo permette di 
    utilizzare il metodo specifico della classe figlia anche se l'oggetto è dichiarato come tipo della classe 
    genitore.
    Ecco un esempio che mostra come implementare la sovrascrittura dei metodi in TypeScript:
 */

class Animal {
    public makeSound(): void {
      console.log("Animal is making a sound.");
    }
  }
  
  class Dog extends Animal {
    public makeSound(): void {
      console.log("Dog is barking.");
    }
  }
  
  const animal: Animal = new Animal();
  const dog: Animal = new Dog();
  
  animal.makeSound(); // Output: Animal is making a sound.
  dog.makeSound(); // Output: Dog is barking.

/* 
Nell'esempio sopra, abbiamo una classe base Animal con un metodo makeSound(). La classe Dog estende la classe Animal 
e fornisce una sua implementazione del metodo makeSound(). Creando un oggetto di tipo Animal e un oggetto di tipo 
Dog, possiamo chiamare il metodo makeSound() su entrambi gli oggetti. Tuttavia, l'output sarà diverso in base al tipo 
effettivo dell'oggetto.

2)
    Sovraccarico dei metodi (Method Overloading): Il sovraccarico dei metodi consente a una classe di avere più 
    metodi con lo stesso nome ma con firme (parametri) diverse. È possibile definire metodi con diverse firme 
    all'interno di una stessa classe o nella classe base e nelle sue classi derivate. Questo permette di utilizzare 
    il metodo appropriato in base al numero e al tipo dei parametri passati.

    Ecco un esempio che mostra come implementare il sovraccarico dei metodi in TypeScript:
     */

class Calculator {
  public add(a: number, b: number): number;
  public add(a: string, b: string): string;
  public add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(5, 10)); // Output: 15
console.log(calculator.add("Hello", " World")); // Output: Hello World

/* 
    Nell'esempio sopra, abbiamo una classe Calculator che ha un metodo add() sovraccaricato. Abbiamo definito due 
    firme di metodo diverse per il metodo add(): una per l'addizione di numeri e una per la concatenazione di 
    stringhe. A seconda dei tipi di argomenti passati al metodo add(), verrà eseguita l'implementazione 
    corrispondente.

    Creando un'istanza della classe Calculator, possiamo chiamare il metodo add() con argomenti di tipo numerico e 
    ottenere la somma dei numeri. Possiamo anche chiamare il metodo add() con argomenti di tipo stringa e ottenere la 
    concatenazione delle stringhe.

Il polimorfismo ci consente quindi di trattare oggetti di classi diverse in modo uniforme, utilizzando gli stessi 
metodi dichiarati nella classe base. Attraverso la sovrascrittura dei metodi e il sovraccarico dei metodi, possiamo 
ottenere comportamenti diversi in base al tipo specifico dell'oggetto, consentendo una maggiore flessibilità e 
riutilizzo del codice.
 */


