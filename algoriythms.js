function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let index = arr[0]; index <= arr[1]; index++) {
      sum += index;
    }
    return sum;
  }
}

console.log(sumAll([5, 10])); // should return 10.

/////////////////////////////////7

function destroyer(arr, ...destroyers) {
  let newArray = [];
  arr.map(element => {
    if (!destroyers.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].

////////////////////////////////7

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  collection.map(element => {
    let obj1 = Object.keys(element).sort();
    let obj2 = Object.keys(source).sort();
    let obj3 = obj1;

    console.log(obj3);

    if (
      Object.keys(element).sort() === Object.keys(source).sort() &&
      Object.values(element).sort() &&
      Object.values(source).sort()
    ) {
    }
  });
  console.log(arr);
}
whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 }
  ],
  { apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }])

////////////////////////////////////////////////

/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.*/

function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Loops through the input and pair.

  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }
  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  return paired;
}

// test here
pairElement("GCG");
