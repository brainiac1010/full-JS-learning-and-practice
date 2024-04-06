function devideabl(num) {
    const results = [];

    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("foo and bar");
        } else if (i % 3 === 0) {
            results.push("foo");
        } else if (i % 5 === 0) {
            results.push("bar");
        } else {
            results.push(i);
        }
    }

    return results;
}

const givenNumber = 50;
const finalNumber = devideabl(givenNumber);
console.log(finalNumber);
