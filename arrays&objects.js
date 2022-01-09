# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
//Declaring Arrays:

// Declare a variable named thingsILike. This variable should store an Array of Strings. Declare it with at least 5 strings of things you like!

//Declare a variable named ages. This variable should store an Array of Numbers. Each number should represent the age of someone in your family/friends/pets. Declare it with at least 5 numbers!

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// Accessing Elements in an Array!

var beverages = ["water", "coffee", "latte", "la croix"];
// how many elements are in the beverages array?
// what is the data type of the elements in the beverages array?
// what data is stored in index 2 of the beverages array?

// what will print out for line 10? Why?
// console.log(beverages[1]);

//Add another beverage to the END of the array:

//console log the entire array to verify you've added the new beverage:

//Remove "water" from the array: 

//console log the entire array to verify you've removed "water":

//Change "latte" to something else:

//console log the entire array to verify you've changed "latte":

// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
//Declaring Objects:

// Declare a variable called states and capitals. It should store an object. The keys should be state names and the values should be strings with the capital names. Include at least 4 state/capital pairs!


// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
//Accessing Data From Objects:

var myDog = {
  name: "Oscar",
  isCute: true,
  furColor: "black",
  lovesToPlay: true,
  bestFriend: "Sodie",
  favoriteSnack: "Busy Bones"
}
console.log(myDog.bestFriend);

// What will print out for the line below? 
// Whata data type is that?
// console.log(myDog.favoriteSnack)

// Access the String "Oscar" and print it out

// Print out the following sentence (without hard-coding "Oscar" or "Sodie"!)
//"Oscar loves playing with his best friend Sodie!"

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//Spicy Challenge:

var beverageDetails = [
  {name: "water", size: "medium"}, 
  {name: "coffee", size: "large"}, 
  {name: "latte", size: "small"},
  {name: "la croix", size: "n/a"}
];


var foodDetails = [
{food: "dal", size: "2 hata"},
{food: "bhaat", size: "3 hata"},
{food: "butter chicken", size: "2 piece"},
{food: "toor dal", size: "5 hata"}
];

console.log(`I want a ${foodDetails[2].size} ${foodDetails[2].food}. Thank you!`)
// without hard-coding the words "coffee" or "large", but by using the beverageDetails variable, print out the sentence:

// "May I have a large coffee, to-go, please?"

console.log(`May I please have a ${beverageDetails[1].size} ${beverageDetails[1].name}, to-go, please? `)
