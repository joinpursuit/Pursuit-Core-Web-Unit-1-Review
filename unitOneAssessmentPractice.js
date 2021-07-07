let assert = require('assert');

// Question One:

// Write a function called double that doubles a number
 
const double = (number) => {
  return  number + number;
}

// Uncomment out the next line to test your solution

runQ1Tests();

// Question Two:

// Write a function called containsSeven that returns whether or not a number has any sevens in it.

const containsSeven = (number) => {
  // Checks to see if index exists within number string
  if(number.toString().indexOf('7') > -1) {
    return true;
  } else {
    return false
  }
}

// Uncomment out the next line to test your solution

runQ2Tests();

// Question Three:

// Write a function called capitalizeTheAs the capitalizes all of the lowercase "a"s in a string leaving all other characters the same

const capitalizeTheAs = (string) => {
  // Splits string into an array so they can be accessed
  var arr = string.split('');
  // loops through the array
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      // reassigns index
      arr[i] = arr[i].toUpperCase() 
    }
  } return arr.join('') // joins the array back into a string
}


// Uncomment out the next line to test your solution

runQ3Tests();


// Question Four:
// Write a function called largest that returns the largest value in an array

const largest = (array) => {
  // Math.max requires the dots next to the array
  return Math.max(...array)
}

// Uncomment out the next line to test your solution
runQ4Tests()

// Question Five:
// Write a function called average that returns the average of an array

const average = (arr) => {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    // adds up the numbers in the array and stores in var sum
    sum += arr[i]
  } return sum / arr.length
}

// Uncomment out the next line to test your solution
runQ5Tests()

// Question Six:
// Write a function called mode that returns the most frequently occurring number in an array
// HINT: Use an object where the keys are the numbers, and the values are how many times they appear in the array.

const mode = (arr) => {
  var maxNum = 0
  var mostCommonNum = 0

  for (var i = 0; i < arr.length; i++) {
    var currentNum = 1;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentNum++;
      }
    }

    if (currentNum > maxNum) {
      maxNum = currentNum;
      mostCommonNum = arr[i]
    }
  }
  return mostCommonNum
}

// Uncomment out the next line to test your solution
runQ6Tests()

// Question Seven: (BONUS)
// Write a function called median that returns the most median number in an array
// HINT: You'll need to sort the array first
// This one's also a bit tricky, feel free to skip it and come back to it.

const sortNumber = (a, b) => {
  return a - b
}

const median = (array) => {
    if (array.length % 2 === 0) {
    let sortedArray = array.sort(sortNumber)
    return sortedArray[(array.length)/2]
  } else if (array.length % 2 !== 0) {
    let sortedArray = array.sort(sortNumber)
    return sortedArray[(array.length - 1)/2]
  }
}

// Uncomment out the next line to test your solution
runQ7Tests()



// Question Eight:
// Write a function called addAllStudents that takes in an array of Classroom objects (described below) and returns the total number of students

const addAllStudents = (array) => {
  // empty value for storing total
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].numberOfStudents
  }
  return total
}

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// 80

// Uncomment out the next line to test your solution
runQ8Tests()


// Question Nine:
// Write a function called getSmallestClassObject that takes in an array of Classroom objects (described below) and returns the object with the fewest students

const fewestStudents = (array) => {
  let leastNum = 0; // sets empty value for least number
  let maxNum = Infinity; // sets default max num variable
  let lowestObject

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i].numberOfStudents
    if (leastNum === 0) {
      leastNum = currentNum;
      lowestObject = array[i];
    } else if (currentNum < leastNum) {
      leastNum = currentNum;
      lowestObject = array[i];
    }
  }
  return lowestObject;
}

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// {teacher: "Professor McGonagall", numberOfStudents: 20}

// Uncomment out the next line to test your solution
runQ9Tests()

// Question Ten:

// Write a function called doubleAllElements that doubles each number in an array
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input
const doubleNum = (num) => {
  return num + num
}
const doubleAllElements = (array) => {
  let result = array.map(doubleNum)
  return result
}

// Uncomment out the next line to test your solution
runQ10Tests()


// Question Eleven:

// Write a function called onlyLongStrings that removes all strings with 3 or fewer characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input
const threeOrFewer = (string) => {
  if(string.length > 3) {
    return string
  } else {}
}
const onlyLongStrings = (array) => {
  let str = array.filter(threeOrFewer)
  return str
}

// Uncomment out the next line to test your solution
runQ11Tests()

// Question Twelve:

// Write a function called containsOnlyNumbers that returns whether or not an array contains only numbers
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Hint: the isNaN() function will tell you whether something is not a number

const containsOnlyNumbers = (array) => {
  let result = true
  for (let i = 0; i < array.length; i++) {
    
    if (isNaN(array[i]) === true) {
      result = false
    } else if (isNaN(array[i]) === false) {
      result = true
    }
  }
  return result
}
// Uncomment out the next line to test your solution
runQ12Tests()

// Question Thirteen:

// Make a class called Person that has two properties set by the constructor named age and name
// Give it a method called isALegalAdult which returns true if the age is at least 18

class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  isALegalAdult() {
    if (this.age >= 18) {
      return true
    } else {
      return false
    }
  }
}

runQ13Tests()

// Question Fourteen:

// Write a function called getAllAdults that takes in an array of Person objects and returns an array with only Person objects with an age of at least 18

const getAllAdults = (arr) => {
  let eighteenPlus = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      eighteenPlus.push(arr[i])
    }
  } return eighteenPlus
}

runQ14Tests()

// Question Fifteen:

// Write a function called getAllNames that takes in an array of Person objects and returns a string with all of the names joined together with a ","

const getAllNames = (arr) => {
  let names = []
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name)
  }
  return names.join(',')
}

runQ15Tests()

// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(3,6),
    new TestCase(0,0),
    new TestCase(1,2),
    new TestCase(-8,-16),
    new TestCase(100.1,200.2)
  ]
  runTests("One", testCases, double)
}

function runQ2Tests() {
  let testCases = [
    new TestCase(7, true),
    new TestCase(84393, false),
    new TestCase(0, false),
    new TestCase(0.4927493, true)
  ]
  runTests("Two", testCases, containsSeven)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("Hello world!", "Hello world!"),
    new TestCase("apple", "Apple"),
    new TestCase("aAaaAaaA", "AAAAAAAA"),
    new TestCase("", ""),
    new TestCase("cApitalIZe ThE 'a'S", "cApitAlIZe ThE 'A'S"),
  ]
  runTests("Three", testCases, capitalizeTheAs)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([1,2,3,4,5,6,7,8], 8),
    new TestCase([8,7,6,5,4,3,2,1], 8),
    new TestCase([3,6,4,8,4,20,6,8,9], 20),
    new TestCase([-8,-9,-10,-5,-7], -5),
    new TestCase([0], 0)
  ]
  runTests("Four", testCases, largest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase([3,4,5], 4),
    new TestCase([2,5,7,9], 5.75),
    new TestCase([3], 3),
    new TestCase([2,5,7,9], 5.75),
    new TestCase([-3,4,-7], -2),
    new TestCase([-2,-9,-4,15], 0),
  ]
  runTests("Five", testCases, average)
}

function runQ6Tests() {
  let testCases = [
    new TestCase([1,2,3,4,5,2],2),
    new TestCase([1,1,1,1,1,1,2],1),
    new TestCase([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2],2),
    new TestCase([1],1),
    new TestCase([1,1,1,2,2,2,1,1],1)
  ]
  runTests("Six", testCases, mode)
}

function runQ7Tests() {
  let testCases = [
    new TestCase([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], 13),
    new TestCase([12, 3, 5], 5),
    new TestCase([3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29], 23),
    new TestCase([3, 13, 7, 5, 21, 23, 23, 40, 23, 14, 12, 56, 23, 29], 22),
    new TestCase([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 30.5)
  ]
  runTests("Seven", testCases, median)
}

function runQ8Tests() {
  let testCases = [
    new TestCase(
      [
        {teacher: "Mr. Smith", numberOfStudents: 28},
        {teacher: "Ms. Lopez", numberOfStudents: 32},
        {teacher: "Professor McGonagall", numberOfStudents: 20}
      ], 80
    ),
    new TestCase(
      [
        {teacher: "Ms. A", numberOfStudents: 30},
        {teacher: "Ms. B", numberOfStudents: 20},
        {teacher: "Mr. C", numberOfStudents: 25},
      ], 75
    ),
    new TestCase(
      [
        {teacher: "Ms. D", numberOfStudents: 33},
        {teacher: "Mr. E", numberOfStudents: 10},
      ], 43
    ),
    new TestCase(
      [
        {teacher: "Mr. F", numberOfStudents: 1},
      ], 1
    )
  ]
  runTests("Eight", testCases, addAllStudents)
}

function runQ9Tests() {
  let testCases = [
    new TestCase(
      [
        {teacher: "Mr. Smith", numberOfStudents: 28},
        {teacher: "Ms. Lopez", numberOfStudents: 32},
        {teacher: "Professor McGonagall", numberOfStudents: 20}
      ], {teacher: "Professor McGonagall", numberOfStudents: 20}
    ),
    new TestCase(
      [
        {teacher: "Ms. A", numberOfStudents: 30},
        {teacher: "Ms. B", numberOfStudents: 20},
        {teacher: "Mr. C", numberOfStudents: 25},
      ], {teacher: "Ms. B", numberOfStudents: 20}
    ),
    new TestCase(
      [
        {teacher: "Ms. D", numberOfStudents: 33},
        {teacher: "Mr. E", numberOfStudents: 10},
      ], {teacher: "Mr. E", numberOfStudents: 10}
    ),
    new TestCase(
      [
        {teacher: "Mr. F", numberOfStudents: 1},
      ], {teacher: "Mr. F", numberOfStudents: 1}
    )
  ]
  runTests("Nine", testCases, fewestStudents)
}

function runQ10Tests() {
  let testCases = [
    new TestCase(
      [1,2,3,4,5,6,7],
      [2,4,6,8,10,12,14]
    ),
    new TestCase(
      [-2,-5,3],
      [-4,-10,6]
    ),
    new TestCase(
      [1.3,9.1,2.4],
      [2.6,18.2,4.8]
    ),
    new TestCase(
      [],
      []
    ),
    new TestCase(
      [0],
      [0]
    )
  ]
  runTests("Ten", testCases, doubleAllElements)
}

function runQ11Tests() {
  let testCases = [
    new TestCase(
      ["aaaa", "aa", "a", "aaaaaa"],
      ["aaaa", "aaaaaa"]
    ),
    new TestCase(
      ["abcd", "       ", ""],
      ["abcd", "       "]
    ),
    new TestCase(
      [".......", ".", "'''''''"],
      [".......", "'''''''"]
    )
  ]
  runTests("Eleven", testCases, onlyLongStrings)
}

function runQ12Tests() {
  let testCases = [
    new TestCase(
      [4, "aaaa", 43, 5, "aa", "a", "aaaaaa"],
      false
    ),
    new TestCase(
      [3,5,2,56,7,3.9],
      true
    ),
    new TestCase(
      ["4","453","456789", "484.2"],
      true
    ),
    new TestCase(
      ["one", "two", "three"],
      false
    ),
    new TestCase(
      [Infinity, -Infinity, 1000000000, 1e19, 0.000000001],
      true
    )
  ]
  runTests("Twelve", testCases, containsOnlyNumbers)
}

function runQ13Tests() {
  let testCases = [
    new TestCase(new Person(19, "a"), true),
    new TestCase(new Person(3, "b"), false),
    new TestCase(new Person(18, "a"), true),
    new TestCase(new Person(500, "a"), true),
    new TestCase(new Person(17, "a"), false),
  ]
  runTests("Thirteen", testCases, person => person.isALegalAdult())
}

function runQ14Tests() {
  let testCases = [
    new TestCase( [
      new Person(19, "a"),
      new Person(16, "b"),
      new Person(24, "c"),
      new Person(18, "d"),
    ],
    [
      new Person(19, "a"),
      new Person(24, "c"),
      new Person(18, "d"),
    ]),
  new TestCase( [
    new Person(11, "a"),
    new Person(16, "b"),
    new Person(11, "c"),
    new Person(8, "d"),
    ],
    []),
    new TestCase( [
      new Person(8, "a"),
      new Person(16, "b"),
      new Person(64, "c"),
      new Person(18, "d"),
    ],
    [
      new Person(64, "c"),
      new Person(18, "d"),
    ])
  ]
  runTests("Fourteen", testCases, getAllAdults)
}

function runQ15Tests() {
  let testCases = [
    new TestCase( [
      new Person(19, "Adam"),
      new Person(16, "Beth"),
      new Person(24, "Cam"),
      new Person(18, "Dan"),
    ], "Adam,Beth,Cam,Dan"),
    new TestCase( [
      new Person(99, "Eve"),
      new Person(1, "Fran"),
    ], "Eve,Fran"),
    new TestCase( [
      new Person(66, "Gene"),
    ], "Gene"),
  ]
  runTests("Fifteen", testCases, getAllNames)
}
