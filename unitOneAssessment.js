let assert = require('assert')

// Question One:

// Write a function called double that doubles a number

// Uncomment out the next line to test your solution
// runQ1Tests()


// Question Two:

// Write a function called endsInSeven that returns whether or not a number ends in a 7.

// Uncomment out the next line to test your solution
// runQ2Tests()

// Question Three:

// Write a function called capitalizeTheAs the capitalizes all of the lowercase "a"s in a string

// Uncomment out the next line to test your solution
// runQ3Tests()

// Question Four:
// Write a function called largest that returns the largest value in an array

// Uncomment out the next line to test your solution
// runQ4Tests()


// Question Five:
// Write a function called average that returns the average of an array

// Uncomment out the next line to test your solution
// runQ5Tests()

// Question Six:
// Write a function called mode that returns the most frequently occurring number in an array

// Uncomment out the next line to test your solution
// runQ6Tests()

// Question Seven:
// Write a function called median that returns the most median number in an array
// HINT: You'll need to sort the array first

// Uncomment out the next line to test your solution
// runQ7Tests()

// Question Eight:
// Write a function called addAllStudents that takes in an array of Classroom objects (described below) and returns the total number of students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// 80

// Uncomment out the next line to test your solution
// runQ8Tests()


// Question Nine:
// Write a function called getSmallestClassObject that takes in an array of Classroom objects (described below) and returns the object with the least students

// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// {teacher: "Professor McGonagall", numberOfStudents: 20}

// Uncomment out the next line to test your solution
// runQ9Tests()




// Question Ten:

// Write a function called doubleAllElements that doubles each number in an array
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

// Uncomment out the next line to test your solution
// runQ10Tests()


// Question Eleven:

// Write a function called onlyLongStrings that removes all strings with 3 or fewer characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input

// Uncomment out the next line to test your solution
// runQ11Tests()

// Question Twelve:

// Write a function called containsOnlyNumbers that returns whether or not an array contains only numbers
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation

// Uncomment out the next line to test your solution
// runQ12Tests()

// Question Thirteen:

// Make a class called Person that has two properties set by the constructor named age and name
// Give it a method called isALegalAdult which returns true if the age is at least 18

// runQ13Tests()

// Question Fourteen:

// Write a function called getAllAdults that takes in an array of Person objects and returns an array with only Person objects with an age of at least 18

// runQ14Tests()

// Question Fifteen:

// Write a function called getAllNames that takes in an array of Person objects and returns a string with all of the names joined together with a ","

// runQ15Tests()

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
    console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
  }
}

function runQ1Tests() {

}

function runQ2Tests() {

}

function runQ3Tests() {

}

function runQ4Tests() {

}

function runQ5Tests() {

}

function runQ6Tests() {

}

function runQ7Tests() {

}
