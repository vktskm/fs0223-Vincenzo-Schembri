let progressBar = document.querySelector(".progress-bar");
let running = progressBar.style.animationPlayState === "running";
function convertiSecondi(secondi) {
  let ore = Math.floor(secondi / 3600);
  let minuti = Math.floor((secondi % 3600) / 60);
  let secondiRimanenti = secondi % 60;

  let risultato = "";
  if (ore > 0) {
    if (ore == 1) {
      risultato += ore + " ora ";
    } else {
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
  if (minuti < 10) {
    risultato += "0" + minuti + ":";
  } else {
    risultato += minuti + ":";
  }
  if (secondiRimanenti < 10) {
    risultato += "0" + secondiRimanenti;
  } else {
    risultato += secondiRimanenti;
  }

  return risultato;
}

function createPageAlbum() {
  const URL = new URLSearchParams(window.location.search);
  const albumID = URL.get("albumID");

  let main = document.getElementById("rowPrincipal");

  let tracksArray = [];

  main.innerHTML = `
  <div class="container-fluid text-white mb-4">
      <div class="row album-hero p-1 py-3">
              <div class="col-12 col-md-3 pe-0 text-center my-auto" id="album-cover"></div>
              <div class="col-12 col-md-9 align-self-center pt-2">
                  <h6 class="text-uppercase small">album</h6>
                  <h1 id="album-title" class="fw-bold"></h1>
                  <div class="d-flex" id="album-info"></div>
              </div>
          </div>
      </div>
      <div class="container-fluid bg-dark bg-opacity-75 text-light">
          <div class="row mx-5">
              <div class="col fs-3">
                  <button class="bg-none" id="play-btn"><i class="bi bi-play-circle-fill fs-1 ms-1 play-button"></i></button>
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
                      <div class="col text-end d-none d-md-block">
                          <p class="m-0 text-uppercase small">riproduzioni</p>
                      </div>
                  <div class="col text-end small d-none d-md-block"><i class="bi bi-clock me-5"></i></div>
              </div>
          </div>
      </div>
  </div>
  `;

  let albumCover = document.getElementById("album-cover");
  let albumTitle = document.getElementById("album-title");
  let albumInfo = document.getElementById("album-info");
  let trackListHeader = document.getElementById("track-list-header");

  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumID)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella richiesta dell'album!");
      }
    })
    .then((albumData) => {
      //recupero l'anno dell'album
      fullAlbumYear = new Date(albumData["release_date"]);
      fullAlbumYear = fullAlbumYear.getFullYear();
      console.log(albumData.tracks.data);
      console.log(albumData);
      //inserisco la cover dell'album
      albumCover.innerHTML = `<img src="${albumData["cover_medium"]}" class="shadow-lg img-fluid me-3" crossorigin="anonymous" onload="start()" />`;

      //inserisco il titolo
      albumTitle.innerText = albumData.title;
      albumTitle.style.fontSize = "3.5em";

      //inserisco le info dell'album
      albumInfo.innerHTML = `
  <a href="${albumData.contributors.link}">
      <img src="${
        albumData.artist["picture_small"]
      }" class="rounded-circle" width="25" />
  </a>

  <a href="${
    albumData.contributors.link
  }" class="link-light link-underline-opacity-0">
      <span class="fw-bold ms-2">${albumData.artist.name}</span>
  </a>

  <span class="mx-2 fw-bold">&middot;</span>

  <span>${fullAlbumYear}</span>

  <span class="mx-2 fw-bold">&middot;</span>

  <span class="fw-bold">${albumData["nb_tracks"]} brani,</span>

  <span>${convertiSecondi(albumData.duration)}</span>
  `;

      // inserisco le tracce dell'album
      albumData.tracks.data.forEach((track, index) => {
        trackListHeader.innerHTML += `
      <!-- inizio tracks -->
      <button onclick="stopAudio(); playSong('${
        albumData.tracks.data[index].preview
      }', '${albumData.artist.name}', '${
          albumData.tracks.data[index].title
        }', '${
          albumData.cover_small
        }',${index})" class="singleSong"><div class="row my-2 mx-5 track">
          <div class="col-1 text-end my-auto">
              <span class="index pe-2">${(index += 1)}</span>
          </div>
          <div class="col-11 col-md-5">
              <p id="songP" class="m-0 text-light">${track.title}</p>
              <p class="track-artist-name">
                 <a href="index.html?artistId=${track.artist.id}">${
          track.artist.name
        }</a>
              </p>
          </div>
          <div class="col text-end my-auto d-none d-md-block">
              <p class="m-0">${track.rank.toLocaleString()}</p>
          </div>
          <div class="col text-end d-none d-md-block my-auto">
              <p class="m-0 me-5">${convertiSecondiPerBrano(track.duration)}</p>
          </div>
      </div></button>
      `;
        tracksArray.push(track.preview);
      });

      let prevBtn = document.getElementById("prev-song");
      let playPauseBtn = document.querySelector(".play-pause-btn");
      let nextBtn = document.getElementById("next-song");
      let playPauseBtn2 = document.getElementById("playButton");

      let playBtn = document.getElementById("play-btn");
      console.log(playBtn);

      console.log(tracksArray);
      let ultimaPosizione = 0;
      let trackIndex = 0;
      function stopAudio() {
        if (audioPlayer) {
          audioPlayer.pause();
          ultimaPosizione = audioPlayer.currentTime;
          dinamicImg.classList.remove('albumRotante')
        }
      }

      let playSong = function (prev, artist, song, img, index) {
        let footerDisplay = document.querySelector("footer");
        footerDisplay.classList.remove("d-none");
        console.log(index);
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn2.innerHTML = '<i class="fa-solid fa-pause"></i>';
        console.log(prev);
        audioPlayer = new Audio(`${prev}`);
        audioPlayer.currentTime = ultimaPosizione;
        audioPlayer.play();
        trackIndex = index;
        artistName.innerText = song + " | " + artist;
        dinamicNameArtist.innerText = artist + " ";
        dinamicSongTitle.innerText = song;
        dinamicImg.src = img;
        dinamicImg.classList.add('albumRotante')
        dinamicImg.classList.remove("d-none");
        playBtn.addEventListener("click", stopAudio);
      };

      playBtn.addEventListener("click", () => {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';

        playSong(
          albumData.tracks.data[trackIndex].preview,
          albumData.tracks.data[trackIndex].artist.name,
          albumData.tracks.data[trackIndex].title,
          albumData.tracks.data[trackIndex].album["cover_small"],
          trackIndex
        );
      });

      playPauseBtn.addEventListener("click", () => {
        if (!audioPlayer.paused) {
          stopAudio();
          playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          console.log("canzone stoppata");
          progressBar.style.animationPlayState = "running"
            ? "paused"
            : "running";
        } else {
          playSong(
            albumData.tracks.data[trackIndex].preview,
            albumData.tracks.data[trackIndex].artist.name,
            albumData.tracks.data[trackIndex].title,
            albumData.tracks.data[trackIndex].album["cover_small"],
            trackIndex
          );
          progressBar.style.animationPlayState = running ? "paused" : "running";
          console.log("riproduco il brano con indice: ", trackIndex);
        }
      });
      playPauseBtn2.addEventListener("click", () => {
        if (!audioPlayer.paused) {
          stopAudio();
          playPauseBtn2.innerHTML = '<i class="fa-solid fa-play"></i>';
          console.log("canzone stoppata");
          progressBar.style.animationPlayState = running ? "paused" : "running";
        } else {
          playSong(
            albumData.tracks.data[trackIndex].preview,
            albumData.tracks.data[trackIndex].artist.name,
            albumData.tracks.data[trackIndex].title,
            albumData.tracks.data[trackIndex].album["cover_small"],
            trackIndex
          );
        }
      });

      prevBtn.addEventListener("click", () => {
        if (!audioPlayer.paused) {
          stopAudio();
          trackIndex -= 1;
          if (trackIndex < 0) {
            trackIndex = tracksArray.length - 1;

            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          } else {
            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          }
        } else {
          trackIndex -= 1;
          if (trackIndex < 0) {
            trackIndex = tracksArray.length - 1;

            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          } else {
            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          }
        }
        progressBar.style.animation = "none";
        progressBar.offsetHeight;
        progressBar.style.animation = null;
      });

      nextBtn.addEventListener("click", () => {
        if (!audioPlayer.paused) {
          stopAudio();
          trackIndex += 1;
          if (trackIndex > tracksArray.length - 1) {
            trackIndex = 0;

            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          } else {
            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          }
        } else {
          trackIndex += 1;
          if (trackIndex > tracksArray.length - 1) {
            trackIndex = 0;

            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          } else {
            playSong(
              albumData.tracks.data[trackIndex].preview,
              albumData.tracks.data[trackIndex].artist.name,
              albumData.tracks.data[trackIndex].title,
              albumData.tracks.data[trackIndex].album["cover_small"],
              trackIndex
            );

            console.log("sto runnando la canzone con indice: ", trackIndex);
          }
        }
        progressBar.style.animation = "none";
        progressBar.offsetHeight;
        progressBar.style.animation = null;
      });

      // fine del then
    })
    .catch((err) => console.log(err));
}

const URL = new URLSearchParams(window.location.search);
const albumID = URL.get("albumID");

const URLParams = new URLSearchParams(window.location.search);
const artistId = URLParams.get("artistId");
const endpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId;
const trackList =
  "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
  artistId +
  "/top?limit=50";

const artist = function () {
  fetch(endpoint)
    .then((res) => {
      console.log("oggetto response queen", res);

      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nell'esecuzione della richiesta");
      }
    })
    .then((artist) => {
      console.log("Atributi dell'Artista sono", artist);
      console.log("id ", artist.id);
      console.log("tracklist ", artist.tracklist);

      let colTemplate = `
       <!-- primo blocco -->

       <div id="artistThumbnail"
       class="container-fluid d-flex flex-column justify-content-end text-light px-4" >
       <p  class="d-none d-lg-block">
           <svg height="24" width="24" aria-hidden="true" class="" fill="#0c67d3" viewBox="0 0 24 24"
               data-encore-id="icon">
               <path
                   d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z">
               </path>
           </svg>
           Artista verificato
       </p>
       <p id="artistName" class="fs-2 fw-bold">Artist Name</p>
       <p id="followers" class="d-none d-lg-block">Followers</p>
      </div>

      <!-- secodoo blocco -->
      
      <p id="monthlyListener" class="text-muted mb-0 d-lg-none p-4"></p>
      <div id="artistPlaybar" class="container-fluid d-flex justify-content-start p-4 mx-0">
          <button class="btn btn-primary rounded-circle px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor"
                  class="bi bi-play-fill" viewBox="0 0 16 16">
                  <path
                      d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
          </button>
          <button type="checkbox" class="btn btn-outline-light mx-3 my-2 fs-11 py-0 d-none d-lg-block">
              <small>FOLLOWING</small>
          </button>
          <button class="btn text-light align-items-center lh-1 d-none d-lg-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-three-dots"
                  viewBox="0 0 16 16">
                  <path
                      d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
          </button>
          <div class="container">
              <button class="btn text-light d-lg-none">Seguiti</button>
              <button class="btn text-light d-lg-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                      <path
                          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
              </button>
          </div>
      </div>
      
      <div id="artistOverview" class="container-fluid text-light m-lg-3 mx-0 px-3">
          <div class="row">
              <div class="col-lg-7 col-12 p-4 p-lg-0">
                  <h5>Popolari</h5>
                  <!-- ripassare qui per togliere puntini dalla ol -->
                  <ol id="popularList" class="ms-4"></ol>
              </div>
              <div id="liked" class="col-lg-5 col-12">
                  <div class="container d-none d-lg-block">
                      <h5>Brani che ti piacciono</h5>
                      <div class="row mt-4">
                          <div class="col-2">
                              <img id="artistImgLikes" width="40" class="rounded-circle img-fluid"
                                  alt="artist preview" />
                          </div>
                          <div class="col-10">
                              <p class="lh-1 fs-11">Hai messo mi piace a ${artist.nb_fan} brani</p>
                              <p class="lh-1 fs-11 text-muted">Di <span id="artistLikeName"
                                      class="lh-1 fs-11 text-muted"></span></p>
                          </div>
                      </div>
                  </div>
                  <div class="container d-lg-none">
                      <div class="mt-4 d-flex">
                          <div class="p-1">
                              <img id="artistImgLikes2" width="100" class="rounded-circle img-fluid"
                                  alt="artist preview" />
                          </div>
                          <div class="pt-3 ps-2">
                              <h5>Brani che ti piacciono</h5>
                              <p class="lh-1 fs-11">Hai messo mi piace a ${artist.nb_fan} brani</p>
                              <p id="artistLikesName" class="lh-1 fs-11 text-muted"></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      `;
      let rowReference = document.getElementById("rowPrincipal"); // <div class="row"></div>
      rowReference.innerHTML += colTemplate;
      let mainCol = document.querySelector(".cards-row");
      let hero = document.querySelector(".hero");
      mainCol.innerHTML = "";
      hero.classList.remove("d-lg-flex");
      hero.classList.add("d-none");

      let artName = document.getElementById("artistName");
      let followers = document.getElementById("followers");
      let artImg = document.getElementById("artistThumbnail");
      let artImgLikes = document.getElementById("artistImgLikes");
      let artImgLikes2 = document.getElementById("artistImgLikes2");
      let artLikeName = document.getElementById("artistLikeName");
      artName.textContent = artist.name;
      artLikeName.textContent = artist.name;
      artImgLikes.src = artist.picture;
      artImgLikes2.src = artist.picture;
      followers.textContent = artist.nb_fan + " ascoltatori mensili";
      artImg.style.backgroundImage = `url(${artist.picture_xl})`;
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(trackList)
    .then((res) => {
      console.log("oggetto response song queen", res);

      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nell'esecuzione della richiesta");
      }
    }) // fine primo then
    .then((tracklist) => {
      console.log("Atributi song queen sono", tracklist);

      let popularList = document.getElementById("popularList");
      popularList.innerHTML = "";

      tracklist.data.forEach((track) => {
        let liElement = document.createElement("li");
        liElement.classList.add("py-3");
        let duration = track.duration;
        let minutes = Math.floor(duration / 60);
        let seconds = Math.floor(duration % 60)
          .toString()
          .padStart(2, "0");
        let formattedDuration = `${minutes}:${seconds}`;
        liElement.innerHTML = `
						<div class="row row-cols-3 justify-content-center">
						<div class="col-6 fs-11 d-flex align-items-center">
							<img src="${track.album.cover_small}" alt="cover" width="35px" class="d-none d-md-inline"/>
							<button type="button" class="btn text-light text-start trackBtn align-self-center text-truncate">${track.title}</button>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="d-none d-md-inline align-self-center">Rank ${track.rank}</span>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="align-self-center">${formattedDuration}</span>
						</div>
					</div>
				  `;
        let heroSec = document.querySelector(".hero");
        heroSec.classList.add("d-none");
        popularList.appendChild(liElement);
      });
    }) // fine del secondo then

    .catch((error) => {
      console.log(error);
    }); //  fine catch
}; // fine funzione onload

const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const mainCol = document.querySelector(".cards-row");
const heroSec = document.querySelector(".hero");
let fetchedAlbums = 0;
let buonasera = document.createElement("div");
buonasera.className = "fs-4 my-2 bolder";
buonasera.textContent = "Buonasera";
mainCol.prepend(buonasera);

const fetchAlbum = async () => {
  try {
    const randomAlbumId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + randomAlbumId);
    console.log("RES", res);
    if (res.ok) {
      const album = await res.json();
      if (album.id) {
        let card = `
        <div class="col-6 col-md-4 my-2">
          <a href="index.html?albumID=${album.id}" onclick="createPageAlbum()">
                <div class="d-flex align-items-center playlist-card">
                    <img class="pe-3" src="${album.cover_medium}" alt="">
                    <p class="name-playlist">${album.title}</p>
                </div>
          </a>
        </div>
        `;
        mainCol.innerHTML += card;
        console.log("RES", album);
        fetchedAlbums++;
      }
    } else {
      throw new Error("Errore nel recupero del prodotto!");
    }
  } catch (error) {
    console.log(error);
  }
};

let artistName = document.getElementById("songTitle");
let dinamicNameArtist = document.getElementById("dinamicNameArtist");
let dinamicSongTitle = document.getElementById("dinamicSongTitle");
let dinamicImg = document.getElementById("dinamicImg");
let audioPlayer = null;

let ultimaPosizione = 0;

function stopAudio() {
  if (audioPlayer) {
    audioPlayer.pause();
    ultimaPosizione = audioPlayer.currentTime;
    dinamicImg.classList.remove('albumRotante')
  }
}

let playSong = function (prev, artist, song, img) {
  let footerDisplay = document.querySelector("footer");
  footerDisplay.classList.remove("d-none");

  let playPauseBtn = document.querySelector(".play-pause-btn");
  playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

  console.log(prev);
  audioPlayer = new Audio(`${prev}`);
  audioPlayer.currentTime = ultimaPosizione;
  audioPlayer.play();
  artistName.innerText = song + " | " + artist;
  dinamicNameArtist.innerText = artist + " ";
  dinamicSongTitle.innerText = song;
  dinamicImg.src = img;
  dinamicImg.classList.add('albumRotante')
  dinamicImg.classList.remove("d-none");
};

const bigCard = async () => {
  try {
    const heroId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + heroId);
    console.log("RES", res);
    if (res.ok) {
      const heroAlbum = await res.json();
      if (heroAlbum.id) {
        let heroCard = `
              
                <div class="col-3"><a href="index.html?albumID=${heroAlbum.id}" onclick="createPageAlbum()"><img src="${heroAlbum.cover_medium}" class="img-fluid" alt="album-image"> </a></div>
                  <div class="col-9 d-flex flex-column justify-content-around">
                    <div class="row"><a href="index.html?albumID=${heroAlbum.id}" onclick="createPageAlbum()">Album</a></div>
                    <div class="row title"><a href="index.html?albumID=${heroAlbum.id}" onclick="createPageAlbum()">${heroAlbum.title}</a></div>
                    <div class="row artist"><a href="index.html?artistId=${heroAlbum.artist.id}" class="card-text">${heroAlbum.artist.name}</a></div>
                    <div class="row">Ascolta l'album di ${heroAlbum.artist.name}</div>
                  
              
                    
                    <div class="row d-flex align-items-center">
                        <button onclick="playSong('${heroAlbum.tracks.data[0].preview}', '${heroAlbum.artist.name}', '${heroAlbum.tracks.data[0].title}', '${heroAlbum.cover_small}')" class="btn rounded-4 btn-success me-2">Play</button>
                        <button class="btn rounded-4 btn-outline-secondary me-2">Salva</button>
                        <i class="fas fa-ellipsis"></i>
                    </div>
                    </div>

        `;
        heroSec.innerHTML = heroCard;

        //dichiarazione variabili per le tracce dell'album
        let homeTracksArray = [];
        let homeTracksIndex = 0;

        // inserisco le tracce dentro l'array
        heroAlbum.tracks.data.forEach((track) => {
          homeTracksArray.push(track.preview);
        });

        // recupero i bottoni del player
        let prevTrackBtn = document.getElementById("prev-song");
        let playPauseBtn = document.querySelector(".play-pause-btn");
        let nextTrackBtn = document.getElementById("next-song");
        let playPauseBtn2 = document.getElementById("playButton");

        playPauseBtn.addEventListener("click", () => {
          if (!audioPlayer.paused) {
            stopAudio();
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            console.log("canzone stoppata");
            progressBar.style.animationPlayState = "running"
              ? "paused"
              : "running";
          } else {
            playSong(
              heroAlbum.tracks.data[homeTracksIndex].preview,
              heroAlbum.tracks.data[homeTracksIndex].artist.name,
              heroAlbum.tracks.data[homeTracksIndex].title,
              heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
            );

            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            progressBar.style.animationPlayState = running
              ? "paused"
              : "running";
            console.log("riproduco il brano con indice: ", homeTracksIndex);
          }
        });

        playPauseBtn2.addEventListener("click", () => {
          if (!audioPlayer.paused) {
            stopAudio();
            playPauseBtn2.innerHTML = '<i class="fa-solid fa-play"></i>';
            console.log("canzone stoppata");
            progressBar.style.animationPlayState = running
              ? "paused"
              : "running";
          } else {
            playSong(
              heroAlbum.tracks.data[homeTracksIndex].preview,
              heroAlbum.tracks.data[homeTracksIndex].artist.name,
              heroAlbum.tracks.data[homeTracksIndex].title,
              heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
            );

            playPauseBtn2.innerHTML = '<i class="fa-solid fa-pause"></i>';
            progressBar.style.animationPlayState = running
              ? "paused"
              : "running";
            console.log("riproduco il brano con indice: ", homeTracksIndex);
          }
        });

        prevTrackBtn.addEventListener("click", () => {
          if (!audioPlayer.paused) {
            stopAudio();
            homeTracksIndex -= 1;
            if (homeTracksIndex < 0) {
              homeTracksIndex = homeTracksArray.length - 1;

              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            } else {
              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            }
          } else {
            homeTracksIndex -= 1;
            if (homeTracksIndex < 0) {
              homeTracksIndex = homeTracksArray.length - 1;

              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            } else {
              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            }
          }
          progressBar.style.animation = "none";
          progressBar.offsetHeight; // Trigger reflow to reset the animation
          progressBar.style.animation = null;
        });

        nextTrackBtn.addEventListener("click", () => {
          if (!audioPlayer.paused) {
            stopAudio();
            homeTracksIndex += 1;
            if (homeTracksIndex > homeTracksArray.length - 1) {
              homeTracksIndex = 0;

              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            } else {
              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            }
          } else {
            homeTracksIndex += 1;
            if (homeTracksIndex > homeTracksArray.length - 1) {
              homeTracksIndex = 0;

              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            } else {
              playSong(
                heroAlbum.tracks.data[homeTracksIndex].preview,
                heroAlbum.tracks.data[homeTracksIndex].artist.name,
                heroAlbum.tracks.data[homeTracksIndex].title,
                heroAlbum.tracks.data[homeTracksIndex].album["cover_small"]
              );

              console.log(
                "sto runnando la canzone con indice: ",
                homeTracksIndex
              );
            }
          }
          progressBar.style.animation = "none";
          progressBar.offsetHeight; // Trigger reflow to reset the animation
          progressBar.style.animation = null;
        });

        // console.log("RES", album);
      } else {
        window.location.reload();
      }
    } else {
      throw new Error("Errore nel recupero del prodotto!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getHeroCard = async () => {
  await bigCard();
};

const fetchRandomAlbums = async () => {
  while (fetchedAlbums < 6) {
    await fetchAlbum();
  }
};

if (albumID) {
  createPageAlbum();
} else if (artistId) {
  artist();
} else {
  fetchRandomAlbums();
  getHeroCard();
}

let prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", function () {
  history.back();
});
let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", function () {
  history.forward();
});
