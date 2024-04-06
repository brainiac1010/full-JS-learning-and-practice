function make_avgFromArry(array, size) {
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum += array[i];
    }
    return sum / size;
}

const numbers = [39, 13, 12];
const size = numbers.length;
const average = make_avgFromArry(numbers, size); // Corrected function call
console.log( parseFloat(average.toFixed(3)));
parseFloat.average
