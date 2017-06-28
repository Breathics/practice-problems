function invert_negative(num1){
    if (num1 < 0){
        return num1
    } else if (num1 > 0){
        num1 = (num1 - (2*num1));
        return num1
    } else if (typeof num1 === typeof ''){
        return false
    }
}

console.log(invert_negative(-5));
console.log(invert_negative(4000));
console.log(invert_negative('puppies'));