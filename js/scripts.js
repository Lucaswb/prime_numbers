var findPrimes = function(increment, array) {
  if (increment >= input) {
    return array;
  } else {
    var newArray = array.filter(num => ((num % increment != 0) || (num === increment)))
    // above gets numbers some possible prime numbers
    return findPrimes(increment + 1, newArray)
  }
}

// Lucas' nested for loops method
// //
// for (var i=0; i<=numArray.length; i+=1){
//   for (var m=1+i; m<=numArray.length; m+=1){
//     if (numArray[m]%numArray[i]===0){
//       numArray.splice(m,1)
//     }
//   }
// }

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var numArray = []
    for (var i = 2; i <= input; i += 1) {   // Array of numbers from 2 to input number, e.g., [2,3,4,5]
      numArray.push(i);
    }

    var primeNumbers = findPrimes(2, numArray);

    $(".result").show();
    $("#primes").text(primeNumbers);
    // $("#primes").text(numArray);    // this one for nested for loops
  })
})
