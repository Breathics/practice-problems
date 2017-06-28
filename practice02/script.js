var myArray = ['hello', 45, 'Bob', 'what', '23'];

var arrayReverse = function(myArray){
    for(i = myArray.length-1; i >= 0; i--){
        console.log(myArray[i]);
    }
}
arrayReverse(myArray);
