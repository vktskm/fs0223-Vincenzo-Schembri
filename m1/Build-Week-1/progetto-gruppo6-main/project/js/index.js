// import './modules/quiz.js';



(function acceptButton() {
    //seleziono tramite id gli elementi del dom che ci servono
    const btn = document.getElementById('acceptBtn');
    const checkB = document.getElementById('consenso');
    // aggiungo l'evento che al click del bottone porta alla pagina del quiz 
    btn.addEventListener('click', () => {
        if (checkB.checked) {
            location.href = "../questions.html"

        } else {
            document.getElementById('avviso').classList.remove('mostraAvviso')
        }
    })
    // aggiungo l'evento alla checkbox in modo che al moment. della compilazione il messaggio sparisca
    checkB.addEventListener('click', () => {
        if (checkB.checked == true) {
            document.getElementById('mostraAvviso');
        } if (checkB.checked == true) {
            document.getElementById('avviso').classList.add('mostraAvviso')
        }

    })
})()