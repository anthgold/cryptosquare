// Business Logic
$(document).ready(function() {
  $("form#text-entry").submit(function(event) {
    event.preventDefault();
    var userText = $("input.userText").val();
    var textArray = userText.split();
    var textLength = parseInt(userText.length);
    var textSqrt = Math.sqrt(textLength);
    var columns = 0;
    var outputText = [];
    // var i;

    //

    //find # columns
    for (var i = 1; i <= textSqrt; i ++) {
      columns = i;
    }

    //loop for multiple scans of array
    for (i = 0; i < columns; i++) {
      //loop that looks
      for (var c = 0; c < columns; c += columns) {
        outputText = outputText.push(textArray[c]);
      }
    }



// User Interface Logic

    alert('outputText');

    // console.log(arabicNumber);
    //
    // var reverseNumber = arabicNumber.toString().split("").reverse().join("");
    //
    // ones = parseInt(reverseNumber.charAt(0));
    // tens = parseInt(reverseNumber.charAt(1));
    // hundreds = parseInt(reverseNumber.charAt(2));
    // thousands = parseInt(reverseNumber.charAt(3));
    //
    //
    // var romanNumber = romanThousands.concat(romanHundreds,romanTens,romanOnes);
    //
    // alert(arabicNumber + " in Roman numberals is: " + romanNumber);
    //
    // $("#result").show();

  });
});
