// parenthese matcher
// string of some mathematical equation
// determine if the syntax is correct
// return an object of correct as true or false *** True looks good
// error: what the error is
// position: index of the position of the error
//

// Possibilities: missing ), mistmatched (, empty (),
// if spaces ' ', do not account for this


var ex = '2 + 4 (6 + (2 x (3/2) + 2 + (4-6)))';

function checkParen(ex){
  var paren = 0;
  var result = {
    correct: null,
    error: null,
    position: null
  }
  for (var i = 0; i < ex.length; i++){
    if (ex[i] === '('){
      paren++;
//       console.log(paren);
    } else if (ex[i] === ')'){
      paren--;
      var hold = i;
      console.log('Position of ending paren');
//       console.log(paren);
    }
  }
  if (paren === 0){
    result.correct = true;
    result.error = 'No errors';
    result.position = 'Everything looks good';
    return console.log(result);
  } else {
    result.correct = false;
    if (paren > 0){
      result.error = 'Mismatched parentheses (, too many!';
      result.position = 'Figuring this out still';
    } else if (paren < 0){
      result.error = 'Missing parentheses )'
      result.position = 'Figuring this out still';
    }
    return console.log(result);
  }



//     console.log(ex[i]);



}

checkParen(ex);
