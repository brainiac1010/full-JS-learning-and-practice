function findingMini(num1, num2, num3) {

    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }

}


const firstNumber = 34534;
const secondNumber = 34625;
const thirdNumber = 34323;
const smolestNumber = findingMini(firstNumber, secondNumber, thirdNumber);
console.log("The smolest number is:",smolestNumber);


function findingMini2(first,second,third){


    const minimumnumber= Math.min(first,second,third);
    return minimumnumber;
}

const number1=45;
const number2=65;
const number3=29;
const theMinimumNumber = findingMini2(number1,number2,number3);
console.log("the minimum number is :",theMinimumNumber);
