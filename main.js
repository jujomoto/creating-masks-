const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskNumber = '####-####-####-####'; //length: 19
const maskDate = '##/##';
const maskCVV = '###';

let current = '';
let arrCardNumber = [];
let arrDateNumber = [];
let arrCvvNumber = [];

inputCard.addEventListener('keydown', e => {
	if (e.key == 'Tab') {
		return;
	}
	e.preventDefault();
	console.log(e);

	handleInput(maskNumber, e.key, arrCardNumber);
	inputCard.value = arrCardNumber.join('');

});

function handleInput (mask, key, arr) {
	 let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	 if (key === 'Backspace' && arr.lenght > 0) {
		arr.pop();
		return;
	 }
}