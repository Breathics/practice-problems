function fizzbuzz(){
    var range_output = '';
    for (i = 1; i <= 100; i++){
        if (i % 3 === 0){
            range_output += "Fizz ";
        }
        if (i % 5 === 0){
            range_output += "Buzz ";
        }
        if (i % 5 && i % 3){
            range_output += i + ' ';
        }
    }
    console.log(range_output);
}

fizzbuzz();