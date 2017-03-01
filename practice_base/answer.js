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
