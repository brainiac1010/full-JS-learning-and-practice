
function findOddSume(theArry) {
    const oddNumber = [];
    for (let i = 0; i < theArry.length; i++) {
        const index = i
        const element = theArry[index]

        if (element % 2 !== 0) {
            oddNumber.push(element);
            console.log(index, element);
        }
    }
    return oddNumber;
}
const myNumbers = [5, 7, 8, 9, 12, 13, 16];
const oddnumbers = findOddSume(myNumbers);
console.log(oddnumbers);

function sumArry(alloddNumbers) {
    let sum = 0;

    for (let i = 0; i < alloddNumbers.length; i++) {
        sum = sum + alloddNumbers[i]
    }
    return sum;
}

const sumOFoddNumbers = sumArry(oddnumbers)
console.log("sum of all the odd numbers in this arry is :", sumOFoddNumbers);