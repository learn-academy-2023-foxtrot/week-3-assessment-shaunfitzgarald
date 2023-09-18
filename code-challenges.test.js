// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonnaciSequence", () =>{
  it("takes in a number (greater than 2) and returns an array of the length of the number inputed containing the fibbonacci sequence", () => {
    const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

    const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

  })
})
// b) Create the function that makes the test pass.

/* Pseudo code:
namme: fibinacciSequence
input: a number
output:an array of numbers (the fibonacci sequence)
process: if the input is less than or equal to zero, it will return an empty array. FOr 1, it will return an array of [1]. For two, it will return an array of [1, 1] for numbers greater than 2, starts the function sequence with the array {1, 1} (it always starts with [1, 1]). Sequence uses a loop to calculate the remaining fibonacci numbers in sequence by adding the previous two numbers together
*/

fibonacciSequence = (length) => {
  if (length <= 0) {
    return []
  }
  else if (length === 1) {
    return [1]
  } 
  else if (length === 2) {
    return [1, 1]
  }
  
  const sequence = [1,1] 

  for (let i = 2; i < length; i ++){
    const nextNumber = sequence[i - 1] + sequence[i - 2]
    sequence.push(nextNumber)
  }
  return sequence
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("objToArray", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
expect(objToArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
expect(objToArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// b) Create the function that makes the test pass.

/* Pseudo code:
name: objToArray
input:mobjecy
output: array
Process: Use object.values(object) to pull out an array of values from the inputted object and store it in the variable, valuesArray
Use the sort method with a comparison that subtracts b from a to get ascdending order.
Return valuesArray.
*/
const objToArray = (object) => {
  const  valuesArray = Object.values(object)
  valuesArray.sort((a, b) => a-b)
  return valuesArray
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("accumulatingSumArray", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(accumulatingSumArray(accountTransactions1)).toEqual([100, -17, -23, -9])
    expect(accumulatingSumArray(accountTransactions2)).toEqual([250, -89, 100, -96])
  expect(accumulatingSumArray(accountTransactions3)).toEqual([])
  })
})
// b) Create the function that makes the test pass.

/* Pseudo code:
name: accumulatingSumArray
input: array
output: array of accumulating sum
process: Create an empty array called result to store accumulating sums. Create a variable called sum and set it to 0 to keep track of the current sum. Loop through the input array, adding the current element to the sum and pushing the current value of the sum into the result array. Return result array.
*/

const accumulatingSumArray = (array) => {
  const result = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    result.push(sum)
  }
  return result
}
