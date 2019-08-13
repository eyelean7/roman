//back-end
var outputFinal = [];
var numeral = function(numeralInput) {
if (numeralInput < 1 || numeralInput > 3999) {
    alert("no!");
   } else {
    // alert("Cool!")
    console.log(typeof numeralInput);
    var inputArray = numeralInput.split("");
    var romanArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var output = [];
    // var outputFinal = [];
    for (var index = inputArray.length-1; index >= 0; index--) {
      var indexRoman = ((inputArray.length-(index+1))*2);
      var digit = parseInt(inputArray[index]);
      if (digit > 0 && digit < 4) {
        for (i = 0; i < digit; i++) {
          output.unshift(romanArray[indexRoman]);
          outputFinal = output.join("");
        } //digit for loop
      } //0-3 branch
      else if (digit === 4) {
        output.unshift(romanArray[indexRoman], rmanArray[indexRoman + 1]);
      }
      else if (digit > 4 && digit < 9) {
          output.unshift(romanArray[indexRoman + 1]);
          for (i = 0; i < digit - 5; i++) {
            output.push(romanArray[indexRoman]);
          } //digit for loop
          outputFinal = output.join("");
      } //5-8 branch
      else if (digit === 9) {
            output.unshift(romanArray[indexRoman], romanArray[indexRoman + 2]);
            outputFinal = output.join("");
      } //9 branch
    } //array for loop

  }
};

//UI

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    var numeralInput = $("input#numeral").val();

    var result = numeral(numeralInput);
    $("#result").text(outputFinal);
    $("#result").show();
  });
});
