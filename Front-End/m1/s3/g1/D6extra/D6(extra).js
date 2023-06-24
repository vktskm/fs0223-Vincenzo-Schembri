// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali 
 (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
      array.push(Math.floor(Math.random() * 11));
    }
    return array;
  }
  
  function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 5) {
        console.log(arr[i] + " è maggiore di 5");
        sum += arr[i];
      } else {
        console.log(arr[i] + " non è maggiore di 5");
      }
    }
    return sum;
  }
  
  let arrayRandom = giveMeRandom(5);
  console.log(arrayRandom);
  
  console.log(checkArray(arrayRandom));
  
  /* EXTRA 2
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  const shoppingCart = [
    {
      id: 1,
      price: 100,
      name: "Tacos",
      quantity: 2,
    },
    {
      id: 2,
      price: 200,
      name: "Pizza",
      quantity: 3,
    },
  ];
  
  function shoppingCartTotal(shoppingCart) {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
  }
  
  console.log(shoppingCartTotal(shoppingCart));
  
  /* EXTRA 3
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  const object = {
    id: 3,
    price: 300,
    name: "Lasagne",
    quantity: 2,
  };
  function addToShoppingCart(shoppingCart, object) {
    shoppingCart.push(object);
    //   let totalElements = 0;
    //   for (let i = 0; i < shoppingCart.length; i++) {
    //     totalElements += shoppingCart[i].quantity;
    //   }
    //   return totalElements;
    return shoppingCart.length;
  }
  console.log(addToShoppingCart(shoppingCart, object));
  
  /* EXTRA 4
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function maxShoppingCart(arr) {
    let maxPrice = arr.reduce((a, b) => (a.price > b.price ? a : b));
    console.log(maxPrice);
  }
  
  maxShoppingCart(shoppingCart);
  
  /* EXTRA 5
   Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
   Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function latestShoppingCart(shoppingCart) {
    return shoppingCart[shoppingCart.length - 1];
  }
  
  console.log(latestShoppingCart(shoppingCart));
  
  /* EXTRA 6
   Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
   La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function loopUntil(x) {
    let consecutiveCount = 0;
    while (consecutiveCount < 3) {
      const randomNumber = Math.floor(Math.random() * 10);
      console.log(randomNumber);
      if (randomNumber > x) {
        consecutiveCount++;
      } else {
        consecutiveCount = 0;
      }
    }
  }
  
  console.log(loopUntil(5));
  
  /* EXTRA 7
  Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (
        typeof arr[i] === "number" &&
        arr[i] !== NaN &&
        typeof arr[i] !== "boolean" &&
        typeof arr[i] !== "string"
      ) {
        sum += arr[i];
        count++;
      }
    }
    if (count === 0) {
      return 0;
    } else {
      return sum / count;
    }
  }
  
  array = [1, 2, 3, 4, 5, 6, "Mario", 7, 8, 20, true];
  
  console.log(average(array));
  
  /* EXTRA 8
   Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function longest(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest;
  }
  
  array2 = ["Mario", "Gianluca", "Vincenzone"];
  
  console.log(longest(array2));
  
  /* EXTRA 9
   Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
   La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function isSpam(emailContent) {
    if (emailContent.includes("SPAM")) {
      return false;
    } else if (emailContent.includes("SCAM")) {
      return false;
    } else {
      return true;
    }
  }
  
  console.log(isSpam("gianluca.falcone@yahoo.it"));
  
  /* EXTRA 10
   Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function calcolaGiorniPassati(data) {
    let oggi = new Date();
    let differenzaMillisecondi = oggi - data.getTime();
    let millisecondiAlGiorno = 24 * 60 * 60 * 1000;
    let giorni = Math.floor(differenzaMillisecondi / millisecondiAlGiorno);
    return giorni;
  }
  
  let data = new Date(2023, 3, 1);
  
  console.log(calcolaGiorniPassati(data));
  
  /* EXTRA 11
   Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
   Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
   Es.: x = 3, y = 2
   ["00","01","02"
   "10","11","12"]
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < x; i++) {
      let row = [];
      for (let j = 0; j < y; j++) {
        row.push([i, j]);
      }
      matrix.push(row);
    }
    return matrix;
  }
  
  console.log(matrixGenerator(3, 2));

