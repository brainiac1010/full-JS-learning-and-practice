function reversWords(str) {
    const revResult=[];
    const words = str.split(' ');

    for(let i =words.length-1;i>=0;i--){
    const element=words[i]    
revResult.push(element);
    }
    return revResult.join(' ');
}
const mystring = 'my name is arman';
const final= reversWords(mystring);
console.log(final);
