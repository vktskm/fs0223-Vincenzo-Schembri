//GENERAL SELECTORS
let saveBtn = document.querySelector('#saveButton');
let deleteBtn = document.querySelector('#deleteButton');
let clearBtn = document.querySelector('#clearButton');
let input = document.querySelector('#nameHolder');
let lastAdded = document.querySelector('#lastAdded');
let names = [];

//SAVE BUTTON
saveBtn.addEventListener('click', save);

function save(e) {
	e.preventDefault();

	localStorage.setItem('Name', JSON.stringify(names));
	names.push(input.value);
	
	localStorage.setItem('Name', JSON.stringify(names));
	lastAdded.textContent = names[names.length - 1];
	
	document.querySelector('form').reset();
}

//DELETE BUTTON
deleteBtn.addEventListener('click', cancel);

function cancel() {
	let names = JSON.parse(localStorage.getItem('Name'));
	names.pop();
	
	localStorage.setItem('Name', JSON.stringify(names));
	lastAdded.textContent = names[names.length - 1];
}

//CLEAR BUTTON
clearBtn.addEventListener('click', clear);

function clear() {
	
	localStorage.removeItem('Name', names);
	lastAdded.textContent = '';
}

//TIMER
let counterValue = parseInt(sessionStorage.getItem('lastCounterValue')) || 0;

let counter = document.querySelector('#counter');

const updateCounter = () => {
	counter.innerText = counterValue;
};

window.onload = () => {
	paragraph = document.getElementById('counter');
	updateCounter();
	setInterval(incrementCounter, 1000);
};

const incrementCounter = () => {
	counterValue++ ;
	updateCounter();
	sessionStorage.setItem('lastCounterValue', counterValue);
};
