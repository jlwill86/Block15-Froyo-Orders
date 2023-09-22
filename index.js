let userInput = prompt ("Enter a list of your froyo flavors, comma-separated?");


// Input string
const inputString = userInput;

// Split the input string into individual strings using a comma as the delimiter
const individualStrings = inputString.split(',');



function countFlavorOccurrences(inputString) {
    const individualStrings = inputString.split(',');
    const flavorCounts = {};

  // Loop through the individualStrings array and count the occurrences of each flavor
    for (const flavor of individualStrings) {
        // If the flavor is not in the object, initialize its count to 1; otherwise, increment the count
      if (!flavorCounts[flavor]) {
        flavorCounts[flavor] = 1;
      } else {
        flavorCounts[flavor]++;
      }
    }
  
    return flavorCounts;
  }
  
  const flavorCounts = countFlavorOccurrences(inputString);
console.table(flavorCounts)
