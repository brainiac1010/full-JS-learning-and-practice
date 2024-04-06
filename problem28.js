function findLeapYear(years) {
    const leapYear = []
    for (let i = 0; i < years.length; i++) {
        const year = years[i];
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            leapYear.push(year);
        }
    }


return leapYear;
}


const yearsArray = [2023, 2024, 2025, 2028, 2030,2032,2034,2036];
const leapYears = findLeapYear(yearsArray)
console.log("leap years", leapYears);