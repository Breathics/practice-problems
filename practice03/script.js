var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function sort_array(mixed_array){
    var multi_array = [[],
        [],
        []];
    for(i=0; i< mixed_array.length-1;i++){
        if (typeof mixed_array[i] === 'string'){
            multi_array[0].push(mixed_array[i]);
        } else if (typeof mixed_array[i] === 'number'){
            multi_array[1].push(mixed_array[i]);
        } else {
            multi_array[2].push(mixed_array[i]);
        }
    }
    console.log(multi_array);
}
sort_array(myArray);