function hourToMineut ( hour){
 hour = hour*60;
return hour;
}



const myHoure = 12 ;
const minute=hourToMineut(myHoure);
console.log("the minute is :",minute);