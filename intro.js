# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
//⭐️⭐️⭐️⭐️⭐️⭐️ What is JavaScript?
// 💪 JavaScript allows our webpages to be dynamic and DO SOMETHING

//⭐️⭐️⭐️⭐️⭐️⭐️ Data Types
//A data type is a specific kind of information or data. 

//⭐️⭐️⭐️⭐️⭐️⭐️ Strings
// Strings are series of characters between quotation marks
// example:
"Hi, Welcome to Kode With Klossy!"

// To output messages into the console, use console.log():
console.log("Hi, Welcome to Kode With Klossy!");


//🚀🚀🚀🚀🚀🚀 Try it!
// On the left-hand side of the repl.it interface, type console.log("your first name");. Instead of the words "your first name", type your actual name! You do need to include the quotes.
// Type console.log("your age");.
// Type console.log("your full name");.
// Type anything you want inside of the () after console.log- try to use some characters from your keyboard that are not numbers or letters. Make sure your text is enclosed in quotes.
// Don't forget to run your code by clicking the green play button (or using the keyboard shortcut cmd + enter).

console.log('Ankita Saha')
console.log('Blackpink is a kpop group.')








//⭐️⭐️⭐️⭐️⭐️⭐️ Variables
// Values can be saved to variables, so we can re-use it

//Syntax:
var region = "Africa";

var favoriteMovie = "Mean Girls";


//🚀🚀🚀🚀🚀🚀 Try it!
// Complete the following in a repl. You should type your code on the left-hand side of the page, run the code, and then see the results on the right-hand side of the page.
// Declare a variable for each prompt below. 
// Then, print it out to the console.
  // A variable called favoriteColor that holds your favorite color
  // A variable called pet that holds the name of a pet
  // A variable called friend that holds the name of a friend
  // A variable called goal that holds one of your 2020 goals. Remember, you can include spaces in a string!
  // A variable called hobby that holds one of your hobbies
var favoriteColor = "Robin's egg blue";
console.log(favoriteColor);


//⭐️⭐️⭐️⭐️⭐️⭐️ Re-assigning Variables
// We re-assign a variable so that its value can change

// The line below declares the variable region and assigns it to "Africa"
var region = "Africa";
console.log(region);

var city = "nyc"
console.log(`I live in ${city}`);

// The line below re-assigns the variable region to "Americas"
// No need to use var again because the variable name has already been created
region = "Americas";
console.log(region);


//⭐️⭐️⭐️⭐️⭐️⭐️ Interpolation
// Interpolation is including variable data in a sentence
// USE BACKTICKS IN CONSOLE.LOG HERE ``

var region = "Africa";

console.log(`I love ${region}`)

console.log(`I love ${region}`);


//🚀🚀🚀🚀🚀🚀 Try it Together
//If you have the strings "Karlie" and "Kloss" in the following variables:
//    var first = "Karlie";
//    var last = "Kloss";
//Use string interpolation to complete the following:
// 1. What code can you write to output the string "KarlieKloss"?
var namee = "KarlieKloss"
console.log(namee)
// 2. What code can you write to output the string "KlossKarlie"?
var namee = "KarlieKloss"
console.log(namee)
// 3. What code can you write to output the string "Karlie Kloss"?
// 4. What code can you write to output the string "Kloss Karlie Kloss Karlie"?
// 5. What code can you write to output the string "I love Karlie"?

var first = "Karlie";
var last = "Kloss";
console.log(`${first} ${last}`);
console.log(`I love ${first}`)




//⭐️⭐️⭐️⭐️⭐️⭐️ Numbers
// Another data type in JavaScript
// Can perform operations using (+, -, *, /, %, () )
// We can store number data as variables

var rings = 2;
rings = rings + 6 * 5 / 9 - 3;

console.log(rings);




//Another example
var cookies = 10
var jars = 2
var fullJars = cookies / jars

console.log(`I have ${fullJars} full jars.`)



var name = "Karlie";
var tinsOfKookies = 1200;
var mealsDonatedPerTin = 10;

var mealsDonated = tinsOfKookies * mealsDonatedPerTin;

console.log(mealsDonated);


//🚀🚀🚀🚀🚀🚀 Try it
//Start with these numbers and write code to find the average of the four numbers above.

var a = 12;
var b = 65;
var c = 31;
var d = 98;

var average = a + b + c + d / 4;  
console.log(average);



//🚀🚀🚀🚀🚀🚀 Practice
//Declare three variables: username, caption, numberOfLikes, and numberOfComments. Assign each variable to an appropriate value.
//Print out a sentence to the console using at least two of the variables.
//Now, re-assign the number of likes to a number greater than what it was initially assigned to.
//Print out a sentence to the console that includes the caption and numberOfLikes.


var cupcakes = 30
var perPerson = 2
var friends = cupcakes/perPerson
console.log(`I have ${friends} friends.`)
