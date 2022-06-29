const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

//masks
const maskNumber = '####-####-####-####'; //length: 19
const maskDate = '####/##/##';
const maskCVV = '###';


let current = '';

//arr to store the new inputs with the simbols
let arrCardNumber = [];
let arrDateNumber = [];
let arrCvvNumber = [];

inputCard.addEventListener('keydown', e => {
	if (e.key == 'Tab') {
		return;
	}
	e.preventDefault();

	handleInput(maskNumber, e.key, arrCardNumber);
	inputCard.value = arrCardNumber.join('');

});

inputDate.addEventListener('keyup', e => {
	if (e.key == "Tab") {
		return;
	}
	e.preventDefault();
	handleInput(maskDate, e.key, arrDateNumber);
	inputDate.value = arrDateNumber.join("");

	if ( inputDate.value.length == 10 && !isValidDate( inputDate.value ) ) {
		alert('date incorrect...');
		return false;
	}

});

inputCVV.addEventListener('keydown', e => {
	if (e.key == "Tab")  {
		return;
	}
	e.preventDefault();
	handleInput(maskCVV, e.key, arrCvvNumber);
	inputCVV.value = arrCvvNumber.join('');
});

/* 
this function check if characters are valid and creates the new input with the mask
*/ 
function handleInput (mask, key, arr) {
	let regex = /[0-9]/
	 if (key === 'Backspace' && arr.length > 0) {
		arr.pop();
		return;
	 }

	 if (regex.test(key) && arr.length < mask.length) {
		if (mask[arr.length] === "-" || mask[arr.length] === "/") { 
			arr.push(mask[arr.length], key);
		} else {
			arr.push(key);
		}
	 }
}


//check the date 
function isValidDate (dateToCheck) {
	let regex = /^\d{4}\/\d{1,2}\/\d{1,2}$/,
			arrDate = [];
			date = null,
			year = null,
			month = null, 
			arrDaysMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //arr days of the months

	if (!regex.test(dateToCheck) ) return false;

	arrDate = dateToCheck.split('/');
	year = arrDate[0];
	month = arrDate[1];
	day = arrDate[2];

	//check year and month
	if (year < 1950 || year > 2050 || month < 1 || month > 12) {
		return false;
	}
	
	//if leap year change last day of february to 29
	if ( year % 400 == 0 || ( year % 100 != 0 && year % 4 == 0 ) ) {
		arrDaysMonths[1] = 29;
	}

	//check day
	return day > 0 && day <= arrDaysMonths[month - 1]; 
}

