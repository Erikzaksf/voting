$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('.ofAge').show();
  } else if (age === 18) {
    alert("Please vote responsibly");
    $('.ofAge').show();
  } else {
    $('.underAge').show();
  }
});
