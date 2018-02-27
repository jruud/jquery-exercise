var description = $('#description');
var list = $('#list');
var change = $('#change');


// $(change).on('click', function changeColor() {
//   $(description).css("color", "red");
// });

$(change).on('click', function changeOrder() {
  var items = $(description).parent().children();
  $(description).parent().append(items[0]);
});
