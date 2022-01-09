# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
//🚀🚀🚀🚀🚀🚀 Warm Up!
// 📗 ITERATION (or looping for a specified number of times) is a process of repeating a task for each object in a collection
// Complete warm up in journal!

//⭐️⭐️⭐️⭐️⭐️⭐️ Iterator Methods
// 📗  Iterator methods are used to iterate, or “step through,” each element in an array
// We can use .forEach() as an iterator method because its job is to run a function not only once, but one time for each element in the array 

// Iterators save us time!!!
//For example, if we wanted to do something with each string in the trending array, our code would look something like this:
// var trending = ["@cosette", "@avani", "@lorengray", "@jamescharles"];

// console.log(`Have you seen that TikTok from ${trending[0]} yet?!`);
// console.log(`Have you seen that TikTok from ${trending[1]} yet?!`);
// console.log(`Have you seen that TikTok from ${trending[2]} yet?!`);
// console.log(`Have you seen that TikTok from ${trending[3]} yet?!`);


// Iterator Method Syntax:
 var trending = ["@cosette", "@avani", "@lorengray", "@jamescharles"];

trending.forEach(function(creator) {
  console.log(creator);
});
trending.forEach(function(creator) {
  console.log(`I love ${creator}`);
  console.log('ankita')
})

//🚀🚀🚀🚀🚀🚀 Try It Together!
// In a repl, write an array with at least four elements, strings, of things you want to learn.
// Write a forEach for this array and print out "I want to learn ____" for each element.




//⭐️⭐️⭐️⭐️⭐️⭐️ Placeholders and Counters 
// Tumblur example!
// The forEach() method will NEVER change the array it was called on...
// Sometimes, we may want to iterate through the array and make changes to it
// 📗 In that case, we can use a blank array that we can use instead (called a PLACEHOLDER)

// Walking through an example :)

var numbers = [1, 4, 23, 14, 5, 7, 11, 6, 92];
var bigNumbers = [];
numbers.forEach(function(num){
  if (num>=10){
    bigNumbers.push(num);
    console.log(bigNumbers);
  } else {
    console.log(`The number ${num} was not added.`)
  }
}
)


//🚀🚀🚀🚀🚀🚀 Try it!
// Write an array that contains at least five strings and store it in a variable. You choose what the words are!
// Use forEach to create a NEW array of the words from your original array than have less than 6 characters. Use console.log() to verify your new array holds what you think it does.
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var lengthycolors = [];
colors.forEach(function(bow){
  if(bow.length<=5){
    lengthycolors.push(bow);
    console.log(lengthycolors);  
    } else {
    console.log(`The color ${bow} was not added.`);
    }
});

var deserts = ["cupcakes", "cookies", "icecream", "brownies", "milkshakes", "cake"];
var biggestDeserts = [];
deserts.forEach(function(des){
  if(des.length<=7){
    biggestDeserts.push(des);
    console.log(biggestDeserts);
  }else {
    console.log(`The desert ${des} was not added because it is is my least favorite desert.`);
  }
  });
