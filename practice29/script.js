function do_math(num1, num2, operator){
    var result;
    if (operator == '+'){
        result = num1 + num2;
        return result
    } else if (operator == '-'){
        result = num1 - num2;
        return result
    } else if (operator == '*' || operator == 'x' || operator == 'X'){
        result = num1 * num2;
        return result
    } else if (operator == '/'){
        result = num1 / num2;
        return result
    } else {
        console.log("Error!");
    }
}