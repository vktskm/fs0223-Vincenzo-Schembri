// impariamo ad usare il metodo fetch()
// oggi testiamo due metodi HTTP: GET e POST
// GET -> recupera dati
// POST -> crea un nuovo dato

// fetch() TORNA UNA PROMISE!

// come funziona?
// ci sono due parametri che possiamo inserire, il primo (obbligatorio) è l'indirizzo, l'endpoint della risorsa
// il secondo è un oggetto di inizializzazione, che si utilizza per passare il metodo, l'autorizzazione, il body etc.
// non serve sempre specificare l'oggetto di inizializzazione, il secondo parametro, perchè fetch()
// di default utilizzerà sempre GET

fetch('https://jsonplaceholder.typicode.com/stefano')
  .then((res) => {
    console.log(res)
    // qui dentro effettuo tutte le operazioni che voglio fare con la response
    // cosa possiede res?
    // .ok <-- la proprietà ok riassume in un booleano se l'operazione è andata a buon fine
    if (res.ok) {
      // res.ok vi conferma che l'operazione è andata a buon fine
      // se res.ok === false significa che avete ricevuto un 404, un 500, etc.

      // è dalla proprietà ok che sappiamo se la chiamata è andata a buon fine
      // in questo caso proseguiamo l'esplorazione di questa response

      // ma noi vogliamo i dati!
      // li troveremo come valore di ritorno di .json()
      // ma .json() torna una Promise
      return res.json() // <-- troveremo il dato cercato nel prossimo .then()
    } else {
      // qui c'è stato un problema nell'elaborazione della nostra richiesta
      // 401, 404, 500, etc.
      throw new Error('Errore nel contattare il server')
    }
  })
  .then((data) => {
    console.log('DATI OTTENUTI DAL .JSON() SU RESPONSE', data)
    // qui ho i dati che venivano veicolati dalla Response
    renderList(data)
  })
  .catch((err) => {
    console.log(err)
    // la fetch() è una funzione che torna una Promise
    // è strutturata in un modo un po' particolare: la fetch() NON REJECTERÀ MAI
  })

// occhio che fuori dal blocco .then() res non esiste!
// console.log(res)

const renderList = function (users) {
  let usersList = document.getElementById('users-list')
  users.forEach((user) => {
    let newLi = document.createElement('li')
    newLi.innerText = user.name + ' | ' + user.email
    usersList.appendChild(newLi)
  })
}
