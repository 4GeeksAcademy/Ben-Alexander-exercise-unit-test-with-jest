// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
// console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// 1 EUR (Euro) = 1.2 USD (US Dollar)

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
    
}

// Euro to Yen
const fromEuroToYen = (valueFromEuroYen) => {

    let valueEuroYen = valueFromEuroYen * oneEuroIs["JPY"];
    return valueEuroYen;
    
}

// Euro to Pound
const fromEuroToPound = (valueFromEuroPound) => {

    let valueEuroPound = valueFromEuroPound * oneEuroIs["GBP"];
    return valueEuroPound;
}

// Dollar to Yen
const fromDollarToYen = (valueFromDollarToYen) => {

    let valueDollarToYen = (( oneEuroIs["JPY"] / oneEuroIs["USD"]) * valueFromDollarToYen) ;

    return Math.round(valueDollarToYen);
}

// Yen to Pound
const fromYenToPound = (valueFromYenToPound) => { 
    
    let valueYenToPound = ((oneEuroIs["GBP"] / oneEuroIs["JPY"]) * valueFromYenToPound);
    
    return Math.round(valueYenToPound * 1000) / 1000;
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound, fromYenToPound };