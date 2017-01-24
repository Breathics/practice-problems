function find_middle_letters(enter_string){
    if (enter_string.length%2){
        var middle_letter = enter_string.charAt(Math.floor(enter_string.length/2));
        return middle_letter
    } else {
        var middle = enter_string / 2;
        middle = (enter_string.charAt((enter_string.length-1)/2) + enter_string.charAt((enter_string.length)/2));
        return middle
    }
}

console.log(find_middle_letters('seven'));
console.log(find_middle_letters('dish'));