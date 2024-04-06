function minOFarry(numbers) {

let smallest=numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
      if(numbers[i] < smallest){
        smallest = numbers[i];
      }
    }
return smallest;
}


const heights = [1, 546, 623, 344, 676, 890]
const minimumHight = minOFarry(heights);
console.log(minimumHight);