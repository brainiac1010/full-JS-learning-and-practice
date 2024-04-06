


// function BestFriend(array) {
//     let longestName = "";
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length > longestName.length) {
//             longestName = array[i];
//         }
//     }
//     return longestName;
// }

// const friendNames = ["arman", "mahim", "hossain", "vhuiya"];
// const biggestName = BestFriend(friendNames);
// console.log(biggestName);

function BestFriend(array) {
    let longestName = "";
    for (let i = 0; i < array.length; i++) {
        console.log(`Checking ${array[i]}...`);
        if (array[i].length > longestName.length) {
            console.log(`Updating longest name to ${array[i]}`);
            longestName = array[i];
        }
    }
    return longestName;
}

const friendNames = ["arman", "mahim", "hossain", "vhuiya"];
const biggestName = BestFriend(friendNames);
console.log(biggestName);