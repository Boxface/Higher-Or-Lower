const generateNumber = () => {

	const min = 1;
	const max = 10;

	return Math.ceil(Math.random() * (max - min)) + min;

}

const generatedNumber = generateNumber();
console.log(`Your number is ${generatedNumber}`);
console.log(`Will the next number be higher or lower than ${generatedNumber}?`);

const higher = `It will be higher`;
const lower = `It will be lower`;

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
while(nextGeneratedNumber === generatedNumber) {
	nextGeneratedNumber = generateNumber();
}
console.log(`Your next number was ${nextGeneratedNumber}`);

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
