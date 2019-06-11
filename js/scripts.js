$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#number").val());
    var numArray = []
    var primeNumbers = []

    // Return an array of numbers from 2 to input number
    for (var i = 2; i <= input; i += 1) {
      numArray.push(i);
    }
    //numArray = [2, 3, 4, 5]

    // Lucas' nested for loops method

    for (var i=0; i<=numArray.length; i+=1){
      for (var m=1+i; m<=numArray.length; m+=1){
        if (numArray[m]%numArray[i]===0){
          numArray.splice(m,1)
        }
      }
    }
    $(".result").show();
    $("#primes").text(numArray);

///////////////////////////////////////

    // for (var i = 2; i <= input; i += 1) {
    //   numArray.forEach(function(num) {
    //     primeNumbers = numArray.filter(num => num % i != 0)
    //     push
    //   })
    // }
    // $(".result").show();
    // $("#primes").text(primeNumbers);

  })
})
