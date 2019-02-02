const generateNumber = () => {

	const min = 1;
	const max = 10;

	return Math.ceil(Math.random() * (max - min)) + min;

}

const generatedNumber = generateNumber();

console.log(generatedNumber);
console.log(`Will the next number be higher or lower than ${generatedNumber} ?`);

const higher = "H";
const lower = "L";

const guess = (generatedNumber, higher, lower) => {

	if (generatedNumber <= 5) {
		return higher;
	}
	else {
		return lower;
	};

}

const outputtedGuess = guess(generatedNumber, higher, lower);
console.log(outputtedGuess);

let nextGeneratedNumber = generateNumber();

//In order to keep it running continously we basically need to put a big old loop around the whole game
//Lets try that another time though, I need to cook dinner :)
//Feel free to have a go yourself!
//Pseudo code for you:
/*
for(let i = 0; i < [however many times you want it to run]; i++) {
	//execute steps/run game
}
*/

while(nextGeneratedNumber === generatedNumber) {
	nextGeneratedNumber = generateNumber();
}


console.log(nextGeneratedNumber);

if (nextGeneratedNumber < generatedNumber) {
	if(outputtedGuess === lower) {
		console.log("You were correct!")
	}
	else {
		console.log("You were incorrect :(")
	}
}
else {
	if(outputtedGuess === higher) {
		console.log("You were incorrect :(")
	}
	else {
		console.log("You were correct!")
	}
}
