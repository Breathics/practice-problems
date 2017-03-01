var a = '1375892';
var b = a.split('');
var holdTen = [];

function toTen(strNum){
  for (var i = 0; i < b.length; i++){
    var newTen = [];
    var result = null;
    newTen.push(b[i]);
    console.log("newTen set of nums " + newTen);
    result = b[i];
    console.log("Initial result set at " + i + " is " + result);
    for (var j = i+1; j < b.length; j++){
      if (result === 10){
        holdTen.push(newTen);
        break;
      }
      if ((result += b[j]) > 10){
        j++
      }
      result += b[j];
      newTen.push(b[j]);
    }
  }
}

toTen(b);