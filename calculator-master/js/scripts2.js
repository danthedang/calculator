
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic:

$(document).ready(function() {
  $("#add-btn").click(function() {
    $("form#inputForm").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = add(number1, number2);
      $("#output-add").text(result);
    });
  });

  $("#subtract-btn").click(function() {
    $("form#inputForm").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = subtract(number1, number2);
      $("#output-subtract").text(result);
    });
  });

  $("#multiply-btn").click(function() {
    $("form#inputForm").submit(function(event) {
     event.preventDefault();
      var number1 = parseInt($("#input1").val());
      var number2 = parseInt($("#input2").val());
      var result = multiply(number1, number2);
      $("#output").text(result);
    });
  });

$("#divide-btn").click(function() {
  $("form#inputForm").submit(function(event) {
   event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});

});
