# KWK-Javascript-Practice
javascript practice from KWK: functions, objects, arrays, dom
var button = $('.submit-btn');
var listContainer = $('.potluck-list');

button.on('click', addFoodItem);

function addFoodItem() {
  var foodInput = $('.food-input');
  listContainer.append(`<p>${foodInput.val()}</p>`);
  foodInput.val('');
}
