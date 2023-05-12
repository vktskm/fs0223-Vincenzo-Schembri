const clicked = (bookId) => {
  console.log('clicked', bookId)
  // questo bottone deve sapere da quale card è stato cliccato!s
}

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((res) => {
    // finiremo qui se la Promise viene risolta
    // cosa torna fetch()? un oggetto Response
    // Response è un oggetto che contiene molte informazioni sulla chiamata
    // la proprietà più importante si chiama "ok", che ci dirà a colpo d'occhio
    // se la chiamata è andata a buon fine oppure no
    if (res.ok) {
      // proviamo ad estrarre i dati
      // possiamo utilizzare il metodo .json(), che ritorna i dati della risposta
      // PERO' in una Promise!
      return res.json()
    } else {
      // NON proviamo ad estrarre i dati, qualcosa è andato storto!
      console.log('Errore!')
      throw new Error("Errore nell'esecuzione della chiamata")
      // throw new Error() ci porta automaticamente nel blocco catch()
      // e possiamo gestire l'errore lì!
    }
  })
  .then((photos) => {
    // questo ulteriore, secondo blocco then aspetta il termine della Promise .json()
    // e quindi come parametro si ritrova il valore di ritorno di .json(), i dati che cercavamo in origine!
    console.log('photos', photos)
    // ora qui dentro posso manipolare l'array, trasformarlo, prenderne una parte, manipolare il DOM
    // prendo un riferimento alla row principale
    let mainRow = document.getElementById('main-row')
    photos.forEach((photo) => {
      // creiamo una colonna con larghezza 3 o 4
      let col = document.createElement('div')
      col.classList.add('col-12', 'col-lg-3') // <div class="col-12 col-lg-3"></div>
      col.innerHTML = `
        <div class="card">
            <img src=${photo.url} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary" onclick="clicked()">Go somewhere</a>
            /div>
        </div>
        `
      mainRow.appendChild(col)
    })
  })
  .catch((error) => {
    // finiremo qui se la Promise viene rifiutata
    // mancanza di connettività, internet limitato e così via...
    console.log(error)
  })

// HINT x CART :)
localStorage.setItem('cart', '[]')

let currentCart = localStorage.getItem('cart')
currentCart = JSON.parse(currentCart)
currentCart.push({ id: 5 })
currentCart = JSON.stringify(currentCart)
localStorage.setItem(cart, currentCart)
