function find_middle_letters(enter_string){
    if (enter_string.length%2){
        var middle_odd = enter_string[Math.floor(enter_string.length/2)];
        return middle_odd
    } else {
        var middle_even = enter_string[(enter_string.length/2)-1] + enter_string[(enter_string.length)/2];
        return middle_even
    }
}

console.log(find_middle_letters('seven'));
console.log(find_middle_letters('dish'));