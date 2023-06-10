const PIXELS_SINGLE_URL = 'https://api.pexels.com/v1/photos/'

const fillDetailsPage = function (imageDetails) {
  let colContent = `
        <img src=${imageDetails.src.large} style="width: 100%"/>
        <div>
        <a href=${imageDetails.photographer_url}>${imageDetails.photographer}</a>
        </div>
        <div>
        <a href="./Starting-template.html">INDIETRO</a>
        </div>
    `
  let colToFill = document.querySelector('.col-12.col-md-8')
  colToFill.innerHTML = colContent
  // cambio il colore di sfondo
  let jumbo = document.querySelector('.jumbotron')
  jumbo.style.backgroundColor = imageDetails.avg_color
}

const getSingleImage = function () {
  let photoIdFromAddressBar = new URLSearchParams(window.location.search).get(
    'photoId'
  )
  fetch(PIXELS_SINGLE_URL + photoIdFromAddressBar, {
    headers: {
      authorization: 'TXAl4tsq0AH939vI13rKvpyMo7xSgfkSwtTUiEnLKjjvEI0zqABAVoL5',
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error getting single image details')
      }
    })
    .then((singleImageDetails) => {
      console.log('SINGLE IMAGE DETAILS', singleImageDetails)
      fillDetailsPage(singleImageDetails)
    })
    .catch((err) => {
      console.log(err)
    })
}

window.onload = function () {
  getSingleImage()
}
