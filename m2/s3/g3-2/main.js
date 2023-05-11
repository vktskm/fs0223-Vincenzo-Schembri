// fecth di default usa il metodo Get
fetch('https://striveschool-api.herokuapp.com/books')
	.then((resObj) => {
		console.log(resObj)
		
		if(resObj.ok){
			return resObj.json()
        }else{
			   console.log('ERRORE');
			   throw new Error("Conclude la funzione e mi porta in catch")
            }
	    })

	.then((library) => {

		let container = document.querySelector('#container');
		let row = document.createElement('div');
		row.classList.add('row');
		row.classList.add('row-cols-3');
		row.classList.add('g-5');
		container.appendChild(row);

		library.forEach((book) => {
			let col = document.createElement('div');
			col.classList.add('col');
			col.className = 'col';
			col.innerHTML = `
			<div class="card "  style="height: 500px;">
				<img src="${book.img}" class="card-img-top img-fluid" alt="book" style="height: 300px">
				<div class="card-body">
					<h5 class="card-title fs-5">${book.title}</h5>
                    <p class="card-text fs-5 mx-2">Price € ${book.price}</p>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-success" id="buyButton"> Purchase </button>
                        <button class="btn btn-danger" id="deleteButton"> Delete </button>
                    </div>
				</div>
			</div>
		`;

		// collegamento bottone distruggi
		let deleteBtn = col.querySelector('#deleteButton');
		deleteBtn.addEventListener('click', () => {
		col.remove();
		});
		// collegamento con la lista non ordinata ul
		let cartList = document.getElementById('cartList');
		if (cartList.innerHTML == '') {
		 	 	cartList.textContent = "There are no books";
		}

        //collegamento bottone compra 
		let buyBtn = col.querySelector('#buyButton');
		buyBtn.addEventListener('click', () => {
		// creo il volume con vol
		let vol = document.createElement('div');
		vol.classList.add('px-3');
		vol.classList.add('d-flex');
		vol.classList.add('justify-content-between');
		vol.classList.add('align-items-center');

		let cartElement = document.createElement('li');
		cartElement.innerHTML =
		`<img src="${book.img}" alt="book cover" style="width: 30px" class="pe-2 py-2">`+` ${book.title}`;

		let remove = document.createElement('button');
		remove.classList.add('btn-secondary');
		remove.textContent = 'Click Remove';

		vol.appendChild(cartElement);
		vol.appendChild(remove);
		cartList.appendChild(vol);
        
		// creo localStorage
		let title = "Titoli";
		let booksTitle = [];

		if( localStorage.getItem(title)){
			booksTitle = JSON.parse(localStorage.getItem(title));
		}
		booksTitle.push(`${book.title}`)
		localStorage.setItem( title, JSON.stringify(booksTitle));
		

		// quando clicco sul bottone cestino di dropdown scateno questo addEventListener
		remove.addEventListener('click', () => {
		vol.remove();
		localStorage.removeItem( title,JSON.stringify(booksTitle));
            });

			});// fine funzione addEventListener buyBtn

			row.appendChild(col);
		});
	})

	.catch((error) => console.log('CATCH', error));
