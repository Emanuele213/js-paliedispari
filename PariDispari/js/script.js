const divisibility = prompt('Pari o dispari?').toLowerCase();
const numUser = parseInt(prompt('Dammi un numero tra 1 e 5'));
let numCpu ;

if (isEvenOrShots(numUser)) {
	console.log('hai vinto');
} else {
	console.log('hai perso');
}


function isEvenOrShots() {
if (numUser >= 1 && numUser <= 5) {
	const numRandom = Math.floor(Math.random() * 5 ) + 1;
    console.log('il tuo numero è: ',numUser);
	console.log('Cpu:', numRandom);
	
	const sum = numUser + numRandom;
	console.log('somma:', sum);
	const reminder = sum % 2;

	if ((divisibility === 'pari' && reminder === 0) || (divisibility === 'dispari' && reminder === 1)) {
        return true;
	} else {
		return false;
	}
}
}