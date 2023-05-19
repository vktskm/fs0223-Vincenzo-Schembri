const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId;
const trackList = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId + "/top?limit=50";


window.onload = () => {

  fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/512')
  .then((res) => {
    console.log('oggetto response queen', res)
    
	if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((artist) => {
       console.log("Atributi dell'Artista sono", artist )
       console.log("id ", artist.id )
       console.log("tracklist " , artist.tracklist )
       
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
          <button class="btn btn-outline-light mx-3 my-2 fs-11 py-0 d-none d-lg-block">
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
                              <p class="lh-1 fs-11">Hai messo mi piace a *tot* brani</p>
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
                              <p class="lh-1 fs-11">Hai messo mi piace a *tot* brani</p>
                              <p id="artistLikesName" class="lh-1 fs-11 text-muted"></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      `;
      let rowReference = document.getElementById('main') // <div class="row"></div>
      rowReference.innerHTML += colTemplate ;


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
        console.log(error)
  })

  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/512/top?limit=50")
      .then((res) => {
      console.log('oggetto response song queen', res)

      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nell'esecuzione della richiesta")
      }
      })// fine primo then
      .then( (tracklist) => {
      console.log("Atributi song queen sono", tracklist)


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
				  `
          ;
					
					popularList.appendChild(liElement);
        })

      })// fine del secondo then

      .catch((error) => {
        console.log(error)
       })//  fine catch
   
} // fine funzione onload



// tracklist = "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50"

// fetch(tracklist)
//   .then((res) => {
//     console.log('oggetto response', res)
    
// 	if (res.ok) {
//       return res.json()
//     } else {
//       throw new Error("Errore nell'esecuzione della richiesta")
//     }
//   })
//   .then((track) => {
//          console.log("Atributi di track ", track)
      
         
        //  data.forEach((event) => {
        //     let colTemplate = `
        //     <div class="col-12 col-md-3">
        //       <div class="card">
        //         <div class="card-body">
        //           <h5 class="card-title">${event.name}</h5>
        //           <p class="card-text">
        //             ${event.description}
        //           </p>
        //           <p>${new Date(event.time).toLocaleDateString('it-IT')} - ${
        //       event.price
        //     }€</p>
        //           <a href="./backoffice.html?eventId=${
        //             event._id
        //           }" class="btn btn-primary">MODIFICA</a>
        //         </div>
        //       </div>
        //     </div>
        //     `
        //     // sto passando all'indirizzo ./backoffice.html UN PARAMETRO
        //     // questo parametro è l'_id della risorsa che intenderò modificare!

        //     let rowReference = document.getElementById('events-container') // <div class="row"></div>
        //     rowReference.innerHTML += colTemplate //