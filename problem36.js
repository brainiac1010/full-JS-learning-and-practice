function bazzarCalculator(tomato, alu, peaj) {
    const tomatoKg = 60;
    const aluKg = 25;
    const peajKg = 80;

    const tomatoprice = tomatoKg * tomato;
    console.log("only tomato price", tomatoprice);
    const aluprice = aluKg * alu;
    console.log("only alu price", aluprice);
    const peajPrice = peajKg * peaj;
    console.log("only peaj price", peajPrice);

    const totalPrice = tomatoprice + aluprice + peajPrice;

    return totalPrice;
}

const myGroseary = bazzarCalculator(5, 5, 5);
console.log("total bazar khoroch ", myGroseary);
