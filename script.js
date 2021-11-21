// Exercise: Hey kiddo 
console.log("*Exercise nr 1 - Hey kiddo:")
const checkAge = function (age) {
    if (age >= 18) { return true }
    else { return false }
};

const sayHello = function (age) {
    if (age == true) {
        console.log("Hello there")
    } else { console.log("Hello kiddo") }
}

const doCheck = function (age) {
    const trueOrFalse = checkAge(age);
    //console.log(trueOrFalse)
    const HelloCalling = sayHello(trueOrFalse);
    return HelloCalling
}

const result = doCheck(40)

// Exercise VAT calculations nr 1 
console.log("*Exercise VAT nr 1:")

const calcprizeIncl = function (basePrize, VAT) {
    const prizeIncl = basePrize + (basePrize * VAT)
    console.log(prizeIncl)
    return prizeIncl
}

const startCalc = function (basePrize, VAT) {
    const prizeIncl = calcprizeIncl(basePrize, VAT)
}

const prizeShop = startCalc(100, 0.21)

// Exercise VAT calculations nr 2
console.log("*Exercise VAT nr 2:")

const calcBasePrize = function (prizeIncl, VAT) {
    const basePrize = prizeIncl / (1 + VAT)
    console.log("basePrize: ", basePrize)
    return basePrize
}

const calcVATPrize = function (prizeIncl, VAT) {
    const vatPrize = prizeIncl - (prizeIncl / (1 + VAT))
    console.log("vatPrize: ", vatPrize)
    return vatPrize
}

const calcVAT = function (prizeIncl, VAT) {
    console.log("parameters: ", prizeIncl, VAT)
    const basePrize = calcBasePrize(prizeIncl, VAT)
    const vatPrize = calcVATPrize(prizeIncl, VAT)
    let outcome = [basePrize, vatPrize]
    console.log("As an Array:", outcome)
}

const basePrize = calcVAT(50, 0.09)
