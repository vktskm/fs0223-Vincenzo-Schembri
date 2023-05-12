// prendiamoci i riferimenti ai due input
let nameInputField = document.getElementById('name')
let surnameInputField = document.getElementById('surname')

let users = [] // array di oggetti di tipo User

class User {
  // mi interessa generare oggetti con 2 proprietà: name e surname, di tipo stringa
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  static compareNames = function (user1, user2) {
    // metodo statico, non sarà trasportato nelle istanze
    return user1.name === user2.name
  }
}

// logica per creare la lista
const createList = function () {
  // selezionare il tag <ul>
  let listReference = document.querySelector('#users-list')
  // svuotare la lista prima della creazione degli <li>
  listReference.innerHTML = ''
  // ciclare l'array users
  users.forEach((user, i) => {
    // per ogni elemento di users deve creare un <li>
    let newListItem = document.createElement('li')
    // <li></li>
    newListItem.innerText =
      user.name +
      ' ' +
      user.surname +
      ' ' +
      User.compareNames(user, users[i - 1] ? users[i - 1] : {}) // comparo l'utente corrente con l'utente precedente nell'array users
    // <li>Mario Bros</li>
    // ora devo aggiungerlo al tag <ul>
    listReference.appendChild(newListItem)
  })
}

// logica per il tasto SALVA UTENTE
let formReference = document.querySelector('form')
formReference.addEventListener('submit', (e) => {
  e.preventDefault() // così la pagina non si aggiorna
  // creo un oggetto di tipo User generando un'istanza della classe User
  let userFromTheForm = new User(nameInputField.value, surnameInputField.value)
  console.log(userFromTheForm)
  // inseriamo userFromTheForm dentro l'array users
  users.push(userFromTheForm)
  // svuotiamo i campi del form
  nameInputField.value = '' // mette '' come valore di name
  surnameInputField.value = '' // mette '' come valore di surname
  // aggiornare la lista
  createList()
})
