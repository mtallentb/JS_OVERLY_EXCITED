// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = [];
let excite = "!";
let exciteNumber = 1;


// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */

     for (let i = 0; i < theWordArray.length; i++) {
     	newSentence.push(theWordArray[i]);

     	if ((i + 1) % 3 === 0) {
     		newSentence.push(excite.repeat(exciteNumber));
     		console.log(newSentence.join(" "));
     		exciteNumber += 1;
     	} else {
     		console.log(newSentence.join(" "));	
     	}

     	
     }


}

// Invoke the function and pass in the array
addExcitement(sentence)