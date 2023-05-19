let API = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

let allSearchBtn = document.querySelectorAll('.search-navbar')
let mainSearch = document.getElementById('rowPrincipal')
let staticCards = document.querySelector('.static-cards')

allSearchBtn.forEach((searchBtn)=>{
searchBtn.addEventListener('click', () => {
    staticCards.classList.add('d-none')
    let searchTemplate = `
        <div class="container-fluid">
        <h2 class="my-4">Cerca</h2>
        <div class="row">
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                <input type="text" class="form-control" placeholder="Cosa vuoi ascoltare?" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
            <div class="row ms-0" id="searchCards">
            <h3 class="text-center">Sfoglia tutto</h3>
                <div class="col-6 col-md-4">
                    <div class="card p-2 my-2">
                        <a href="#">
                            <h4>Podcast</h4>
                            <img src="assets/imgs/search/image-2.jpg"> 
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card2 p-2 my-2">
                        <a href="#">
                            <h4>Create per te</h4>
                            <img src="assets/imgs/search/image-42.png">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card3 p-2 my-2">
                        <a href="#">
                            <h4>Nuove uscite</h4>
                            <img src="assets/imgs/search/image-26.jpg">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card4 p-2 my-2">
                        <a href="#">
                            <h4>Pop</h4>
                            <img src="assets/imgs/search/image-47.jpg">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card5 p-2 my-2">
                        <a href="#">
                        <h4>Hip Pop</h4>
                        <img src="assets/imgs/search/image-49.jpg">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card6 p-2 my-2">
                    <a href="#">
                        <h4>Dance/Elettronica</h4>
                        <img src="assets/imgs/search/image-7.jpg">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card7 p-2 my-2">
                    <a href="#">
                        <h4>Latina</h4>
                        <img src="assets/imgs/search/image-5.jpg">
                        </a>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card8 p-2 my-2">
                    <a href="#">
                        <h4>Classifiche</h4>
                        <img src="assets/imgs/search/image-14.jpg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `
    mainSearch.innerHTML = searchTemplate
    let customInputField = document.querySelector('.input-group .form-control')
    let customSearchButton = document.querySelector('#button-addon1')
    customSearchButton.addEventListener('click', () => {
    let allCard = document.querySelectorAll('.card h3')
    
        
       getSongs(customInputField.value);
    })
})
})
    const getSongs = function (query) {
    fetch(API + query)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Error getting the images')
            }
        })
        .then((songs) => {
            console.log(songs.data)
            let data = songs.data
            let allCard = document.querySelectorAll('.card h4')
            allLink = document.querySelectorAll('.card a')
            allCard.forEach(h4=>{h4.classList.add('z-3')})
            let imgCard = document.querySelectorAll('.card img')
            console.log(allCard);
           for (let i = 0; i < allCard.length; i++) {
                allCard[i].innerHTML = data[i].title
                imgCard[i].src = data[i].album.cover_medium
                allLink[i].href = 'index.html?albumID='+ data[i].album.id
           }
       
        })
        .catch((err) => {
            console.log(err)
        })
}



