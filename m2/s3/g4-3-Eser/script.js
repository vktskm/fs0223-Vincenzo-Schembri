const PEXELS_URL = 'https://api.pexels.com/v1/search?query='

const fillImageInModal = function (context) {
  let imgIntoModal = document.querySelector('.modal img')
  imgIntoModal.src =
    context.parentElement.parentElement.parentElement.parentElement.querySelector(
      'img'
    ).src
}

const hideColumn = function (context) {
  console.log('context', context)
  let rightColToDelete = context.closest('.col-md-4')
  rightColToDelete.remove()
}

let productModel = {
  name: 'Nokia 3310',
  description: 'Indistruttibile!',
  price: 10,
  imageUrl: 'https://m.media-amazon.com/images/I/614r6gJOBeL._AC_SY879_.jpg',
  brand: 'Nokia',
}

const fetchProducts = () => {
  fetch('https://striveschool-api.herokuapp.com/api/product', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzg1Zjc4MjU5N2I5ZDAwMTU0NTM4NmIiLCJpYXQiOjE2ODM4NzUzOTUsImV4cCI6MTY4NTA4NDk5NX0.vN65GQSWbJK7u7UgHLYSRy471WNHrQK0nfXkCRy2jHw',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}

fetchProducts()

const renderCards = function (photos) {
  // svuoto la row
  let row = document.querySelector('.album .container .row')
  row.innerHTML = ''
  photos.forEach((photo) => {
    let colTemplate = `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
        <a href="./details.html?photoId=${photo.id}">
            <img src=${photo.src.small}} style="width: 100%" />
        </a>
            <div class="card-body">
            <a href="./details.html?photoId=${photo.id}">
                <h5 class="card-title">Lorem Ipsum</h5>
            </a>
                <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                <div class="btn-group">
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        onclick="fillImageInModal(this)"
                    >
                        View
                    </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    onclick="hideColumn(this)"
                    >
                    Hide
                    </button>
                </div>
                <small class="text-muted">${photo.id}</small>
                </div>
            </div>
        </div>
    </div>
    `
    row.innerHTML += colTemplate
  })
}

const getImages = function (query) {
  fetch(PEXELS_URL + query, {
    headers: {
      authorization: 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error getting the images')
      }
    })
    .then((data) => {
      console.log(data)
      // rimpiazzo il DOM
      renderCards(data.photos)
    })
    .catch((err) => {
      console.log(err)
    })
}

window.onload = function () {
  let primaryButton = document.querySelector('.btn-primary')
  primaryButton.addEventListener('click', () => {
    getImages('mountains')
  })

  let secondaryButton = document.querySelector('.btn-secondary')
  secondaryButton.addEventListener('click', () => {
    getImages('sunsets')
  })

  let customInputField = document.querySelector('.input-group .form-control')
  let customSearchButton = document.querySelector(
    '.input-group .btn-outline-secondary'
  )
  customSearchButton.addEventListener('click', () => {
    getImages(customInputField.value)
  })
}
