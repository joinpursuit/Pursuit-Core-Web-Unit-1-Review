let assert = require('assert')

// Question One:

// Write a function called double that doubles a number

// ***This one is pretty straight foward. It takes in an input and returns it doubled.
const double = (x) => x * 2

// Uncomment out the next line to test your solution
runQ1Tests()

// Question Two:

// Write a function called containsSeven that returns whether or not a number has an sevens in it.

// ***This one is a bit tricky. Basically you have to turn the number into a string.
// ***The reason is becaseu the .includes() method only works on strings
// ***By putting concatenating an empty string we turn the input into a string.
// ***We can also use .tostring() which would easier to read.
const containsSeven = (num) => (num + ``).includes(`7`)

// Uncomment out the next line to test your solution
runQ2Tests()

// Question Three:

// Write a function called capitalizeTheAs the capitalizes all of the lowercase "a"s in a string leaving all other characters the same

// ***`The the thought process here is that we have to check each individual letter.
// ***We have to check if each letter is an `a`, if it is then we have to capitalize it. 
// ***Since we have to check each letter a loop would be useful however we can't modify strings.
// ***Since strings are immutable we'll create a new one that looks like the input with the `a` ---> `A`.
// ***Down below I use the for loop to loop through our original string as i loop through the stirng
// ***I check the letter if its not `a` add it to the new string. If it is `a` we add `A` instead.
// ***Return the new string at the end of the function`
const capitalizeTheAs = (str) => {
  let newStr = ``
  for (let i = 0; i < str.length; i++) str[i] === `a` ? newStr += `A` : newStr += str[i]
  return newStr
}

// Uncomment out the next line to test your solution
runQ3Tests()

// Question Four:
// Write a function called largest that returns the largest value in an array

// ***`There are many ways you can go about solving this problem. One way: you can use a variable to track
// ***the largest value and loop through the array. If the current element in the array is larger than 
// ***the tracker than we set the tracker to the value of the current element. At the end of the function 
// ***we return the value of the tracker.
// ***Ex: 
// ***let largestValue = array[0] // tracker set to first value of array since were going to start the loop there anyways
// ***for (let element in array) {
// ***  if (element > largestValue) {
// ***    largestValue = element
// ***  }
// ***}
// ***return largestValue
// ***Another way, which is the method i used below is to sort the array and return the last element.
// ***Ex: [5,2,6,8,9,999999,2556,5,1,3,45]
// ***[1,2,3,5,5,6,8,9,45,2556,999999]
// ***return 999999`
const largest = (arr) => arr.sort((a,b) => a - b)[arr.length - 1]

// Uncomment out the next line to test your solution
runQ4Tests()

// Question Five:
// Write a function called average that returns the average of an array

// ***`This is another problem with multiple solutions.
// ***You can use a loop that goes through the array and adds up all the numbers like:
// ***let sum = 0
// ***for (let element of array) {
// *** sum += element
// ***}
// ***But we still need the average not the sum of all so we need to divide by the number of
// ***elements in the array:
// ***The function will return ---> sum / array.length
// ***The other method of doing this would be to use reduce to get the sum for us like i did below`
const average = (arr) => arr.reduce((i, j) => i += j, 0) / arr.length

// Uncomment out the next line to test your solution
runQ5Tests()

// Question Six:
// Write a function called mode that returns the most frequently occurring number in an array
// HINT: Use an object where the keys are the numbers, and the values are how many times they appear in the array.


const mode = (arr) => {
  let obj = {}
  let countArr = []
  arr.forEach(e => !obj[e] ? obj[e] = 1 : obj[e]++)
  for (let key in obj) countArr.push(obj[key])
  let highest = countArr.sort((a, b) => a - b)[countArr.length - 1]
  for (let key in obj) if (obj[key] === highest) return parseInt(key, 10)
}

// Uncomment out the next line to test your solution
runQ6Tests()

// Question Seven: (BONUS)
// Write a function called median that returns the most median number in an array
// HINT: You'll need to sort the array first
// This one's also a bit tricky, feel free to skip it and come back to it.

const median = (array) => {
  arr = array.sort((a, b) => a - b)
  let midIndex = Math.floor(arr.length / 2)
  if (arr.length % 2) { 
    return arr[midIndex]
  } else {
    return (arr[midIndex] + arr[midIndex - 1]) / 2
  }
}
// Uncomment out the next line to test your solution
runQ7Tests()

// Question Eight:
// Write a function called addAllStudents that takes in an array of Classroom objects (described below) and returns the total number of students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// 80

const addAllStudents = (array) => array.reduce((i, j) => i += j.numberOfStudents, 0)

// Uncomment out the next line to test your solution
runQ8Tests()


// Question Nine:
// Write a function called fewestStudents that takes in an array of Classroom objects (described below) and returns the object with the fewest students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// {teacher: "Professor McGonagall", numberOfStudents: 20}

const fewestStudents = (array) => array.reduce((i, j) => i.numberOfStudents > j.numberOfStudents ? j : i)

// Uncomment out the next line to test your solution
runQ9Tests()




// Question Ten:

// Write a function called doubleAllElements that doubles each number in an array
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input

const doubleAllElements = (array) => array.map( e => e * 2)

// Uncomment out the next line to test your solution
runQ10Tests()


// Question Eleven:

// Write a function called onlyLongStrings that removes all strings with 3 or fewer characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input

const onlyLongStrings = (array) => array.filter(e => e.length > 3)

// Uncomment out the next line to test your solution
runQ11Tests()

// Question Twelve:

// Write a function called containsOnlyNumbers that returns whether or not an array contains only numbers
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Hint: the isNaN() function will tell you whether something is not a number

const containsOnlyNumbers = (array) => array.every(e => !isNaN(e))

// Uncomment out the next line to test your solution
runQ12Tests()

// Question Thirteen:

// Make a class called Person that has two properties set by the constructor named age and name
// Give it a method called isALegalAdult which returns true if the age is at least 18

class Person {
  constructor(age, name) {
    this.name = name
    this.age = age
  }

  isALegalAdult() {
    return this.age >= 18
  }
}

runQ13Tests()

// Question Fourteen:

// Write a function called getAllAdults that takes in an array of Person objects and returns an array with only Person objects with an age of at least 18

const getAllAdults = (array) => array.filter(e => e.age >= 18)

runQ14Tests()

// Question Fifteen:

// Write a function called getAllNames that takes in an array of Person objects and returns a string with all of the names joined together with a ","

const getAllNames = (array) => array.map(e => e.name).join(`,`)

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
