//back-end
var numeral = function(numeralInput) {
if (numeralInput < 1 || numeralInput > 3999) {
    alert("no!");
   } else {
    // alert("Cool!")
    console.log(typeof numeralInput);
    var inputArray = numeralInput.split("");
    console.log(inputArray);
    for (var index = 0; index < inputArray.length; index++) {
      console.log(inputArray[inputArray.length-(1 * (index + 1))]);
    }


  }
};




//UI

$(document).ready(function() {
  $("form#numeral").submit(function(event) {
    event.preventDefault();
    var numeralInput = $("input#numeral").val();
    console.log(numeralInput);
    // if (numeralInput < 1 || numeralInput > 3999) {
    //     alert("no!");
    //    } else {
    //     alert("Cool!")
    //   }

    var result = numeral(numeralInput);
    $("#result").text(result);
    // $("#noresult").text(result);
  });
});
