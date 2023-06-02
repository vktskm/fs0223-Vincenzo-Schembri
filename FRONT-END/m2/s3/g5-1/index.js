const link = 'https://striveschool-api.herokuapp.com/api/product/';
const authorization =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTQzNjg4Zjc0MDAwMTQyODc0MzMiLCJpYXQiOjE2ODM4NzQ4NzAsImV4cCI6MTY4NTA4NDQ3MH0.8wkg0gED9S15F6rzLuMhivChWWv-6RbcbNa1x21SKms';

window.onload = () => {
	fetch(link, {
		headers: {
			Authorization: `Bearer ${authorization}`,
		},
	})
		.then((resObj) => resObj.json())
		.then((products) => {
			let row = document.getElementById('rowCard');
			products.forEach((product) => {
				const card = document.createElement('div');
				card.classList.add('col');
				card.innerHTML = `
                                <div class="card bg-light mt-4">
                                <img src="${product.imageUrl}" alt="logo" class="img-fluid">
                                <div class="card-body">
                                    <h4 class="card-title"> ${product.name}</h4>
                                    <p class="card-text"> ${product.brand}</p>
                                    <p class="card-text">${product.price}</p>
                                    <p class="card-text">${product.description}</p>
                                    <div class="d-flex justify-content-around">
                                       <a href="details.html?id=${product._id}" class="btn btn-info">Dettagli</a>
                                       <a href="backoffice.html?id=${product._id}" class="btn btn-warning">Modifica</a>
                                    </div>
                                </div>
                                </div>
      `;
			row.appendChild(card);
			});
		})
		.catch((error) => console.error(error));
};