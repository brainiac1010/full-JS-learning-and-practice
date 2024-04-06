function getArraySum(numbers){
let sum =0;
 for(let i=0; i<numbers.length ; i++){
    const index= i;
    const element =numbers[i];
    sum+=element; 
console.log(index,element,sum);

 }
    return sum ;
 }
   
    const myArray = [ 12,23,34,65,67,78];
    const totalSum = getArraySum(myArray);
    console.log("Total sum:", totalSum);
   