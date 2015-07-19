define(['random', 'random2'], function(randomvar, random2var) { // testvar IS ['random'] in a variable so it can be used. -- random and random2 are DEPENDANCIES, these are set in the config.js file
	console.log(cat);
	console.log(dog);
	console.log(monkey);
	someFunction(cat); // <-- different ways
	console.log(someFunction2("Matt")); // <-- different ways
});