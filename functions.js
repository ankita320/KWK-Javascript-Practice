//⭐️⭐️⭐️⭐️⭐️⭐️ Functions
// 📗 Functions are ACTIONS in code that wait to be called on to perform the action

// Syntax:
// function functionName() {
//    code goes here;
//  }



function doSomething () {
  var name = "Ankita";
  console.log(`Hello ${name}, how are you?`);
 } doSomething ()










// 📗 When we DECLARE a function, we tell it what its job is

 function walkDog(number) {
  console.log(`Put on ${number} leash(es).`);
 console.log("Put treats in pocket");
  console.log("Put poop bag in pocket");
} walkDog(9);

function eat(cupcakes) {
  console.log(`I ate ${cupcakes} cupcakes today.`);
} eat(3);


// 📗 Writing a function doesn’t execute it. We have to CALL the function for it to take the action

// function walkDog() {
//   console.log("Put on leash");
//   console.log("Put treats in pocket");
//   console.log("Put poop bag in pocket");
// }

// This is how we CALL the function we created
// walkDog();


//🚀🚀🚀🚀🚀🚀 Try it!
// Declare and call a function named sayHello. 
// Write 2-4 console.log statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.

// Declare and call a function named sayGoodbye. 
// Write 2-4 console.log statements in it, saying whatever you'd like. Verify that it is running successfully by checking the console for the sentences.


//  To allow our functions to be more dynamic or work in more situations, we can write the declaration with parameters
// 📗 A PARAMETER creates a variable with no value in our functions. All the things you do with variables can be done with parameters WITHIN the function.
// 📗  The ARGUEMENT provides the value for the parameter when the function is called

// function walkDog(numberOfDogs) {
//   console.log(`Put on ${numberOfDogs} leashes`);
//   console.log(`Put ${numberOfDogs} treats in pocket`);
//   console.log(`Put ${numberOfDogs} poop bags in pocket`);
// }

// walkDog(2);

//What is the parameter? What is the arguement?


//🚀🚀🚀🚀🚀🚀 Try it!
// Mild Challenge 🌶: write a function that takes in 1 argument (a number). Function console.log’s the sum of that number and 5.
function math(number) {
  console.log(number + 5);}
  math(7);

  function maths(nums){
    console.log(nums + 8);
  }maths(10);



// Medium Challenge 🌶🌶: write a function that takes in 2 arguments (numbers). Function console.log’s the sum of those numbers.
function sum(num1, num2) {
var answer = (num1 + num2); 
console.log(`sum of 5 + 9 = ${num1 + num2}`);
}
sum(5 + 9)


function fizzbuzz(num){
  if (num%3 === 0){
    // CODE HERE
    if (num%5 === 0){
      // CODE HERE
      console.log ("FIZZBUZZ");
      } else  {
      console.log("FIZZ");
      }
      } else if(num%5 === 0){
    console.log("BUZZ");
    } else {
      console.log(num);
  }
  }
fizzbuzz(60);



function honeycomb(numb){
  if (numb%4 === 0){
    // CODE HERE
    if (numb%6 === 0){
      // CODE HERE
      console.log ("HONEY");
      } else  {
      console.log("COMB");
      }
      } else if(num%4 === 0){
    console.log("HONEYCOMB");
    } else {
      console.log(numb);
  }
  }
honeycomb(192);



// Spicy Challenge 🌶🌶🌶: write a function that takes in 3 arguments (all numbers). Function adds first two numbers and multiplies the sum by third.


// 📗 We’ve used mostly console.log() to make values appear in our console. As we continue, we’ll need our functions to return values so we can use them elsewhere. To do that, we use the keyword RETURN.

// function timeToWalk(numberOfDogs) {
//   var totalMinutes = numberOfDogs * 15;
//   return totalMinutes;
// }

// In this function, we are not calling console.log, so when we call it, we won’t see an output. But, we can store the output in another variable.
// With as much technical vocabulary as possible, explain what is happening at each line!

// function timeToWalk(numberOfDogs) {
//   var totalMinutes = numberOfDogs * 15;
//   return totalMinutes;
// }

// var minutes = timeToWalk(3);
// console.log(`You should walk a total of ${minutes} minutes.`);

//⭐️⭐️⭐️⭐️⭐️⭐️ Incorporating Conditionals
// We can also include conditionals in our functions!
// function walkDog(numberOfDogs) {
//   if (numberOfDogs === 1) {
//     console.log(`Put on ${numberOfDogs} leash`);
//     console.log(`Put ${numberOfDogs} treat in pocket`);
//     console.log(`Put ${numberOfDogs} poop bag in pocket`);
//   } else {    
//     console.log(`Put on ${numberOfDogs} leashes`);
//     console.log(`Put ${numberOfDogs} treats in pocket`);
//     console.log(`Put ${numberOfDogs} poop bags in pocket`);
//   }
// }


//🚀🚀🚀🚀🚀🚀 Try it!
//Write a function that takes one argument, a gradeLevel. It should then print out "You are in elementary school" or "You are in middle school", etc. based on the grade level passed in.
// Now, write another function that takes in a number, a dogAge, and multiplies it by 7. It should print out a sentence telling the dog how old it is in human years.



//🚀🚀🚀🚀🚀🚀 More Practice - Getting creative!
// Decide which task you'd like to write code for. Make a list of steps that would be required to complete the task. Make a list of possible arguments you could pass the function to make it dynamic. Get your lists approved by your breakout session leader, then declare and call your function.
// Now, re-write your function so it not only console.logs data, but returns a value. Store the return value in a variable.
