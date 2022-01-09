# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
var list = $('.to-do-list');

list.append(`<p>Make coffee</p>`);
list.append(`<p>Put laptop in backpack</p>`);
list.append(`<p>Get leftovers out of fridge</p>`);


var userText = $("input");
var button = $('.submit-btn');

button.on("click", userSubmit);

function userSubmit(){
  // code here!
  var userText = $("input");
  console.log(userText.val());
  var notes = $('.notes');
  notes.append(`<p>${userText.val()}</p>`);
  userText.val("");
}

 
var newInput = $(".new-input");
var newButton = $(".new-btn");

newButton.on('click', newFunction);

function newFunction(){
  var newInput = $(".new-input");
  var newSection = $(".new-section");
  newSection.append(`
  <div>
    <p>${newInput.val()}</p>
    <button class="delete-btn">Delete</button>
  </div>`);
  newInput.val("");
}

var newSection = $(".new-section");

newSection.on("click", deleteFunction);

function deleteFunction(){
  if (event.target.className==="delete-btn"){
    event.target.parentNode.remove();
  }

}


