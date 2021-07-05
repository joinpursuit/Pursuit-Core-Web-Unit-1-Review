console.log('*****************UNIT ONE REVIEW*************');
console.log('=========question 1==========');
let arr1 = [1, 2, 3, 4];
let doubled = [];
arr1.map(el => {
  doubled.push(el * 2);
});
console.log(doubled);

console.log('========question 2=============');
const containsSeven = (num) => {
num = num.toString();
if (num.includes(7)) {
    return true;
  } else {
      return false;
    }
}

console.log(num);

console.log('=============question3=============');

const capitalizeTheAs = (string) => {
 let arr = string.split('');
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === 'a') {
     arr[i] = arr[i].toUpperCase()
   }
 } return arr.join('')
}
console.log('=============question4===============');
function largest() {
  let arr4 = largest.reduce((acc,curr) => {
    if (acc > curr ) => {
      return curr
    } else {
      return acc
    }

  });
  return maxNumArr;
}
const largest = (array) => {
  return Math.max.apply(Math, array);
}
const largest = (arr5) => {
arr5 = arr5.reduce((acc, el));
if(el > acc) {

    return el;
  } else {
    return acc;
  }
;
console.log('=============question5==============');
let average5 = (arr5) => arr5.reduce((a, b) => a + b) / arr5.length;
console.log(average5([1, 2, 3, 4, 5, 10, 10]));

console.log('=============question6==============');
let arr6 = [1, 2, 1, 2, 2, 3, 2, 2, 1];

let filtered6 = arr6.map((el) => el === 0);
console.log(filtered6.length);
console.log('==============question7===============');
function median(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

console.log(median([4, 5, 7, 1, 33]));
let object =
console.log('==============question8================');
let addAllStudents = {};
let class = [
  {
    teacher: 'Mr. Smith',
    numberOfStudents: 28,
  },
  {
    teacher: 'Ms. Lopez',
    numberOfStudents: 32,
  },
  {
    teacher: 'Professor McGonagall',
    numberOfStudents: 20
  }
]
const sum = 0;
for (let i = 0; i < class.length; i++) {
  class += sum[i];
}
numberOfStudents:
constructor(teacher, numberOfStudents) {
  this.teacher = teacher;
  this.numberOfStudents = numberOfStudents
}
let teacher1 = new
  {teacher: "Mr. Smith", numberOfStudents: 28},
{teacher: "Ms. Lopez", numberOfStudents: 32},
  {teacher: "Professor McGonagall", numberOfStudents: 20},
]

let sum = 0;
for (let r = 0; r < addAllStudents.length; r++) {
  addAllStudents += sum[r];
}

console.log(sum);
