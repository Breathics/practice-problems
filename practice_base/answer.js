// var matrix = 
// [
// "Y E Q S J A V A S C R I P T D L N C F R",
// "E R U S O L C P V M W K O Z P S J K P W", 
// "O F N O H T X U Y C J B I S J T M P R Z", 
// "N Q P L R A E O U I S E Y J K X I P Q L", 
// "J V Z M E V X I D O I Q U J W D Z U Z D", 
// "H C L T R P F R G X L F Q J O H B E C E", 
// "H E E X J J R L T J M V S K W O B D N I", 
// "Y F H A Z V Q Y T S I A D G Q U F B F C", 
// "G G Z F A V W A A L K B U E D H G U S I", 
// "R U Z A R E H B C Q Z R Q C M U S S E K", 
// "E X I Z O Q S P N S A I L D C H H P W B", 
// "E R S R A I P Z O G R U A R U O Q G Y P", 
// "D B E U N L H E C E G P V N H Y V J N G", 
// "A U O G G H G M T S U D T D I F V B D X", 
// "B T Y U E X Z O I P M H A X D Z R F U B", 
// "R H B Q U T Y E R B E T R E Q A L M F E", 
// "V E Q K D W N B P I N B U G C G Q U R O", 
// "D G K Q Q L X I E Y T Z Y K K R U V Y N", 
// "Y L E B C V P C D L W H E K C H P R E R", 
// "S S I Z Y W R S O U Q T M V N J W I N Y"
// ]

var matrix = 
[
"Y E Q S A L G O R I T H M T D L N C F R",
"E R U S O L C P V M W K O Z P S J K P W", 
"O F N O H T X U Y C J B I S J T M P R Z", 
"N Q P L R A E O U I S E Y J K X I P Q L", 
"J V Z M E V X I D O I Q U J W D Z U Z D", 
"H C L T R P F R G X L F Q J O H B E C E", 
"H E E X J J R L T J M V S K W O B D N I", 
"Y F H A Z V Q Y T S I A D G Q U F B F C", 
"G G Z F A V W A A L K B U E D H G U S I", 
"R U Z A R E H B C Q Z R Q C M U S S E K", 
"E X I Z O Q S P N S A I L D C H H P W B", 
"E R S R A I P Z O G R U A R U O Q G Y P", 
"D B E U N L H E C E G P V N H Y V J N G", 
"A U O G G H G M T S U D T D I F V B D X", 
"B T Y U E X Z O I P M H A X D Z R F U B", 
"R H B Q U T Y E R B E T R E Q A L M F E", 
"V E Q K D W N B P I N B U G C G Q U R O", 
"D G K Q Q L X I E Y T Z Y K K R U V Y N", 
"Y L E B C V P C D L W H E K C H P R E R", 
"S S I Z Y W R S O U Q T M V N J W I N Y"
]
var words_to_find = [
  "ALGORITHM",
  "ARGUMENT",
  "BRACKET",
  "BUG",
  "CLOSURE",
  "CONCAT",
  "DEBUG",
  "INTEGER",
  "JAVASCRIPT"
];

//make this function find the words_to_find in the matrix
//they can be up, down, or diagonal
//return an array of locations of the words.  For example:
/*(Over,Down,Direction) 
  ALGORITHM(5,12,SE)
  ARGUMENT(11,11,S)
  BRACKET(18,14,SW)
  BUG(12,17,E)
  CLOSURE(7,2,W)
  CONCAT(9,13,N)
  DEBUG(1,18,NE)
  INTEGER(8,18,NW)
  JAVASCRIPT(5,1,E)
  numbers are 1 based
*/

var newArray = [];

function findWordsInMatrix(matrix, words_to_find){
  // Loops through words to find
  for (var i = 0; i < words_to_find.length; i++){
    // Loops through entire matrix
    for (var j = 0; j < matrix.length; j++){
      // Loops through each 
      for (var k = 0; k < matrix[j].length; k++){
        if (words_to_find[i][0] === matrix[j][k]){
          for (var l = k; l < matrix[j].length; l+=2){
            newArray.push(matrix[j].indexOf(words_to_find[i][0]));
          }
        }
      }
    }
  }
  console.log(newArray);
  
}

findWordsInMatrix(matrix, words_to_find);
 
