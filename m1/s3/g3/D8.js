/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
      
       let h1 = document.querySelector('h1'); 
       const changeTitle = function (str) {
               return h1.textContent = str;
       }
   
       changeTitle("Javascript strutturato")
   
       /* ESERCIZIO 2
          Scrivi una funzione per aggiungere al titolo della pagina una classe 
          "myHeading"
       */
   
       const addClassToTitle = function () {
           return h1.classList.add("myHeading");//aggiungo la classe myHeading 
           //al elemento h1
       }
       addClassToTitle();
   
       /* ESERCIZIO 3
          Scrivi una funzione per che cambi il testo dei p figli di un div
         */
          const changePcontent = function () {
            let paragrafi = document.querySelectorAll("div p");
            for (let p of paragrafi) {
              p.textContent = "Scrivo un nuovo testo a p";
            }
          };
    
          changePcontent();

   
       /* ESERCIZIO 4
          Scrivi una funzione che cambi la proprietà href di ogni link
           (tranne quello nel footer) con il valore https://www.google.com*/
         
   
       const changeUrls = function () {
         let url = document.querySelector('a');
           url.href= "https://www.google.com";
       }

       changeUrls();

       /* ESERCIZIO 5
          Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda 
          lista non ordinata  */
       
       
       const addToTheSecond = function (str) {
       let ul = document.querySelectorAll('ul');
       let li = document.createElement('li');
       li.textContent = str;
       ul[1].append(li);
       }

       addToTheSecond("quarta lista");
   
       /* ESERCIZIO 6
          Scrivi una funzione che aggiunga un secondo paragrafo al primo div
       */
   
        const addParagraph = function () {
            let fDiv = document.querySelector('div');
            let newP = document.createElement('p');
            newP.textContent = "Creo nuovo paragrafo in div con Javascript";
            fDiv.append(newP);
        }
        
        
        addParagraph();
   
       /* ESERCIZIO 7
          Scrivi una funzione che faccia scomparire la prima lista non ordinata
       */

          const hideFirstUl = function () {
            document.querySelector('ul').style.display = 'none';
        }
        
        hideFirstUl();
   
   
       /* ESERCIZIO 8 
          Scrivi una funzione che renda verde il background di ogni lista non
           ordinata
         */
   
          const paintItGreen = function () {
            let uArr = document.querySelectorAll('ul');
            uArr.forEach((v) => v.style.backgroundColor = "green");
        }
        
        paintItGreen();
        
   
/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente 
lo clicca */

const makeItClickable = function () {
      let titolo = document.querySelector("h1");
      let text = titolo.textContent;
      text = text.slice(0, -1);
      titolo.textContent = text;
  };
  let title = document.querySelector("h1");
  title.addEventListener("click", makeItClickable);

        
         
      
   
/* ESERCIZIO 10
Crea una funzione che, al click sul footer, 
riveli l'URL del link interno come contenuto di un alert()*/
   
let myFooter = document.querySelector('footer');

const revealFooterLink = function () {
    let myA = myFooter.querySelector('a');
    alert(myA.href);
}

myFooter.addEventListener('click', revealFooterLink);
   
       /* ESERCIZIO 11
          Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
          La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
       */
   
       const generateTable = function () {
   
   
       }
   
       /* ESERCIZIO 12
          Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
       */
   
       const addRow = function () {
   
   
       }
   
       /* ESERCIZIO 14
         Crea una funzione che nasconda le immagini della tabella quando eseguita
       */
   
       const hideAllImages = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 15
         Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
       */
   
       const changeColorWithRandom = function () {
   
   
       }
   
       /* EXTRA ESERCIZIO 16
         Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
       */
   
       const deleteVowels = function () {
   
   
       }