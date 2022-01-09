# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
/⭐️⭐️⭐️⭐️⭐️⭐️ DEFINITIONS
  //💥 DOM: Document Object Model; represents how the browser reads HTML. It lets JavaScript interact with HTML
  //💥 Manipulating the DOM: changes that are made in the browser, which the user prompts. On the code end, we take three steps in JavaScript: 
    // 1️⃣ Access HTML element objects
    // 2️⃣ Listen to our HTML for user interactions
    // 3️⃣ Change the HTML document


//⭐️⭐️⭐️⭐️⭐️⭐️ WHAT IS JQUERY?
  //💥 Remember add jQuery to the header in  your HTML file: <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  //💥 jQuery: a popular library (chunk of code someone else wrote)that makes writing JavaScript shorter & easier
  console.log('Hello');

//⭐️⭐️⭐️⭐️⭐️⭐️ ACCESS ELEMENTS IN THE DOM (Browser)
//Accessing elements allows us to connect JavaScript to specific HTML Elements
  //Example: HTML file ➡️ <h1> Baby Seals </h1>
  //💥 To access that element in JavaScript you must create a variable to save that element within Javascript 
  //💥 To access the content of an element: console.log(variable.text())
     var header = $('h1');
     console.log(header.text());

    //  Write a variable to get the h2
    var head = $('h2'); console.log(head.text());

    var fact = $('.first-fact');
    console.log(fact.text());

    //var sealFacts = $('.fact-header')
    //How would you console.log the contents of .fact-header?



//🐣🐣🐣🐣🐣🐣 TRY IT #1: ACCESS ELEMENTS
//First, familiarize yourself with the HTML elements in this repl.it. For this activity, you should not need to change the HTML.

//In your JavaScript file, write code to access the following elements and store in a variable, then print to the console. Access elements by element type OR class. In the console, you should see your console.log statements.

  //1) Print the listed seal facts to the console:
  
  //2) Print the fact button to the console by accessing it in 2 DIFFERENT WAYS!


//🌶️🌶️🌶️🌶️🌶️🌶️ MEDIUM CHALLENGE
// Create a duplicate of the h1 element in the HTML and check the console. Was anything different printed this time? Why? What does this tell you about the importance of using classes?



//⭐️⭐️⭐️⭐️⭐️⭐️ CHANGING CONTENT ON THE DOM (Browser)
  //💥 First, Access the element you want to change 
  //Example: 
    //var header = $('h1')
  //💥 Use the .text method to change the element 
  var header = $('h1');
  header.attr("href");


//🐣🐣🐣🐣🐣🐣 TRY IT #2: CHANGE ELEMENTS
// By only adding code to the JavaScript file, change the text inside of at least two elements.


//🌶️🌶️🌶️🌶️🌶️🌶️ MEDIUM CHALLENGE
// If you changed the text of the h1 on one line of code, then on the line below changed it to something else, which one would show in the browser? Why?



//⭐️⭐️⭐️⭐️⭐️⭐️ EVENTS & HANDLERS
  //💥 Event Listeners are "listening" for an the user to do something (aka an event)
//Code Along: 

  var button = $('button');
  button.on("click", doSomething);

  function doSomething(){
    console.log("hello");
    var subtitle = $('h2');
    subtitle.text("You clicked the button!");
  }

  //💥 An Event Handler is the action executed after the user does something (aka the event)
  //💥 Event Handler is just a fancy name for any FUNCTION
//Code Along: 



//🐣🐣🐣🐣🐣🐣 TRY IT #3: EVENTS LISTENERS & HANDLERS 
//Add a button element in the HTML. 

//Now, update the JavaScript so that when the button is clicked, the text in the h1 changes to something that it wasn't originally.

//❓❓❓❓❓❓ When you're done, answer these questions with your partner:
// 1️⃣ What line of code is your event listener on?
// 2️⃣ What type of event is your listener on the lookout for?
// 3️⃣ What is the name of your event handler?


//🌶️🌶️🌶️🌶️🌶️🌶️ MEDIUM CHALLENGE
// Explore creating buttons (listeners) that perform different functions (handlers) when "clicked"



////⭐️⭐️⭐️⭐️⭐️⭐️ ACCESSING CSS
// 💥 .addClass will add a class to an HTML element
// 💥 .removeClass will remove a class from an HTML element
// 💥 .toggleClass will check if an HTML has a specific class. If it does, it will remove the class. If it doesn’t, it will add that class.
// 💥 yourVariableName.css  says: I’m about to give you directions on adding styles, or CSS rules. .css takes two arguments, a property, and a value.
