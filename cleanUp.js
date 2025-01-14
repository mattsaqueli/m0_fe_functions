// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// Added semicolons to where it was needed, thats the standard.
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();


// EX 2:
// Added semicolons and fixed the positioning of the last curly bracket.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

// EX 3:
//Corrected the word 'function' and the position of the last curly bracket.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4:
// Added numbers to the call. Added a starting curly bracket in line 44. Put console.log into the code block. 
function average(num1, num2) {
  var sum = num1 + num2;
  var average = sum / 2;
  console.log(`the average is: ${average}.`);
}
 average(2, 4);