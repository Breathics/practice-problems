function random_range(start_num, end_num){
    var results = Math.floor(Math.random() * end_num) + start_num;
    return results
}

// Optional - If start_num is an array instead (and end_num isn't specified,
// then it returns a random element from the array.
