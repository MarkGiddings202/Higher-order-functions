// Array in memory
let numbers = [5, 10, 15, 20, 25, 30, 35];

let timesTen = numbers.map((number) => {
  return number * 10;
});
// original array stays the same
console.log(numbers);
// copy of array with altered values
console.log(timesTen);

// Warm Up
/*
    1. Create an array called "practice" with the numbers 25-30 (inclusive)

    2. Create another array using map that squares each number in "practice"
    
    3. Print out both "practice" and the new mapped array
*/

let practice = [25,26,27,28,29,30];

let mapped = practice.map((nums) =>{
   return nums
})

// console.log(mapped)

// exercise 1
/*
    1. Create an array called 'bools' of the following booleans:
        [true, true, false, true, false, false]

    2. Map over 'bools' and do the following:
        - if "true", return a random number in it's place
        - if "false", return 1

    3. Print out both arrays

    HINT: Google for "random number js" to find a random
          number function built-in to Javascript to use
*/

let bools = [true, true, false, true, false, false]

let mappedbools = bools.map((x) => {
    if(x) {
        return Math.random() 
    } else {
        return 1
    }
   
})

console.log(bools)
console.log(mappedbools)