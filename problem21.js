function odd_even(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
console.log(odd_even(88)); // Output: Even


function odd_even(num) {
    if (num % 2 === 0) {
        console.log('the number is:', "Even");
        return "Even";
    } else {
        console.log('the number is:', "Odd");
        return "Odd";
    }
}

// Example usage:
console.log(odd_even(2)); // Output: the number is: Even, Even
