const generateNumber = () => {

	const min = 1;
	const max = 10;

	return Math.ceil(Math.random() * (max - min)) + min;

}

const generatedNumber = generateNumber();

console.log(generatedNumber);
console.log("Will the next number be higher or lower than " + generatedNumber + "?");

if (generatedNumber <= 5) {
	console.log("H")
}
else {
	console.log("L")
};
