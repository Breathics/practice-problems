function fizzbuzz(){
    var range_output = '';
    for (i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            range_output += "FizzBuzz ";
        } else if (i % 3 === 0){
            range_output += "Fizz ";
        } else if (i % 5 === 0){
            range_output += "Buzz ";
        } else {
            range_output += i + ' ';
        }
    }
    console.log(range_output);
}

fizzbuzz();