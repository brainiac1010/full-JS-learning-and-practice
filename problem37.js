const phones = [
    { Name: "nokia", camera: 20, storage: "20gb", price: 25000, colore: "black" },
    { Name: "samsung", camera: 50, storage: "44gb", price: 34000, colore: "marinda" },
    { Name: "oneplus", camera: 33, storage: "23gb", price: 39000, colore: "babyPink" },
    { Name: "redmi", camera: 55, storage: "60gb", price: 15000, colore: "matblack" },
    { Name: "iphone", camera: 15, storage: "200gb", price: 88000, colore: "seagreen" },
    { Name: "motorola", camera: 40, storage: "48gb", price: 40000, colore: "raceyellow" }
];

function highestCameraFinder(phones) {
    let highest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}

const mySelection = highestCameraFinder(phones);
console.log(mySelection);
