var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Q = function (selector) {
    var element = document.querySelector(selector);
    if (element !== null) {
        return document.querySelector(selector);
    }
    else {
        return null;
    }
};
var Qall = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    if (elements.length > 0 && elements !== null) {
        return document.querySelectorAll(selectors);
    }
    else {
        return null;
    }
};
var Call = function (url) {
    return fetch(url)
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Request Error");
        }
    })
        .catch(function (error) {
        console.error(error);
    });
};
var CallAuth = function (url, auth) {
    return fetch(url, {
        headers: {
            'Authorization': auth,
        },
    })
        .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Request Error");
        }
    })
        .catch(function (error) {
        console.error(error);
    });
};
//In TypeScript, puoi definire una classe per creare oggetti che seguono uno schema specifico. Una classe è una struttura che definisce le proprietà 
//e i metodi che un oggetto avrà quando viene istanziato. Ecco un esempio:
var Person = /** @class */ (function () {
    function Person(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
// Creazione di un oggetto istanziando la classe
var person = new Person("Alice", 30, false);
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
    var result = someFunction(); // Chiamata a una funzione che potrebbe generare un'eccezione
    console.log(result);
}
catch (error) {
    // Gestione dell'eccezione o dell'errore
    console.error("Si è verificato un errore:", error);
}
finally {
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
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        console.log("Starting the engine of ".concat(this.brand, " ").concat(this.model));
        // Altri codici per avviare il motore
    };
    Car.prototype.stopEngine = function () {
        console.log("Stopping the engine of ".concat(this.brand, " ").concat(this.model));
        // Altri codici per fermare il motore
    };
    Car.prototype.honk = function () {
        console.log("Honking the horn of ".concat(this.brand, " ").concat(this.model));
        // Altri codici per suonare il clacson
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2022);
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is barking."));
    };
    return Dog;
}(Animal));
// Creazione di un oggetto della classe base
var animal = new Animal("Generic Animal");
animal.eat(); // Output: Generic Animal is eating.
// Creazione di un oggetto della classe derivata
var dog = new Dog("Bobby");
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " (").concat(this.breed, ") is barking."));
    };
    return Dog;
}(Animal));
var dog = new Dog("Bobby", "Labrador");
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("Animal is making a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Dog is barking.");
    };
    return Dog;
}(Animal));
var animal = new Animal();
var dog = new Dog();
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
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else if (typeof a === "string" && typeof b === "string") {
            return a.concat(b);
        }
    };
    return Calculator;
}());
var calculator = new Calculator();
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
