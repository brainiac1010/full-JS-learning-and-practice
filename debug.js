function getFactorial(number) {
    let factoreal = 1;
    for (let i = 1; i <= number; i++) {
        factoreal = factoreal * i;
    }
    return factoreal;
}

const factorealNumber = 3;
const factoreal = getFactorial(factorealNumber);
console.log("factureal of the geven number is:", factoreal);