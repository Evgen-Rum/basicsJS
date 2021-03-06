// Tasks from codewars


// Task 1 - count the number of vowels in a string
// function getCount(str) {
//     let vowelsCount = 0;
//     let vowelsList = 'aeiou'
//     for (let x = 0; x <= str.length; x++) {
//         if (vowelsList.indexOf(str[x]) !== -1) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount;
// }
//
// console.log(getCount('fa del   igoku'))


// Task 2 - find the maximum and minimum values in a string of numbers
// const numbers = "1 9 3 4 -5"
//     function highAndLow(numbers){
//         numbers = numbers.split(' ').map(Number)
//         return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
//     // const arr = str.split(' ')
//     // return console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)
// }
//
// console.log(highAndLow(numbers))


/* Task 3 - Take 2 strings s1 and s2 including only
letters from ato z. Return a new sorted string, the longest possible,
containing distinct letters - each taken only once - coming from s1 or s2
 */
// const s1 = 'xyaabbbccccdefww'
// const s2 = 'xxxxyyyyabklmopq'
//
// function longest(s1, s2) {
//     return Array.from(new Set(s1 + s2)).sort().join('')
// }
//
// console.log(longest(s1, s2))


// Task 4 - Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// const binaryArr = [0, 1, 1, 0]
//
// function binaryArrayToNumber(arr) {
//     return parseInt(arr.join(''), 2)
// }
//
// console.log(binaryArrayToNumber(binaryArr))

/* Task 5
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
 */
// const dna = 'TUUUTUT'
// function DNAtoRNA(dna) {
//     const result = dna.replace(/T/g, 'U')
//     return result
// }
//
// console.log(DNAtoRNA(dna))

/* Task 6
Write a program that finds the summation of every number from 1 to num.
 The number will always be a positive integer greater than 0.
 */
// let summation = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(summation(5))

/* Task 7
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.
Note: input will never be an empty string
 */
// const result = (strOfNum) => {
//     return strOfNum.split('').map(n => n < 5 ? 0 : 1).join('')
// }

/* Task 8
Given an array of integers, return a new array with each value doubled.
 */
// const x = [1, 2, 3, 4, 5]
//
// function maps(x) {
//     return x.map((element) => element * 2)
// }
//
// console.log(maps(x))

/* Task 9
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */
// function simpleMultiplication(number) {
//     if (number % 2 == 0) {
//         return number * 8
//     } else {
//         return number * 9
//     }
// }
//
// console.log(simpleMultiplication(2))

/* Task 10
We need a function that can transform a number into a string.
What ways of achieving this do you know?
 */
// function numberToString(num) {
//     return num.toString()
// }
// console.log(numberToString(2))

/* Task 11
Consider an array/list of sheep where some sheep may be missing from their place.
We need a function that counts the number of sheep present in the array (true means present).
 */
// const arrayOfSheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//
// function sheepCounter(arrayOfSheep) {
//     let counter = 0
//  for (let sheep of arrayOfSheep) {
//      if (sheep === true) {
//          counter++
//      }
//  }
//     return counter
// }
//
// console.log(sheepCounter(arrayOfSheep))

/* Task 12
Very simple, given an integer or a floating-point number, find its opposite.
 */
// function opposite(number) {
//  return -number
// }
//
// console.log(opposite(-1))

/* Task 13
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
 */
// const arr = [1, 2, 3, 4, 5, 6]
//
// function findAverage(array) {
//  if (array.length <= 0) {
//   return 0
//  } else {
//   return array.reduce((previousValue, currentValue) => (previousValue + currentValue)) / array.length
//  }
// }
//
// console.log(findAverage(arr))

/* Task 14
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
 */
//
//  const bmi = (weight, height, bmi = weight/Math.pow(height,2)) =>
//      bmi <= 18.5 ? "Underweight" :
//      bmi <= 25 ? "Normal" :
//      bmi <= 30 ? "Overweight" : "Obese";
//
//
// console.log(bmi(183, 150))

/* Task 15
Given a non-empty array of integers, return the result of multiplying the values together in order
 */
// const arr = [1, 2, 3, 4]
//
// const grow = (array) => array.reduce((previousVal, currentVal) => previousVal * currentVal)
//
// console.log(grow(arr))

/* Task 16
A hero is on his way to the castle to complete his mission.
However, he's been told that the castle is surrounded with a couple of powerful dragons!
Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
Assuming he's gonna grab a specific given number of bullets and move forward to fight another
specific given number of dragons, will he survive?
Return True if yes, False otherwise :)
 */
// function hero(bullets, dragons){
//     return bullets >= dragons * 2
// }
//
// console.log(hero(10, 5))

/* Task 17
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
 */
// let disemVowel = (str) => str.replace(/[aeiou]/gi, '')
//
// console.log(disemVowel('testaeiouyAEIOUYtest'));

/* Task 18
Make a function that will return a greeting statement that uses an input;
your program should return, "Hello, <name> how are you doing today?".
 */
// function greet(name) {
//     return `Hello, ${name} how are you doing today?`
// }

/* Task 19
Your classmates asked you to copy some paperwork for them.
You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 */
//
// const paperWork = (n, m) => {
//     if (m < 0 || n < 0) {
//         return 0
//     } else {
//         return m * n
//     }
// }
//
// console.log(paperWork(4, -3))

/* Task 20
Write a function to convert a name into initials.
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
 */
// function abbrevName(name) {
//     return name.split(" ").map((n) => n[0]).join(".").toUpperCase()
// }
//
// console.log(abbrevName('evgen rum'))

/* Task 21
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
 */
// function booleanToString(b) {
//     return String(b)
// }

/* Task 22
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
 */
// function positiveSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }
//
// const positiveSum1 = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0)
//
// console.log(positiveSum([1, -2, 3, 4, 5]))

/* Task 23
Write a function which converts the input string to uppercase.
 */
// function makeUpperCase(str) {
//     return str.toUpperCase()
// }
// console.log(makeUpperCase('im a programmer'))

/* Task 24
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
 */
// function invert(array) {
//     return array.map(n => -n)
// }
//
// console.log(invert([1, -2, 3, -4, 5, -6]))

/* Task 25
In this kata you will create a function that takes a list of non-negative integers
and strings and returns a new list with the strings filtered out.
 */
// function filterList(arr) {
//     return arr.filter(n => Number.isInteger(n))
// }
//
// console.log(filterList([1, 'f', 2, -4, 'd']))

/* Task 26
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.
 */
// function XO(str) {
//     let oSum = 0
//     let xSum = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'o' || str[i] === 'O') {
//             oSum += 1
//         } else if (str[i] === 'x' || str[i] === 'X') {
//             xSum += 1
//         }
//     }
//     if (xSum === oSum) {
//         return true
//     } else{
//         return false
//     }
// }
//
// const XO1 = str => {
//     str = str.toLowerCase().split('')
//     return str.filter(x => x === 'x').length === str.filter(o => o === 'o').length
// }
//
// function XO2(str) {
//     let x = str.match(/x/gi)
//     let o = str.match(/o/gi)
//     return (x && x.length) === (o && o.length)
// }
//
// console.log(XO('xoOOxxXooxosd'))

/*  Task 27
Write a function that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if there are none.
 */
// function anagrams(word, array) {
//     let firstWord = word.split('').sort().join('')
//     let anagramsArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].split('').sort().join('') === firstWord) {
//             anagramsArray.push(array[i])
//         }
//     }
//     return anagramsArray
// }
//
// function anagrams1(word, words) {
//     return words.filter(w => reorder(w) === reorder(word) )
// }
//
// function reorder(word) {
//     return word.split('').sort().join('')
// }
//
// const array = ['aabb', 'abcd', 'bbaa', 'dada']
//
// Array.prototype.anagramFinder = function(word) {
//     let firstWord = word.split('').sort().join('')
//     let anagramsArray = []
//     for (let i = 0; i < this.length; i++) {
//         if (this[i].split('').sort().join('') === firstWord) {
//             anagramsArray.push(this[i])
//         }
//     }
//     return anagramsArray
// }
//
// console.log(array.anagramFinder('abba'))
//
// console.log(anagrams1('abba', array))
//
// console.log(anagrams('abba', array))

/* Task 28
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
we want to find a positive integer k, if it exists,
such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:
Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
Note: n and p will always be given as strictly positive integers.
 */
// function digPow(num, p) {
//     let numArr = Array.from('' + num).map(Number)
//     let result = 0
//     for (let i = 0; i < numArr.length; i++) {
//         result += Math.pow(numArr[i], (p + i))
//     }
//     if (result % num) {
//         return -1
//     } else {
//         return result / num
//     }
// }
//
// function digPow1(num, pow) {
//     let x = String(num).split('').reduce((pV, cV, index ) =>
//         pV + Math.pow(cV, pow + index), 0)
//     return x % num ? -1 : x / num
// }
//
// console.log(digPow1(89, 1))

/* Task 29
Create bind function.
For use:
function logPerson() {
    console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Evgenii',
    age: 23,
    job: 'Frontend developer'
}
const person2 = {
    name: 'Victor',
    age: 24,
    job: 'Worker'
}

bind(person1, logPerson)
bind(person2, logPerson)
 */
//
// function logPerson() {
//     console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
// }
//
// const person1 = {
//     name: 'Evgenii',
//     age: 23,
//     job: 'Frontend developer'
// }
// const person2 = {
//     name: 'Victor',
//     age: 24,
//     job: 'Worker'
// }
//
// bind(person1, logPerson)()
// bind(person2, logPerson)()
//
// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

/* Task 30
There is a queue for the self-checkout tills at the supermarket.
Your task is write a function to calculate the total time required for all the customers to check out!
input
customers: an array of positive integers representing the queue.
Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
 */
//
// const customers = [1, 2, 3, 4, 5, 6, 7, 8]
//
// function queueTime(customers, n) {
//     let tills = Array(n).fill(0);
//
//     customers.forEach((customer) => {
//         let nextTill = tills.indexOf(Math.min(...tills))
//         tills[nextTill] += customer;
//     });
//
//     return Math.max(...tills);
// }
//
// console.log(queueTime(customers, 3))

/* Task 31
Given an array (arr) as an argument complete the function countSmileys
that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
 */

const arr = [':)', ';(', ';}', ':-D']

function countSmileys(arr) {
    const smile1 = ':)'
    const smile2 = ':D'
    const smile3 = ':~)'
    const smile4 = ':-)'
    const smile5 = ':-D'
    const smile6 = ':~D'
    const smile7 = ';)'
    const smile8 = ';D'
    const smile9 = ';-)'
    const smile10 = ';-D'
    const smile11 = ';~)'
    const smile12 = ';~D'
    let counter = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === smile1 || arr[i] === smile2 || arr[i] === smile3 || arr[i] === smile4 || arr[i] === smile5
            || arr[i] === smile6 || arr[i] === smile7 || arr[i] === smile8 || arr[i] === smile9 || arr[i] === smile10
            || arr[i] === smile11 || arr[i] === smile12)
            counter++
    }
    return counter
}

function countSmileys1(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length
}

const countSmileys2 = arr => arr.reduce((f, s) => f + /^[:;][-~]?[)D]$/.test(s), 0)

console.log(countSmileys1(arr))