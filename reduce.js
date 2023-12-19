// pre-warm up
// how would we add up all these numbers without reduce?
let numbers = [5, 10, 15, 20, 25, 30, 35];
// counter variable to hold our starting point
let numSum = 0;
// iterate over numbers and add each value into some
for (let i = 0; i < numbers.length; i++) {
  numSum += numbers[i];
}
console.log(numSum);

// now with reduce
let sum2 = numbers.reduce((results, num) => {
  return results * num;
}, 0);

console.log(sum2);
// results acts as the initial counter, num is each element in the array and in the second parameter of this function we also start it off at 0

// Warm up

/*
    1. Create an array called "points" with the numbers 55-60 (inclusive)

    2. Create a variable called "sum" using reduce that sums up the points in "points"
    
    3. Print out both "points" and "sum"
*/

let points = [55, 56, 57, 58, 59, 60];

let sum = points.reduce((results, num) => {
  return (results += num);
}, 0);

console.log(points);
console.log(sum);

/* Exercise 1
    1. Create an array called 'companies' of the following strings:
        ["apple", "tesla", "spacex", "amazon", "meta", "google"]

    2. Create a const called "modded" that reduces the "companies"
       array to a string of companies that DO NOT start with the
       letter 'a', separated by dashes

    3. Print out "companies" and "modded"

    "modded" should be: "tesla-spacex-meta-google-"

    BONUS: How can you get rid of the trailing '-' ?
    TIP: Look up reduce on Google using docs like MDN
*/

let companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, str, index) => {
  if (str.startsWith("a")) {
    return result;
  }
  if (index === companies.length - 1) {
    return result + str;
  }
  return result + str + "-";
}, "");

console.log(modded);

/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a const called "afterTax" that does a sum like so:
        - If the price is greater than 6, add the price with no tax
        - Otherwise, add the price plus a tax of 20%

    3. Print out "prices" and "afterTax"
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

let afterTax = prices.reduce((result, nums) => {
  if (nums > 6) {
    return result + nums;
  }
  return result + nums * 1.2;
}, 0);

console.log(prices);
console.log(afterTax);

/*
    1. Create the following array called "items":
        ["light", "banana", "phone", "book", "mouse"]

    2. Create an new array called "caps" that:
        - maps over "items" and capitalizes each item

    3. Create a const called "concat" that:
        - uses reduce to concatenate all the strings in "caps"
          using a space to separate each item

    4. Print out "items", "caps" and "concat"

    BONUS: Can you do steps 1-3 in one line?
*/

let items = ["light", "banana", "phone", "book", "mouse"];

let caps = items.map((str) => {
  return str.toUpperCase();
});

const concat = caps.reduce((results, str) => {
  return results + " " + str;
}, "");

console.log(items);
console.log(caps);
console.log(concat);

// oneStep
let oneliner = items
  .map((str) => {
    return str.toUpperCase();
  })
  .reduce((results, str) => {
    return results + " " + str;
  }, "");

  console.log(oneliner)