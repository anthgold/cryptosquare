// Business Logic
$(document).ready(function() {
  $("form#text-entry").submit(function(event) {
    event.preventDefault();
    var userText = $("input.userText").val().replace(/\s/g, '');
    var textArray = userText.split('');
    var textLength = parseInt(userText.length);
    var textSqrt = Math.sqrt(textLength);
    var columns = 0;
    var outputText = new Array;

    // to-do: insert loop for removing spaces and punctuation

    // find # columns
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

    //adds space every 5 letters
    for (var i = 5; i < textLength; i += 6) {
      outputText.splice(i, 0, " ");
    }





// User Interface Logic

    //convert to text next build!
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
