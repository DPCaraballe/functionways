
function square (number1, number2) {
    result1 = number1 * number1;
    result2 = number2 * number2; 
    result3 = result1 + result2;
    result4 = result3 * result3;
    return result4;
}

square(7,8);
console.log(square(7,8));

const square1 = function(number3, number4) {
    result5 = number3 * number3;
    result6 = number4 * number4;
    result7 = result5 + result6;
    result8 = result7 * result7;
    return result8;
};

square1( 7,8);
console.log(square1(7,8));

const square2 = (number5, number6) => {
    result9 = number5 * number5;
    result10 = number6 * number6;
    result11 = result9 + result10;
    result12 = result11 * result11;
    return result12;
};


square2( 7,8);
console.log(square2(7,8));