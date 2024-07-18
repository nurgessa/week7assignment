/**  Overview 
- map:
    map a function to every element in an array
    return an array of those "mapped" values

- filter
reduce
foreach
 */

//MAP   in = 3values, out = 3values
const numbers = [1, 2, 3, 4, 5];
const x = numbers.map((num) => num * 3);
const y = numbers.map((num) => num + 1);
console.log(x);
console.log(y);

// FILTER in:5, out:3
const months = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
const filteredArray = numbers.filter((month) => month > 3);
console.log(filteredArray);

// REDUCE in:5, out:1
const reduceNumbers = [1, 2, 3, 4, 5];
const multiply = (total, currentValue) => total * currentValue;
const reducedNumber = numbers.reduce(multiply, 1);

console.log(reducedNumber);

const inventory = [
  { name: "Laptop", price: 1200, quantity: 4 },
  { name: "Phone", price: 800, quantity: 10 },
  { name: "Tablet", price: 500, quantity: 6 },
  { name: "Headphones", price: 200, quantity: 15 },
];

const cheapItems = inventory.filter((item) => item.price < 700);
console.log(cheapItems);
