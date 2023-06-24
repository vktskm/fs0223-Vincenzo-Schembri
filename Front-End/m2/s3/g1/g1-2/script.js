class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

	static ageComparison(A, B) {
		if (A.age > B.age) {
			return A.firstName + ' is older than ' + B.firstName;
		} else {
			return B.firstName + ' is older than ' + A.firstName;
		}
	}
}

let users = [
	new User('Vincenzo', 'Schembri', 32, 'Licata'),
	new User('Giuseppe', 'Maria', 29, 'Zurich'),
	new User('Dario', 'Porta', 39, 'Baden'),
	new User('Antonino', 'Fallica', 41, 'Zurich'),
];

console.log(User.ageComparison(users[0], users[3]));
console.log(User.ageComparison(users[1], users[2]));

///// FORM PET /////
let pets = [];

class Pet {
	constructor(petName, ownerName, petSpecies, petBreed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.petSpecies = petSpecies;
		this.petBreed = petBreed;
	}

	static sameOwner(A , B) {
		if (A.ownerName === B.ownerName) {
			return true;
		} else {
			return false;
		}
	}
}

// logica per creare la lista
const createList = function () {
	// selezionare il tag <ul>
	let listReference = document.querySelector('#users-list')
	// svuotare la lista prima della creazione degli <li>
	listReference.innerHTML = ''
	// ciclare l'array users
	pets.forEach((user, i) => {
	  // per ogni elemento di users deve creare un <li>
	  let newListItem = document.createElement('li')
	  // <li></li>
	  newListItem.innerText =
	  'PetName  ' +  user.petName + ' OwnerName  ' + user.ownerName +
	  ' PetSpecies ' +  user.petSpecies + '  OwnerBreed' + user.petBreed +
	  '  ' +
	  Pet.sameOwner(user, pets[i - 1] ? pets[i - 1] : {}) // comparo l'utente corrente con l'utente precedente nell'array users
	  // <li>Mario Bros</li>
	  // ora devo aggiungerlo al tag <ul>
	  listReference.appendChild(newListItem)
	})
  }
  


let petInputName = document.getElementById('petName')
let ownerInputName = document.getElementById('ownerName')
let petInputSpecies = document.getElementById('petSpecies')
let petInputBreed = document.getElementById('petBreed')


let formReference = document.querySelector('form')
formReference.addEventListener('submit', (e) => {
  e.preventDefault() // così la pagina non si aggiorna
  // creo un oggetto di tipo User generando un'istanza della classe User
  let userFromTheForm = new Pet(petInputName.value , ownerInputName.value , petInputSpecies.value , petInputBreed.value)
  console.log(userFromTheForm)
  console.log(pets)
  // inseriamo userFromTheForm dentro l'array users
  pets.push(userFromTheForm)
  // svuotiamo i campi del form
  petInputName.value = '' // mette '' come valore di name
  ownerInputName.value = '' // mette '' come valore di surname
  petInputSpecies.value = '' // mette '' come valore di name
  petInputBreed.value = ''
  createList()    
})

