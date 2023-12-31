// Examples

const cities = ["madrid", "vancouver", "mumbai", "new york"];

let mCities = cities.filter((city) => {
  return city.startsWith("m");
});

console.log(cities);
console.log(mCities);

/* warm up
    1. Create an array called "practice" with the numbers 10-20 (inclusive)

    2. Create another array using filter that keeps the even numbers in "practice"
    
    3. Print out both "practice" and the new filtered array
*/

let practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = practice.filter((e) => {
  if (e % 2 === 1) {
    return e;
  }
});

console.log(practice);
console.log(even);

// exercise 1
/*
    1. Create an array called 'countries' of the following strings:
        ["France", "South Africa", "Brazil", "United States", "Sweden"]

    2. Filter over 'countries' and keep only the countries that have
       a blank space in their name (South Africa and United States)

    3. Print out both arrays

    HINT: Google for "javascript string contains"
*/

let countries = ["France", "South Africa", "Brazil", "United States", "Sweden"];

let filtered = countries.filter((country) => {
  if (country === "South Africa" || country === "United States") {
    return country;
  }
});

console.log(countries);
console.log(filtered);

//Exercise 2

/*
    1. Create an array called "prices" with the following values:
        [1.23, 19.99, 85.2, 32.87, 8, 5.2]

    2. Create a new array using filter called "lowPrices" that
       keeps all the prices where the price plus a 15% tax is
       less than 10.00

    3. Print out both arrays
*/

let prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
let lowPrices = prices.filter((price) => {
  if (price * 1.2 < 10) {
    return true;
  }
});

/*
    1. Create the following array called "values":
        [[1,2,3], [0,0,1], [3,6,9], [0,1,2]]

    2. Create an new array called "hasTwos" that:
        - filters over "values" and keeps only the sub-arrays
          that have a 2 in them

    3. Print out both arrays

    "hasTwos" should equal to: [[1,2,3], [0,1,2]]

    HINT: Google for "javascript array includes"
*/

let values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

let hasTwos = values.filter((value) => {
  if (value.includes(2)) {
    return value;
  }
});

console.log(values);
console.log(hasTwos);

/*
    1. Create the following array called "nums":
        [10, 20, 30, 40, 50]

    2. Create an new array called "timesTwo" that:
        - maps over "nums" and returns each number
          multiplied by two

    3. Create an new array called "over50" that:
        - filters "timesTwo" to keep only values over 50

    4. Print out all 3 arrays

    "over50" should contain: [60, 80, 100]
*/

let nums = [10, 20, 30, 40, 50]

let timesTwo = nums.map((num) => {
  return num * 2;
});

let over50 = timesTwo.filter((num) => {
  return num > 50;
});

console.log(nums);
console.log(timesTwo);
console.log(over50);
