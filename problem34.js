function antiDuplicate(items) {
    const unique = [];
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }

    }
    return unique;
}



const itemList = ["arman","miskat","arman" , "miskat"];
const noduplicate = antiDuplicate(itemList);
console.log(noduplicate);