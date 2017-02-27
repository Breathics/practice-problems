// parenthese matcher
// string of some mathematical equation
// determine if the syntax is correct
// return an object of correct as true or false *** True looks good
// error: what the error is
// position: index of the position of the error
//

// Possibilities: missing ), mismatched (, empty (),
// if spaces ' ', do not account for this

// var ex = '2 + 4(6 + (2 x (3/2) + 2 + (4-6)))'; // Sample data
var ex = '(((2)) + 4'
function checkParen(ex) {
    var paren = 0;
    var result = { // Object created to store correct/error
        correct: null,
        error: null,
        position: null
    }
    for (var i = 0; i < ex.length; i++) { // Search for open and closing parentheses, will update paren for complete parentheses
        if (ex[i] === '(') {
            paren++;
        } else if (ex[i] === ')') {
            paren--;
            if (paren < 0){ // Returns result object for too many ending parentheses
                result.correct = false;
                result.error = 'Mismatched (';
                result.position = 'Error position at index: ' + i;
                return result;
            }
        }
    }
    if (paren === 0) { // Returns result object for correct syntax of expression
        result.correct = true;
        result.error = 'No errors';
        result.position = 'Everything looks good';
        return result;
    } else if (paren > 0){ // Returns result object for too many opening parentheses
        result.correct = false;
        result.error = 'Missing )';
        result.position = 'Error position at index: ' + i;
        return result;
    }
}

checkParen(ex);
