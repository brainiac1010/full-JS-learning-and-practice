function findingMax(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }

}


const firstNumber = 20;
const secondNumber = 30;
const thirdNumber = 50;
const bigestNumber = findingMax(firstNumber, secondNumber, thirdNumber);
console.log("The biggest number is:", bigestNumber);



function findingmax2(first, second, third) {


    const maximumnumber = Math.max(first, second, third);
    return maximumnumber;
}

const number1 = 45;
const number2 = 65;
const number3 = 29;
const theMaximumNumber = findingmax2(number1, number2, number3);
console.log("the maximum number is :", theMaximumNumber);
