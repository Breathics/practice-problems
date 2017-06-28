var thisArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(inputString, biggerWordsArray){
    var output = [];
    for (var i = 0; i < biggerWordsArray.length; i++){
        if (biggerWordsArray[i].length > inputString.length){
            output.push(biggerWordsArray[i]);
        }
    }
    return console.log(output);
}

biggerWords('llama', thisArray);
