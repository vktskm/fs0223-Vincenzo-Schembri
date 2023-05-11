let primaryBtn = document.getElementById('primaryLoad');
let secondaryBtn = document.getElementById('secondaryLoad');

let searchInput = document.getElementById('searchBar');
let searchBtn = document.getElementById('searchButton');

let prImgs = async () => {
	try {
		let loadedImg = await fetch('https://api.pexels.com/v1/search?query=sicily', {
			headers: new Headers({
				Authorization: 'D9IUX0tLGXtgB5oLTkaF8QdgWxqD4bluQgcmDacZ84nxTnziFSk8tl2a',
			}),
		});
		let elements = await loadedImg.json();
		let photos = elements.photos;

		primaryBtn.addEventListener('click', () => {
			let cards = document.querySelectorAll('.card');
			cards.forEach((card, index) => {
				let photo = photos[index];
				card.innerHTML = `<img src="${photo.src.landscape}" alt="${photo.alt}">
									<div class="card-body">
										<h5 class="card-title">${photo.alt}</h5>
										<p class="card-text"> This photo was taken by ${photo.photographer}</p>
										<div class="d-flex justify-content-between align-items-center">
											<div class="btn-group">
												<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal-${index}"> View </button>
												<div class="modal fade" id="exampleModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel"
													aria-hidden="true">
													<div class="modal-dialog">
													<div class="modal-content text-light text-center" style="background-color: ${photo.avg_color}">
														<div class="modal-header">
														<h5 class="modal-title" id="exampleModalLabel">${photo.alt}</h5>
														<button type="button" class="close" data-dismiss="modal" aria-label="Close">
															<span aria-hidden="true">&times;</span>
														</button>
														</div>
														<div class="modal-body text-center" >
														<img src="${photo.src.small}" alt="${photo.alt}" class>
														<p class="card-text py-3 fs-3 text-light"> This photo was taken by ${photo.photographer} | <span><a
																href="${photo.photographer_url}"> Discover more</a></span></p>
														</div>
														<div class="modal-footer">
														<p class="text-center py-3 fs-5 text-light"> Photo ID: ${photo.id} </p>
														</div>
													</div>
													</div>
												</div>
											<button type="button" class="btn btn-sm btn-outline-secondary">
											Hide
											</button>
										</div>
										<small class="text-muted">${photo.id}</small>
										</div>`;
			});
		});
	} catch (error) {
		console.log(error);
	}
};
prImgs();


fetch('https://api.pexels.com/v1/search?query=milano', {
	headers: {
		Authorization: 'D9IUX0tLGXtgB5oLTkaF8QdgWxqD4bluQgcmDacZ84nxTnziFSk8tl2a'
	}
})
.then((response) => {
    console.log('oggetto response', response)
    if (response.ok) {
       return response.json()
    } else {
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((photos) => {
    // ora siamo riusciti ad aspettare correttamente la fine del metodo .json()
    // e abbiamo ottenuto finalmente l'array di foto che cercavamo dalla riga 7!
    // ed è quindi solamente qui che abbiamo accesso alle foto!
    console.log('foto ottenute: ', photos)

	function changePhotos() {
		let cards = document.querySelectorAll('.card');
		cards.forEach((card, index) => {
			let photo = photos[index];
			card.innerHTML = `<img src="${photo.src.landscape}" alt="${photo.alt}">
			<div class="card-body">
				<h5 class="card-title">${photo.alt}</h5>
				<p class="card-text"> This photo was taken by ${photo.photographer}</p>
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal-${index}"> View </button>
						<div class="modal fade" id="exampleModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel"
							aria-hidden="true">
							<div class="modal-dialog">
							<div class="modal-content text-light text-center" style="background-color: ${photo.avg_color}">
								<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">${photo.alt}</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								</div>
								<div class="modal-body text-center" >
								<img src="${photo.src.small}" alt="${photo.alt}" class>
								<p class="card-text py-3 fs-3 text-light"> This photo was taken by ${photo.photographer} | <span><a
										href="${photo.photographer_url}"> Discover more</a></span></p>
								</div>
								<div class="modal-footer">
								<p class="text-center py-3 fs-5 text-light"> Photo ID: ${photo.id} </p>
								</div>
							</div>
							</div>
						</div>
					<button type="button" class="btn btn-sm btn-outline-secondary">
					Hide
					</button>
				</div>
				<small class="text-muted">${photo.id}</small>
				</div>`;
		});
	}
	changePhotos();
  

  })
  .catch((error) => {
    // la fetch è stata rejectata :(
    console.log(error)
  })


