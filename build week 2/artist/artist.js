

fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412')
  .then((res) => {
    console.log('oggetto response', res)
    
	if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((artista) => {
       console.log("Atributi dell'Artista sono", artista)
       let artistName = document.getElementById("artistName");
       console.log("id " , artista.id)
       console.log("tracklist " , artista.tracklist)


  })
  .catch((error) => {
        console.log(error)
  })

tracklist = "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50"

fetch(tracklist)
  .then((res) => {
    console.log('oggetto response', res)
    
	if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((track) => {
       console.log("Atributi di track ", track)
           
       < class="row" id="artistName">
       CIAO MONDO
 


       
  })
  .catch((error) => {
        console.log(error)
  })