const link = 'https://striveschool-api.herokuapp.com/api/product/';
const authorization =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTQzNjg4Zjc0MDAwMTQyODc0MzMiLCJpYXQiOjE2ODM4NzQ4NzAsImV4cCI6MTY4NTA4NDQ3MH0.8wkg0gED9S15F6rzLuMhivChWWv-6RbcbNa1x21SKms';

//Cerco nella barra dellUrl
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');

const endpoint = selectedId ? link + selectedId : link;
const method = selectedId ? 'PUT' : 'POST';
//faccio questo console log per capire se il metodo è Put O Post
//All'inizio selectedId è falso ed esegue Il metodo Post
console.log(method);

fetch(endpoint, {
    		headers: {
     				Authorization: `Bearer ${authorization}`,
    			},
     		})


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
  })
  .catch((err) => {
    console.log(err)
    // la fetch() è una funzione che torna una Promise
    // è strutturata in un modo un po' particolare: la fetch() NON REJECTERÀ MAI
  })
// window.onload = () => {
// 	if (selectedId) {
// 		document.getElementById('submit').classList.add('d-none');
// 		document.getElementById('editItem').classList.remove('d-none');
// 		document.getElementById('deleteItem').classList.remove('d-none');
         
// 		fetch(endpoint, {
// 			headers: {
// 				Authorization: `Bearer ${authorization}`,
// 			},
// 		})
// 			.then((res) => res.json())
// 			.then((prodotto) => {
    
// 				const { name, description, brand, imageUrl, price } = prodotto;
// 				document.getElementById('name').value = name;
// 				document.getElementById('description').value = description;
// 				document.getElementById('brand').value = brand;
// 				document.getElementById('imageUrl').value = imageUrl;
// 				document.getElementById('price').value = price;
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}
// };

// const getProducts = (event) => {
// 	event.preventDefault();

// 	const article = {
// 		name: document.getElementById('name').value,
// 		description: document.getElementById('description').value,
// 		brand: document.getElementById('brand').value,
// 		imageUrl: document.getElementById('imageUrl').value,
// 		price: document.getElementById('price').value,
// 	};

// 	fetch(endpoint, {
// 		method: method,
// 		headers: {
// 			Authorization: `Bearer ${authorization}`,
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(article),
// 	})
// 		.then(() => {
// 			document.getElementById('name').value = '';
// 			document.getElementById('description').value = '';
// 			document.getElementById('brand').value = '';
// 			document.getElementById('imageUrl').value = '';
// 			document.getElementById('price').value = '';
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 		});
// };

// const deleteProduct = () => {
// 	const hasAccepted = confirm("Stai eliminando il prodotto");
// 	if (hasAccepted) {
// 		fetch(endpoint, {
// 			method: 'DELETE',
// 			headers: {
// 				Authorization: `Bearer ${authorization}`,
// 			},
// 		})
// 			.then((res) => {
// 				if (res.ok) {
// 					alert('Prodotto è stato eliminato');
// 				} else {
// 					throw new Error("Error");
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				alert("Error: Il prodotto non è stato eliminato");
// 			});
// 	}
// };

// function preview() {
// 	let inputPic = document.getElementById('imageUrl');
// 	let frame = document.getElementById('frame');
// 	frame.src = inputPic.value;
// }
// function clearImage() {
// 	let inputPic = document.getElementById('imageUrl');
// 	let frame = document.getElementById('frame');
// 	inputPic.value = null;
// 	frame.src = '';
// }