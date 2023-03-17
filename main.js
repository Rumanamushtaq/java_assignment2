var number=11;
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

//prgm to find smaller of two number
const x = 10;
const y = -20;
const z = Math.min(x, y); 
console.log("Smaller number", z)



// program that checks if the number is positive, negative or zero
// input from the user
const number1 = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number1 > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number1 == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");
}


function checkPalindrome(string) {

  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if(string == reverseString) {
      console.log('is a palindrome');
      console.log('true');
  }
  else {
      console.log('is not a palindrome');
      console.log('false');
  }
}

//take input
const string = prompt('Enter a string: ');

checkPalindrome(string);

