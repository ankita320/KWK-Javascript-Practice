# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Let's practice using some operators!

// Predict whether each expression below will evaulate to TRUE or FALSE. Write you predections on the line below.

var example1 = 4 > 5;
// Your prediction:
console.log(example1> 5);

var example2 = 3 <= 200;
// Your prediction:
console.log(example2<=200);

var example3 = 300 <= 300;
// Your prediction:
console.log(example3<=300);

var example4 = 10 !== 9;
// Your prediction:
console.log(example4!==9);

var example5 = 10 !== 10;
// Your prediction:
 console.log(example5!==10);

var example6 = "5" === 5;
// Your prediction:
 console.log(example6===5);

var name = "Karlie";
var example7 = "Karlie" === name;
// Your prediction:
 console.log(example7 = name);

var lastName = "Kloss";
var example8 = "Kloss " === lastName;
// Your prediction:
 console.log(example8 = lastName);

var ankita= "4"===4
console.log(ankita===4);

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Let's practice writing some conditionals!






//If the veggiesEaten is 5-9, print out a message of "Great job! You are within the recommended range!"
// greater than 9? "WOW you really like veggies. Make sure you are getting enough protein."
// 1-4? "Uh oh, looks like you aren't getting enough veggies. You gotta do it!"
//0? "We really need to make a plan to get you your veggies."

//change the value stored in veggiesEaten a few times to make sure all of your conditions are working!
var veggiesEaten = 2; 
if (veggiesEaten >= 5 && veggiesEaten <= 9) {
  console.log ("Great job! You are within the recommended range!");
} else if (veggiesEaten > 9) {"WOW you really like veggies. Make sure you are getting enough protein." }
 else if (veggiesEaten >=1 && veggiesEaten <=4) {
   console.log ("Uh oh, looks you aren't getting enough veggies. you gotta do it!");
  if (veggiesEaten === 0) {
     console.log ("We really need to make a plan to get you your veggies.")
   }
 }

var  hoursPhone = 2; 
if ( hoursPhone >= 1 &&  hoursPhone <= 3) {
  console.log ("Wow! You must have a 20/20 vision!");
} else if ( hoursPhone > 4) {"Maybe try cutting that time down a bit?." }
 else if ( hoursPhone >=5 &&  hoursPhone <=8) {
   console.log ("Don't you have better things to do?");
  if ( hoursPhone === 9) {
     console.log ("Do you even sleep?!.")
   }
 }




var videoGames = 3
if (videoGames >= 0 && videoGames <= 4 ) {
  console.log("Nice! Keep it up");
}
else if (videoGames > 4 && videoGames <= 8) {
  console.log("That's a bit too much!");
}
else {console.log("That is way too much!!");}




















 var hoursPhone = 8; 
if (hoursPhone >= 1 && hoursPhone <= 2) {
  console.log ("Wow! You must have a 20/20 vision!");
} else if (hoursPhone > 4) {"Maybe try cutting that time down a bit?." }
 else if (hoursPhone >=7 && hoursPhone <=12) {
   console.log ("Don't you have better things to do?");
  if (hoursPhone === 24) {
     console.log ("Do you even sleep?!.")
   }
 }

 var password = "Aeiou123"
 var passwordLength = password.length;
 if (passwordLength > 6 && passwordLength < 18) {
   console.log ("Continue.");
 } else if (password) {
   console.log ("Incorrect password. Try again.")
 }


























 var user = "ankita7"
 var user= user.length
 if (user.length > 5 && user.length < 16){
   console.log("Continue.");
 }
 else if (password) {console.log("Try again.");}





 var password = "Aeiou123"

 if (password > 6 && password < 18) {
   console.log ("Continue.");
 } else if (password) {
   console.log ("Incorrect password. Try again.")
 }

 var username = "AnkitaSahahaha16"
 var passwordLength = password.length;
 if (passwordLength > 2 && passwordLength < 40) {
   console.log ("Perfect!");
 } else if (password) {
   console.log ("Terrible!")
 }

