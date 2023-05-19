// crea un canvas con l'immagine e ne ritorno il context 2d
const draw = function (img) {
    let canvas = document.createElement('canvas')
    let c = canvas.getContext('2d')
    c.width = canvas.width = img.clientWidth
    c.height = canvas.height = img.clientHeight
    c.clearRect(0, 0, c.width, c.height)
    c.drawImage(img, 0, 0, img.clientWidth, img.clientHeight)
    return c
  }
  
  // scompone pixel per pixel e ritorna un oggetto con una mappa della loro frequenza nell'immagine
  const getColors = function (c) {
    let col,
      colors = {}
    let pixels, r, g, b, a
    r = g = b = a = 0
    pixels = c.getImageData(0, 0, c.width, c.height)
    for (let i = 0, data = pixels.data; i < data.length; i += 4) {
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      a = data[i + 3]
      if (a < 255 / 2) continue
      col = rgbToHex(r, g, b)
      if (!colors[col]) colors[col] = 0
      colors[col]++
    }
    return colors
  }
  
  // trova il colore più ricorrente data una mappa di frequenza dei colori
  const findMostRecurrentColor = function (colorMap) {
    let highestValue = 0
    let mostRecurrent = null
    for (const hexColor in colorMap) {
      if (colorMap[hexColor] > highestValue) {
        mostRecurrent = hexColor
        highestValue = colorMap[hexColor]
      }
    }
    return mostRecurrent
  }
  
  // converte un valore in rgb a un valore esadecimale
  const rgbToHex = function (r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
      throw 'Invalid color component'
    } else {
      return ((r << 16) | (g << 8) | b).toString(16)
    }
  }
  
  // inserisce degli '0' se necessario davanti al colore in esadecimale per renderlo di 6 caratteri
  const pad = function (hex) {
    return ('000000' + hex).slice(-6)
  }
  
  const generateImage = function () {
    let imageSrc =
      'https://e-cdns-images.dzcdn.net/images/artist/7f6e8be161417ad8ce8f09b45721544f/500x500-000000-80-0-0.jpg'
    let reference = document.getElementById('container')
  
    reference.innerHTML = `
      <img
        src=${imageSrc}
        id="img"
        crossorigin="anonymous"
        onload="start()"
      />`
  }
  
  const start = function () {
    // prendo il riferimento all'immagine del dom
    let imgReference = document.querySelector('#album-cover img')
    let backgroundAlbum = document.querySelector('#album-cover').parentNode
    // creo il context 2d dell'immagine selezionata
    let context = draw(imgReference)
  
    // creo la mappa dei colori più ricorrenti nell'immagine
    let allColors = getColors(context)
  
    // trovo colore più ricorrente in esadecimale
    let mostRecurrent = findMostRecurrentColor(allColors)
  
    // se necessario, aggiunge degli '0' per rendere il risultato un valido colore esadecimale
    let mostRecurrentHex = pad(mostRecurrent)
  
    backgroundAlbum.style.background = `linear-gradient(180deg, #0d0d0d ,#${mostRecurrentHex})`
  }
  

  