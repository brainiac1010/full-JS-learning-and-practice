// function cubeNumber(number) {
//     if (typeof number !== 'number') {
//         return "Input is not a valid number.";
//     }
//     const cube = number * number * number;
//     return cube;
// }
// const numbers = "asd";
// const numberscube = cubeNumber(numbers);
// console.log(numberscube);







// function matchFinder(mainString, substring) {
//     if (!mainString || !substring) {
//         return "One or both strings are missing.";
//     }
// const str = mainString.includes(substring);
//     return str;
// }

// const mainString = "john doe";
// const substring = " doe";
// const isContained = matchFinder(mainString, substring);

// console.log(isContained);





// function isSubstringContained(mainString, substring) {
//     if (!mainString || !substring) {
//         if (!mainString && !substring) {
//             return "Both mainString and substring are missing.";
//         } else if (!mainString) {
//             return "mainString is missing.";
//         } else {
//             return "substring is missing.";
//         }
//     }

//     return mainString.includes(substring);
// }

// const mainString = "john doe";
// const substring = "ohn";
// const isContained = isSubstringContained(mainString, substring);

// console.log(isContained);


// function sortMaker(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             return "Invalid Input";
//         }
//     }

//     const sortedArray = array.slice().sort((a, b) => b - a);


//     if (sortedArray[0] === sortedArray[1]) {
//         return "equal";
//     } else {
//         return sortedArray;
//     }
// }

// const myarray = [4, 5];
// const fixArray = sortMaker(myarray);
// console.log(fixArray);

// function stringComperain(mainstr, secondstr) {

//     if (!mainstr || !secondstr) {
//         return "some of string are not  validet";
//     }

//     const str = mainstr.includes(secondstr);
//     return str;
// }
// const mainString = "john doe";
// const substring = "oe";
// const isContained = stringComperain(mainString, substring);

// console.log(isContained);


// function shortMaker(array) {
//     for (let i = 0; i < array.length; i++) {

//         if (array[i] < 0) {
//             return "pls enter a valid number";
//         }
//     }

//     const sorrting= array.slice().sort((a,b)=> b-a);

//     if (sorrting[0]===sorrting[1]){
//         return "equal"
//     }

//     else {
//         return sorrting
//     }


// }
// const myarray = [4, 5];
// const fixArray = shortMaker(myarray);
// console.log(fixArray);



function findAddress(obj) {
 
    const street = obj.street ? obj.street : "__";
    const house = obj.house ? obj.house : "__";
    const society = obj.society ? obj.society : "__";


    return `${street},${house},${society}`;
}



const address1 = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(address1.street,address1.house,address1.society);
console.log(findAddress(address1)); // Output: 10,15A,Earth Perfect

const address2 = { street: 10, society: "Earth Perfect" };
console.log(findAddress(address2));


// function canPay(array, number) {

//     if (array.length === 0) {

//         return " The array is empty.";
//     }
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];

//     }
//     const totalMoney = sum;

//     if (totalMoney >= number) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// const vhangtiTk = [1, 1, 5];
// const chipsPrice = 10;
// const mydesetion = canPay(vhangtiTk, chipsPrice);
// console.log(mydesetion);