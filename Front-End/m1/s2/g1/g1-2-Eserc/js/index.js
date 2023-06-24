//alert('Usa il pop up per dare dei messaggi');
//funzionano i tag di html dentro la funzione write("        ");
document.write("<b>Eseguo elemento script di index.js</b><hr>");


/*var contenutoIndexJs
document.getElementById("contenutoIndexJs").innerText = '<b>Eseguo elemento script di index.js </b>';
*/
function nomiPersona(){
    console.log('Vincenzo');
    console.log('Angelo');
    console.log('Salvatore');
}

nomiPersona();

var saluto = 'Buongiorno';
var nome = "vincenzo";
var anni = 30;
console.log(saluto + ' ' + nome + ' oggi compi '+ anni + ' anni');
//Inserisco gli anni da console senza controlli, console non accetta i tag di html
anni = prompt('Quanti anni hai?');
console.log(saluto + ' ' + nome + ' oggi compi '+ anni + ' anni<br><br>');