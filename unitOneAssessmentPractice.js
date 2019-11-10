let assert = require('assert')

// Question One:
console.log("Question 1:")
// Write a function called double that doubles a number
const double = (num) => {
  num *= 2;
  console.log(num)
  return num;
}
let var1 = 5;
double(var1);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
//runQ1Tests()

// Question Two:
console.log("Question 2:")
// Write a function called containsSeven that returns whether or not a number has an sevens in it.
const containSeven = (num) => {
  let temp = num.toString();
  temp = temp.split("")
  //console.log(temp);
  for(let i = 0; i < temp.length; i++) {
    if(temp[i] === "7") {
      console.log("The number contains the number 7");
    } else {
        //Don't need anything
    }
  }
}
let var2 = 4594505897;
containSeven(var2);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ2Tests()

// Question Three:
console.log("Question 3:");
// Write a function called capitalizeTheAs the capitalizes all of the lowercase "a"s in a string leaving all other characters the same
const capitalizeTheAs = (word) => {
  let temp = word.split("");
  for(let i = 0; i < temp.length; i++) {
    if(temp[i] === "a") {
      temp[i] = "A"
    }
  }
  let result = temp.join("");
  return result;
  console.log(result);
}
let var3 = "Sharrar";
capitalizeTheAs(var3);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ3Tests()

// Question Four:
// Write a function called largest that returns the largest value in an array
console.log("Question 4:");
const largest = (inputArray) => {
  temp = inputArray[0];
  for(let i = 1; i < inputArray.length; i++) {
    if(temp < inputArray[i]) {
      temp = inputArray[i];
    }
  }
  console.log(temp);
  return temp;
}
let array4 = [234, 54452, 643, 93, 35, 55882, 343, 2]; //largest number is 55882
largest(array4);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ4Tests()

// Question Five:
// Write a function called average that returns the average of an array
console.log("Question 5:");
const average = (inputArray) => {
  let sum = 0;
  for(let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  result = sum / inputArray.length;
  console.log(result);
}
let array5 = [234, 54452, 643, 93, 35, 55882, 343, 2];
average(array5);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ5Tests()


//testing dot notation or braket notation for objects
// let obj = {
//   item1: 1,
//   item2: 2
// }
// console.log("obj test", obj["item1"])

// Question Six:
// Write a function called mode that returns the most frequently occurring number in an array
// HINT: Use an object where the keys are the numbers, and the values are how many times they appear in the array.
console.log("Question 6:");
const mode = (inputArray) => {
  let objectArray = {};
  let counter = 0;
  for(let i = 0; i < inputArray.length; i++) {
    objectArray[inputArray[i]] = counter; //this puts the array into JSON
    //console.log(objectArray)
  }
  for(let j in objectArray) { //goes through JSON
      for(let i = 0; i < inputArray.length; i++) { //goes through array
        if(j === inputArray[i].toString()) {
          //add to the key
          objectArray[j] += 1 //sometimes this works instead of objectArry.j
        }
      }
  }
  console.log("objectArray:", objectArray);
  //now print out the largest value in the JSON
  let temp; //this line is supposed to make temp equal to the value of the thing in JSON
  // console.log("temp", temp);
  let largest = 0
  for(let i in objectArray) {
    //console.log(i)
    if(largest < objectArray[i]) {
      largest = objectArray[i];
    }
  }
  console.log(largest); //prints out the JSON with the counters
}
let array6 = [1, 2, 2, 3, 4, 5, 6, 7];
mode(array6);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ6Tests()

// Question Seven: (BONUS)
// Write a function called median that returns the most median number in an array
// HINT: You'll need to sort the array first
// This one's also a bit tricky, feel free to skip it and come back to it.
console.log("Question 7:")
const median = (inputArray) => {
  if(inputArray.length % 2 === 1) {
    let oddResult = inputArray[Math.floor(inputArray.length / 2)];
    //console.log(Math.ceil(inputArray.length / 2));
    console.log(oddResult)
    return oddResult;
  } else if (inputArray.length % 2 === 0) {
      let evenResult = inputArray[inputArray.length / 2 - 1] + inputArray[inputArray.length / 2];
      console.log(evenResult / 2);
      return (evenResult / 2);
  }
}
let array7 = [111, 2222, 9, 3333, 5555, 6666];
median(array7);
// Uncomment out the next line to test your solution
// runQ7Tests()

// Question Eight:
// Write a function called addAllStudents that takes in an array of Classroom objects (described below) and returns the total number of students
console.log("Question 8:")
// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]
const addAllStudents = (inputArray) => {
  let totalStudents = 0;
  for(let i = 0; i < inputArray.length; i++) {
    // for(let j in inputArray[i]) {
    //   console.log("input arr", inputArray[i])
    //   totalStudents += inputArray[i].numberOfStudents;
    // }
    totalStudents += inputArray[i].numberOfStudents //I only need 1 loop because the i is the JSON and I can access the the key with the dot notation
  }
  return totalStudents;
    // console.log(totalStudents);
}

let var8 = [       
      {teacher: "Mr. Smith", numberOfStudents: 28}, 
      {teacher: "Ms. Lopez", numberOfStudents: 32}, 
      {teacher: "Professor McGonagall", numberOfStudents: 20} ];
 addAllStudents(var8)
 console.log("------------------------------------------");
// Sample output:
// 80


// Uncomment out the next line to test your solution
//runQ8Tests()


// Question Nine:
// Write a function called getSmallestClassObject that takes in an array of Classroom objects (described below) and returns the object with the fewest students
console.log("Question 9:")
const getSmallestClassObject = (inputArray) => {
  let smallestClass = inputArray[0].numberOfStudents;
  let wholeJSONTemp;
  for(let i = 1; i < inputArray.length; i++) {
    if(smallestClass > inputArray[i].numberOfStudents) {
      
      smallestClass = inputArray[i].numberOfStudents;
      wholeJSONTemp = inputArray[i];
    }
  }
  console.log(wholeJSONTemp);
}
let var9 = [
  {teacher: "Mr. Smith", numberOfStudents: 28}, 
  {teacher: "Ms. Lopez", numberOfStudents: 32}, 
  {teacher: "Professor McGonagall", numberOfStudents: 20}
 ]
getSmallestClassObject(var9);
// Sample input:
// [{teacher: "Mr. Smith", numberOfStudents: 28}, {teacher: "Ms. Lopez", numberOfStudents: 32}, {teacher: "Professor McGonagall", numberOfStudents: 20}]

// Sample output:
// {teacher: "Professor McGonagall", numberOfStudents: 20}

// Uncomment out the next line to test your solution
// runQ9Tests()
console.log("------------------------------------------");
// Question Ten:

// Write a function called doubleAllElements that doubles each number in an array
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input
console.log("Question 10:");
const doubleFunction = (num) => {
  return num*= 2;
}
const doubleAllElements = (inputArray) => {
  let temp = inputArray.map(doubleFunction);
  console.log(temp);
}
let var10 = [1, 2, 3, 4, 5];
doubleAllElements(var10);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ10Tests()


// Question Eleven:

// Write a function called onlyLongStrings that removes all strings with 3 or fewer characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Your output should be in the same order as the input

// Uncomment out the next line to test your solution
// runQ11Tests()
console.log("Question 11:");
const onlyLongStrings = (inputArray) => {
  let temp = inputArray.filter(word => word.length > 3);
  console.log(temp);
}
let var11 = ["hi", "Bye", "Hello", "Farewell"];
onlyLongStrings(var11);
console.log("------------------------------------------");
// Question Twelve:
console.log("Question 12:");
// Write a function called containsOnlyNumbers that returns whether or not an array contains only numbers
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
// Hint: the isNaN() function will tell you whether something is not a number
const function12 = (element) => {
  return !isNaN(element);
}
const containsOnlyNumbers = (inputArray) => {
  let result = inputArray.every(function12);
  if(result === false) {
    console.log("It doesn't only contain numbers");
  } else if(result === true) {
    console.log("It only contains numbers")
  }
}
let var12 = [1, 2, 3, 4, "five"];
containsOnlyNumbers(var12);
console.log("------------------------------------------");
// Uncomment out the next line to test your solution
// runQ12Tests()

// Question Thirteen:
console.log("Question 13:");
// Make a class called Person that has two properties set by the constructor named age and name
// Give it a method called isALegalAdult which returns true if the age is at least 18
class Person {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  isALegalAdult() {
    if(this.age >= 18) {
      console.log("At least 18");
      return true;
    } else {
      console.log("Younger than 18");
      return false;
    }
  }
}
let person1 = new Person("23", "Sharrar");
let person2 = new Person("23", "Zaman");
let person3 = new Person("17", "Khan");
console.log(person1.isALegalAdult());
console.log("------------------------------------------");
// runQ13Tests()

// Question Fourteen:

// Write a function called getAllAdults that takes in an array of Person objects and returns an array with only Person objects with an age of at least 18
console.log("Question 14:")
const getAllAdults = (inputArray) => {
  let tempArray = [];
  for(let i = 0; i < inputArray.length; i++) {
    if(inputArray[i].age >= 18) {
      tempArray.push(inputArray[i])
    }
  }
  console.log(tempArray);
}
let pplArray = [person1, person2, person3];
getAllAdults(pplArray);
console.log("------------------------------------------");
// runQ14Tests()

// Question Fifteen:
console.log("Question 15:")
// Write a function called getAllNames that takes in an array of Person objects and returns a string with all of the names joined together with a ","
const getAllNames = (inputArray) => {
  let temp = "";
  for(let i = 0; i < inputArray.length; i++) {
    temp += `${inputArray[i].name},`
  }
  console.log(temp);
}
getAllNames(pplArray);
console.log("------------------------------------------");
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
