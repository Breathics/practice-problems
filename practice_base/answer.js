// sumsOfTen
var a = '1375892';
var b = a.split('').map(Number);
var holdTen = [];

function toTen(strNum) {
    for (var i = 0; i < b.length; i++) {
        var newTen = [];
        var result = b[i];
        newTen.push(b[i]);
        for (var j = i+1; j < b.length; ++j) {
            result += b[j];
            if (result > 10){
                result -= b[j];
            }
            newTen.push(b[j]);
            for (var k = j+1; k < b.length; ++k) {
                if (result < 10){
                    newTen.push(b[k]);
                    result += b[k];
                }
                if (result > 10){
                    newTen.pop(b[k]);
                    result -= b[k];
                }
            }
            if (result === 10){
                holdTen.push(newTen);
            }
        }
    }
}

toTen(b);


// Balance Weights
// Input:"[3, 4]", "[1, 2, 7, 7]"
// Output:"1"

// Input:"[13, 4]", "[1, 2, 3, 6, 14]"
// Output:"3,6"


// var strArr = ["[3,4]","[1,2,7,7]"];

var input = ["[12, 4]", "[4,4]"];
// var timArray = ["[1, 6]", "[5]"];


function balanceWeights(strArr){
  var scaleInput = JSON.parse(strArr[0]);
  var weights = JSON.parse(strArr[1]);
  
  var diff = Math.abs(scaleInput[1] - scaleInput[0]);
  for (var i = 0; i < weights.length; i++){
    if (weights[i] === diff){
      return weights[i];
    }
    for (var j = i+1; j < weights.length; ){
        
        var sum = weights[i];
        var addedWeights = [weights[i]];
        sum = sum + weights[j];
        if (sum === diff){
            addedWeights.push(weights[j]);
            var output = addedWeights.toString();
            return output;
         }
        j++
    }
  }
}
console.log(balanceWeights(input));
