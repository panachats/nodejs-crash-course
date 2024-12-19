const calculationVat = (money, vat) => {
    return money * vat / 100;
}

function sayHello(){
    console.log("Hello, World!");
}

module.exports = {
    calculationVat,
    sayHello
}
