const link = 'https://striveschool-api.herokuapp.com/api/product/';
const authorization =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZTQzNjg4Zjc0MDAwMTQyODc0MzMiLCJpYXQiOjE2ODM4NzQ4NzAsImV4cCI6MTY4NTA4NDQ3MH0.8wkg0gED9S15F6rzLuMhivChWWv-6RbcbNa1x21SKms';

const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get('id');

const endpoint = selectedId ? link + selectedId : link;
const method = selectedId ? 'PUT' : 'POST';

window.onload = () => {
	fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${authorization}`,
		},
	})
		.then((resp) => resp.json())
		.then((data) => {
			const product = data;

			const container = document.getElementById('productContainer');
			container.innerHTML = `
								<h2> ${product.name} </h2>
								<hr class="border border-2 border-primary"
								<div class="container container-fluid my-2">
									<div class="row"> 
										<div class="col-5"> 
										<img src="${product.imageUrl}" class="img-fluid border border-2 border-secondary">
										</div>
										<div class="col-7"> 
                                        <div class="card-text">
                                        <h3>Brand : </h3><br><p>${product.brand}</p>
                                        </div>
                                        <div class="card-text">
                                        <h3>Descrizione : </h3><br><p>${product.description}</p>
                                        </div>
                                        <div class="card-text">
                                        <h3>Prezzo : </h3><br><p>${product.price}</p>
                                        </div>
                                        </div>
										<div class="d-flex justify-content-end">
										<a href="backoffice.html?id=${product._id}" class="btn btn-secondary">Edit</a>
									  </div>
									</div>
								</div>
      `;
		})
		.catch((err) => {
			console.log(err);
		});
};