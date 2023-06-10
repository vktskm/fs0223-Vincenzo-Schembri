function convertiSecondi(secondi) {
    let ore = Math.floor(secondi / 3600);
    let minuti = Math.floor((secondi % 3600) / 60);
    let secondiRimanenti = secondi % 60;
  
    let risultato = "";
    if (ore > 0) {
        if(ore == 1){
            risultato += ore + " ora ";
        }else{
            risultato += ore + " ore ";
        }
    }
    if (minuti > 0) {
      risultato += minuti + " min ";
    }
    if (secondiRimanenti > 0) {
      risultato += secondiRimanenti + " sec.";
    }
  
    return risultato;
}

function convertiSecondiPerBrano(secondi) {
    let minuti = Math.floor((secondi % 3600) / 60);
    let secondiRimanenti = secondi % 60;
  
    let risultato = "";
    if( minuti < 10 ){
        risultato += '0' + minuti + ":";
    }else{
        risultato += minuti + ":";
    }
    if( secondiRimanenti < 10 ){
        risultato += '0' + secondiRimanenti;
    } else{
      risultato += secondiRimanenti;
    }
  
    return risultato;
}

function createPageAlbum(){
    const URL = new URLSearchParams(window.location.search);
    const albumID = URL.get('albumID');

let albumCover = document.getElementById('album-cover');
let albumTitle = document.getElementById('album-title');
let albumInfo = document.getElementById('album-info');
let trackListHeader = document.getElementById('track-list-header');

fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumID)
.then( res => {
    if(res.ok){
        return res.json();
    }else{
        throw new Error("Errore nella richiesta dell'album!");
    }
})
.then( albumData => {

    let main = document.getElementById('rowPrincipal');

    main.innerHTML = `
    <div class="container-fluid text-white mb-4">
        <div class="row">
                <div class="col-3 pe-0 text-end my-auto" id="album-cover"></div>
                <div class="col align-self-end">
                    <h6 class="text-uppercase small">album</h6>
                    <h1 id="album-title" class="fw-bold"></h1>
                    <div class="d-flex" id="album-info"></div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark bg-opacity-75 text-light">
            <div class="row mx-5">
                <div class="col fs-3">
                    <i class="bi bi-play-circle-fill fs-1 ms-1 play-button"></i>
                    <i class="icon-row bi bi-heart mx-3"></i>
                    <i class="icon-row bi bi-arrow-down-circle me-3"></i>
                    <i class="icon-row bi bi-three-dots"></i>
            </div>
            </div>
            <div class="row">
                <div class="col track-list-header" id="track-list-header">
                    <div class="row border-bottom border-secondary pb-2 mx-5">
                        <div class="col-1 text-end">
                            <span class="pe-2 small">#</span>
                        </div>
                        <div class="col-5">
                            <p class="m-0 text-uppercase small">titolo</p>
                        </div>
                        <div class="col text-end">
                            <p class="m-0 text-uppercase small">riproduzioni</p>
                        </div>
                    <div class="col text-end small"><i class="bi bi-clock me-5"></i></div>
                </div>
            </div>
        </div>
    </div>
    `

    //recupero l'anno dell'album
    fullAlbumYear = new Date(albumData['release_date'])
    fullAlbumYear = fullAlbumYear.getFullYear();

    console.log(albumData);
    //inserisco la cover dell'album
    albumCover.innerHTML = `<img src="${albumData["cover_medium"]}" class="shadow-lg img-fluid me-3" />`;

    //inserisco il titolo
    albumTitle.innerText = albumData.title;
    albumTitle.style.fontSize = '3.5em';

    //inserisco le info dell'album
    albumInfo.innerHTML = `
    <a href="${albumData.contributors.link}">
        <img src="${albumData.artist['picture_small']}" class="rounded-circle" width="25" />
    </a>

    <a href="${albumData.contributors.link}" class="link-light link-underline-opacity-0">
        <span class="fw-bold ms-2">${albumData.artist.name}</span>
    </a>

    <span class="mx-2 fw-bold">&middot;</span>

    <span>${fullAlbumYear}</span>

    <span class="mx-2 fw-bold">&middot;</span>

    <span class="fw-bold">${albumData['nb_tracks']} brani,</span>

    <span>${convertiSecondi(albumData.duration)}</span>
    `

    // inserisco le tracce dell'album
    albumData.tracks.data.forEach( (track, index) => {
        trackListHeader.innerHTML += `
        <!-- inizio tracks -->
        <div class="row my-2 mx-5 track">
            <div class="col-1 text-end my-auto">
                <span class="pe-2">${index+=1}</span>
            </div>
            <div class="col-5">
                <p class="m-0 text-light">${track.title}</p>
                <a href="" class="track-artist-name">
                    <p class="m-0">${track.artist.name}</p>
                </a>
            </div>
            <div class="col text-end my-auto">
                <p class="m-0">${track.rank.toLocaleString()}</p>
            </div>
            <div class="col text-end my-auto">
                <p class="m-0 me-5">${convertiSecondiPerBrano(track.duration)}</p>
            </div>
        </div>
        `
    } );

// fine del then
} )
.catch( err => console.log(err) );
}

// window.onload = () => {
//     createPageAlbum();
// }