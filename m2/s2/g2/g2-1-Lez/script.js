console.log('Hello world!')

// Vogliamo collegare i bottoni del button-group alla seguente funzionalità:
// al click di ogni bottone verrà assegnata la classe "active" al <li> corrispondente
// nel list-group

// prendo un riferimento ai 5 bottoni del list group
// il loro contenitore ha come id "main-buttons"
// uso querySelectorAll per selezionare i 5 bottoni e ritornarli all'interno di un array
let fiveButtonsArray = document.querySelectorAll('#main-buttons button')
console.log(fiveButtonsArray)

// uso un altro querySelectorAll per selezionare i 5 list-items e ritornarli all'interno di un array
let fiveListGroupItemsArray = document.querySelectorAll('#list-items li')
console.log(fiveListGroupItemsArray)

// scriviamo una funzione che accenderà uno dei list-group-items programmaticamente
const activateListGroupItem = function (elementIndexToActivate) {
  // andiamo a selezionare l'elemento corretto dentro fiveListGroupItemsArray
  const rightElementToActivate = fiveListGroupItemsArray[elementIndexToActivate] // questo è il primo list-group-item, oppure il secondo, etc. etc.
  rightElementToActivate.classList.add('active')
}

const cleanAllActives = function () {
  // questa funzione ripulisce i list-group-items da eventuali classi active precedentemente applicate
  fiveListGroupItemsArray.forEach((currentListGroupItem) => {
    // accertiamoci che currentListGroupItem NON abbia la classe active, rimuovendola
    currentListGroupItem.classList.remove('active')
  })
}

for (let i = 0; i < fiveButtonsArray.length; i++) {
  // questo ciclo verrà eseguito 5 volte, i diventerà 0 1 2 3 4
  // fiveButtonsArray[i].addEventListener('click', () => {})
  fiveButtonsArray[i].onclick = function () {
    // qua però devo anche accertarmi che NON ci siano altri elementi con la classe "active" già applicata
    cleanAllActives()

    // il primo bottone deve accendere il primo list-group-item
    // il secondo bottone deve accendere il secondo list-group-item
    // etc. etc.
    activateListGroupItem(i)
  }
}

// SEZIONE FORM
// prendiamo un riferimento al form nella pagina
// let formReference = document.querySelector('#main-form')
let formReference = document.getElementById('main-form')
// assegniamo un comportamento all'evento "submit": verrà azionato al click del pulsante di tipo "submit"
// o anche alla pressione del tasto "invio" in uno qualunque dei campi
formReference.addEventListener('submit', (e) => {
  // PRIMA COSA DA FARE QUANDO SI LAVORA CON L'ONSUBMIT: disabilitare il comportamento di default dei browser
  // oggi vogliamo prendere i dati nel form e lavorarci ma senza aggiornare la pagina
  e.preventDefault()
  console.log('CIAONE! leggiamo il contenuto del form:')
  // ora che abbiamo stoppato la pagina dal ricaricarsi, proseguiamo con la nostra logica
  // recuperiamo i dati del form e li stampiamo in console
  // selezioniamo, uno per uno, i campi (<input />) del form e ne leggiamo la proprietà "value"

  // CAMPO EMAIL
  let emailField = document.getElementById('exampleInputEmail1')
  console.log('EMAIL', emailField.value) // value è l'attuale contenuto dell'input

  // CAMPO PASSWORD
  let passwordField = document.querySelector('#exampleInputPassword1')
  console.log('PASSWORD', passwordField.value) // value è l'attuale contenuto dell'input

  // CAMPO SELECT
  let selectField = document.getElementById('select-field')
  console.log('SELECT', selectField.value) // value è l'attuale contenuto dell'input

  // CAMPO CHECKBOX
  let checkboxField = document.getElementById('exampleCheck1')
  console.log('CHECKBOX', checkboxField.checked) // per le checkboxes ha più senso controllare la proprietà "checked" (torna true/false)
})
