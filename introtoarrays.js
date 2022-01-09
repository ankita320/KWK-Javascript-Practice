# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
//🚀🚀🚀🚀🚀🚀 Warm Up!
// Declare a variable for 4 scholars in the zoom. The variable names should be something like scholar1, scholar2, etc. and the values should be strings of their first names. Be ready to share your code!
var scholar1 = "Angela";
var scholar2 = "Delali";
var scholar3 = "kayla";
var scholar4 = "Marissa";

//⭐️⭐️⭐️⭐️⭐️⭐️ Collections
// 📗  Collections are data types that hold multiple things
// Two type of collections: arrays and objects


//⭐️⭐️⭐️⭐️⭐️⭐️ Arrays
// 📗  An ARRAY is an ordered list of multiple values that can be stored as one variable
// Usually, a single array holds a lot of items that are all of the same type.
// 📗 Each item inside of the array is called an ELEMENT.
// How many elements are in the example below?

//Syntax

// An array of strings:
var trending = ["@thecardguy", "@spencerx", "@avani", "@lorengray"];

// An array of numbers:
var followers = [7, 13.8, 7.1, 36.6, 21.2];

// 📗 Each element in an array is automatically assigned a number called an INDEX
// This index can be used to access a specific element inside the array
// Indices BEGIN at 0 and count up.

//⭐️⭐️⭐️⭐️⭐️⭐️ Accessing an Element using []
var trending = ["@thecardguy", "@spencerx", "@avani", "@lorengray"];

// trending[index];
console.log(trending[0])
console.log(trending[2]);



//⭐️⭐️⭐️⭐️⭐️⭐️ Finding the LENGTH of an array using the .length property
// An array of strings:
var trending = ["@thecardguy", "@spencerx", "@avani", "@lorengray"];

// Finding Length:
console.log(trending.length)



//🚀🚀🚀🚀🚀🚀 Try it!
// Create a variable that stores an array of at least 4 strings - you choose what the content is about. The variable name should describe the type of data those 4 strings hold.
// Write a series of console.log() statements: print out the first element, the last element, and then the second element.

var fruits = ["apple", "orange", "grapes", "mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//⭐️⭐️⭐️⭐️⭐️⭐️ Updating Elements
var trending = ["@thecardguy", "@spencerx", "@avani", "@lorengray"];



//⭐️⭐️⭐️⭐️⭐️⭐️ Adding ELements
//  The push() method will add an element to the end of the array

var trending = ["@thecardguy", "@cosette", "@avani", "@lorengray"];




//⭐️⭐️⭐️⭐️⭐️⭐️ Removing Elements
// The pop() method will eleminate the last element in the array (NO ARGUEMENT NEEDED - IT KNOWS WHAT TO DO
var trending = ["@thecardguy", "@cosette", "@avani", "@lorengray", "@jamescharles"];

trending.pop();
console.log(trending);


//🚀🚀🚀🚀🚀🚀 Try it!
// For this, you will use the array you wrote in the previous Try It.
// Practice accessing specific elements. Make sure to console.log() to verify you are accessing what you think you are.
// Now, add two new elements into your array. Use a console.log() to make sure they have been added.
// Lastly, remove at least two elements from your array. Again, make sure they have been successfully removed by printing to the console.


// ⭐️⭐️⭐️⭐️⭐️⭐️ Random Elements 
//Math.random() - returns a random decimal between 0 and 1
// Math.floor(11.56) - returns the value of a number rounded down to the nearest integer
// Real life example: teacher using popsicle sticks to randomly call on someone

// Let’s work on generating a random number between 1 - 20.
// First, generate a random decimal:
var randomDecimal = Math.random();
console.log(randomDecimal);


// Now, let’s multiply it by 20:
randomDecimal = randomDecimal * 20;
console.log(randomDecimal);


// We still don’t have a nice integer as expected, so let’s round it down:
var final = Math.floor(randomDecimal);
console.log(final);

// 🚀🚀🚀🚀🚀🚀 “Why would this be useful”?
 var students = ["Leta", "Ellen Mary", "Pam", "Megan", "Amy", "Sarah", "Robyn", "Courtney", "Rachel", "Allison", "Ruby", "Maile", "Julie", "Meg", "Christie", "Emmie", "Aurora", "Tori", "Juliana", "Kerry"];

 function pickStudent() {
  var random = Math.random() * 20;
  var rounded = Math.floor(random);
  var student = students[rounded]; // note about how this work below!
 return student;
// }

// var randomStudent = pickStudent();
// console.log(randomStudent);

// Discussion questions!


// 🚀🚀🚀🚀🚀🚀 Practice
// Declare a variable called following that stores an array of your top five favorite accounts to follow on social media, in strings.
// Change the value of at least one of the elements in the array
// Add a new account to the array
// Remove the last account from the array
// Print the value of the third element of the array
// Change the value of another element in the array
// Add another account to the array
// Print the value of the first element of the array
// Print one account to the console, at random.

