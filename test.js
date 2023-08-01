// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Euro to Dollar Test
const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(10)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    //const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(12); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


// Euro to Yen Test
const {fromEuroToYen} = require('./app.js')
test("one euro should be 127.9 yen", () =>{
    
    const euroToYen = fromEuroToYen(10)

    // const expected = 10 * 127.9;

    expect(euroToYen).toBe(1279); 
});

// Euro to Pound Test
const {fromEuroToPound} = require('./app.js')
test("one euro should be 0.8 pounds", () =>{
    
    const euroToPound = fromEuroToPound(10)

    expect(euroToPound).toBe(8); 
})

//Dollar to Yen Test
const {fromDollarToYen} = require('./app.js')
test("one dollar should be 107 yen round off", () =>{
    
    const dollarToYen = fromDollarToYen(1)

    expect(dollarToYen).toBe(107); 
});

// Yen to Pound Test
const {fromYenToPound} = require('./app.js')
test("One yen should be 0.006 pounds", () => {
    const pounds = fromYenToPound(1);
    expect(pounds).toBe(0.006);
  });