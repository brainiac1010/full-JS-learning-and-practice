function getOddNumbersOfAnArry(numbers) {

    const oddNumber =[];
    for (let i = 0; i < numbers.length; i++) {

        const indix = i;
        const element = numbers[indix];
        if (element % 2 !== 0){
           
           oddNumber.push(element);
           console.log(indix, element); 
        }
            
    }
return oddNumber
}

const myNumbers = [23, 34, 12, 35, 56, 67, 34, 23, 34];
const oddnumbers= getOddNumbersOfAnArry(myNumbers);
console.log(oddnumbers);

