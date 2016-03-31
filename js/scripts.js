// Business Logic
$(document).ready(function() {
  $("form#text-entry").submit(function(event) {
    event.preventDefault();
    var userText = $("input.userText").val();
    var textArray = userText.split('');
    var textLength = parseInt(userText.length);
    var textSqrt = Math.sqrt(textLength);
    var columns = 0;
    console.log(typeof textArray);
    console.log(textArray);
    var outputText = new Array;
    // var i;

    //

    //find # columns
    for (var i = 1; i <= textSqrt; i ++) {
      columns = i;
    }

    //selects starting # for loop
    for (var i = 0; i < columns; i++) {
      //select every multiple of column# and pushes to output array
      for (var c = i; c < textLength; c += (columns)) {
        outputText.push(textArray[c]);
      }
    }

    console.log(outputText);




// User Interface Logic

    alert(outputText);

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
