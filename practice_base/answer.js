function format_division(x,y){
  var result = x / y;
  var split = result.toString().split('');
  for (var i = (split.indexOf('.') - 3); i >= 0; i-=3){
    split.splice(i,0,",");
  }
  return (split.join(''));
}

console.log(format_division(123456789123456789,100));