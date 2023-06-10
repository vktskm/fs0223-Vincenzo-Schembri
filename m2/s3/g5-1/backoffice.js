const link = 'https://striveschool-api.herokuapp.com/api/product/';
const authorization =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTQzNjg4Zjc0MDAwMTQyODc0MzMiLCJpYXQiOjE2ODM4NzQ4NzAsImV4cCI6MTY4NTA4NDQ3MH0.8wkg0gED9S15F6rzLuMhivChWWv-6RbcbNa1x21SKms';

//Cerco nella barra dellUrl
const URLParams = new URLSearchParams(window.location.search);
console.log("URLParams " , URLParams)
const selectedId = URLParams.get('id');
console.log("selectedId ", selectedId)

const endpoint = selectedId ? link + selectedId : link;
console.log( "endpoint" , endpoint);
const method = selectedId ? 'PUT' : 'POST';
//faccio questo console log per capire se il metodo è Put O Post
//All'inizio selectedId è falso ed esegue Il metodo Post
console.log( "method" , method);

window.onload = () => {
	if (selectedId) {
		document.getElementById('submit').classList.add('d-none');
		document.getElementById('editItem').classList.remove('d-none');
		document.getElementById('deleteItem').classList.remove('d-none');
         
		fetch(endpoint, {
			headers: {
				Authorization: `Bearer ${authorization}`,
			},
		})
			.then((res) => res.json())
			.then((prodotto) => {
                console.log("SelectedId è diversa da null ed eseguo PUT")
				const { name, description, brand, imageUrl, price } = prodotto;
				document.getElementById('name').value = name;
				document.getElementById('description').value = description;
				document.getElementById('brand').value = brand;
				document.getElementById('imageUrl').value = imageUrl;
				document.getElementById('price').value = price;
			})
			.catch((err) => {
				console.log(err);
			});
	}
	// fine del if
};

const getProducts = (event) => {
	event.preventDefault();

	const article = {
		name: document.getElementById('name').value,
		description: document.getElementById('description').value,
		brand: document.getElementById('brand').value,
		imageUrl: document.getElementById('imageUrl').value,
		price: document.getElementById('price').value,
	};

	fetch(endpoint, {
		method: method,
		headers: {
			Authorization: `Bearer ${authorization}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(article),
	})
		.then(() => {
			console.log("selectedId è null ed eseguo POST")
			document.getElementById('name').value = '';
			document.getElementById('description').value = '';
			document.getElementById('brand').value = '';
			document.getElementById('imageUrl').value = '';
			document.getElementById('price').value = '';
		})
		.catch((err) => {
			console.log(err);
		});
};

const deleteProduct = () => {
	const hasAccepted = confirm("Stai eliminando il prodotto");
	console.log("hasAccepted", hasAccepted)
	if (hasAccepted) {
		fetch(endpoint, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${authorization}`,
			},
		})
			.then((res) => {
				if (res.ok) {
					alert('Prodotto è stato eliminato');
				} else {
					throw new Error("Error");
				}
			})
			.catch((err) => {
				console.log(err);
				alert("Error: Il prodotto non è stato eliminato");
			});
	}
};

function preview() {
	let inputPic = document.getElementById('imageUrl');
	let frame = document.getElementById('frame');
	frame.src = inputPic.value;
}
function clearImage() {
	let inputPic = document.getElementById('imageUrl');
	let frame = document.getElementById('frame');
	inputPic.value = null;
	frame.src = '';
}