function format_division(x,y){
  var result = x / y;
  var split = result.toString().split('');
  for (var i = (split.indexOf('.') - 3); i >= 0; i-=3){
    if (split[i-1] !== undefined){
      split.splice(i,0,",");
    }
  }
  return (split.join(''));
}

console.log(format_division(23456789,100));
console.log(format_division(123456789,100));