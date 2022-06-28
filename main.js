const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const maskCard = '####-####-####-####';
const maskDate = '##/##';
const maskCVV = '###';

let current = '';
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener('keydown', e => {
	if (e.key == 'Tab') {
		return;
	}
	e.preventDefault();

	handleInput(maskNumber, e.key, cardNumber);
});