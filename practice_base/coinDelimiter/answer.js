// coin delimiter
//

var coins = .45;
// var coins = .54;
// var coins = .57;
// var coins = 1.39;
var coinArray = [25, 10, 5, 1];
var coinDelims = [];

function coinDelim(coins) {
  var coinsLeft = coins * 100;
  var denoms = {
    quarters: null,
    dimes: null,
    nickels: null,
    pennies: null,
  };
  for (var i = 0; i < coinArray.length; i++){
      if (coinsLeft >= coinArray[i]){
          denoms.coinArray[i] = parseInt(coinsLeft/coinArray[i]);
          coinsLeft = coinsLeft - (coinArray[i] * denoms.coinArray[i]);
      }
  }
  // if (coinsLeft >= coinArray[0]){
  //   denoms.quarters = parseInt(coinsLeft/coinArray[0]);
  //   coinsLeft = coinsLeft - (coinArray[0] * denoms.quarters);
  //   console.log(coinsLeft);
  // }
  // if (coinsLeft >= coinArray[1]){
  //   denoms.dimes = parseInt(coinsLeft/coinArray[1]);
  //   // var denomFirst = denoms;
  //   // coinDelims.push(denomFirst);
  //   // if (coinsLeft % coinArray[1] === 0){
  //   //     denoms.dimes = null;
  //   //     denoms.nickels = parseInt(coinsLeft/coinArray[2]);
  //   //     var denomSecond = denoms;
  //   //     coinDelims.push(denomSecond);
  //   //     if (coinsLeft % coinArray[2] === 0){
  //   //         denoms.nickels = null;
  //   //         denoms.pennies = parseInt(coinsLeft/coinArray[3]);
  //   //         var denomThird = denoms;
  //   //         coinDelims.push(denomThird);
  //   //         return coinDelims;
  //   //     }
  //   // }
  //   coinsLeft = coinsLeft - (coinArray[1] * denoms.dimes);
  // }
  // if (coinsLeft >= coinArray[2]){
  //   denoms.nickels = parseInt(coinsLeft/coinArray[2]);
  //   coinsLeft = coinsLeft - (coinArray[2] * denoms.nickels);
  // }
  // if (coinsLeft >= coinArray[3]){
  //   denoms.pennies = parseInt(coinsLeft/coinArray[3]);
  //   coinsLeft = coinsLeft - (coinArray[3] * denoms.pennies);
  // }
  return denoms;
}

console.log(coinDelim(coins));
