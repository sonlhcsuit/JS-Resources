# Beginners

----------------
### Calculate BMI of 1 human and print answer

### Quadratic expression Calculate
Take a b c as arguments then solve Quadratic Expression, print delta's status & solution(s)

### Loops

### Print all even number

### Print all Special two digit number

A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.

### Print all prime number

### Perfect Number
A perfect number is a positive integer that is equal to the sum of it divisors. Number because the sum of the proper divisors in each case is equal to the number; the proper divisors of 6 are 1, 2, and 3, and their sum is 6.(496)

### Amicable Numbers

Amicable numbers are a pair of numbers with the following property: the sum of all of the proper divisors of the first number (not including itself) exactly equals the **second number** while the sum of all of the proper divisors of the second number (not including itself) likewise equals the **first number**.

For example let's show that 220 & 284 are amicable numbers:
First we find the proper divisors of 220:

1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110

Now find the proper divisors of 284:

1, 2, 4, 71, 142

### Narcissistic numbers

By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits.
153 = 1^3 + 5^3 + 3^3 = 153

### Triangular Number Sequence

This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: `1, 3, 6, 10, 15` . Write a function that converts n number of places with its corresponding number.

### Array

Create an array

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
```

* Print the pokemon which can fly and use fire
* Remove the rat out of the array and add pikachu at last of array
* Add 1 Meow 2 to the head of the array

### Create an program that help the boss manage her shop

![requirement](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/array/array_ex.png?raw=true)

### Array method

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.map()
Pokemon.filter()
Pokemon.reduce()
Pokemon.forEach()
```

### Write your callback!!!

``` javascript
Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line

    // Only change code above this line
    return newArray;
};
```

### Object

``` javascript
var pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
var pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"]
```

* Speed is wrong, fix it (reduce to 60)
* Pikachu has no skill, he can't handle a battle. Help him by add `pikachuSkill` to Pikachu as `skill` property
* Delete `belongto` property

### Follow instructions

![abc](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/object/object_ex.png?raw=true)

* Add `pocket` - an array `"seashell", "strange berry", và "lint".` 

* delete `dagger` in `backpack` .

* add 50 gold

* delete all infomation about pouch.

### Function

### Print n Factorial

### Remove all dollar sign of a string

``` javascript
function removeDollarSign(text) {};
removeDollarSign('$80% percent of $life is to show $up')
```

hint: You can iterate through an string (character by character) by doing the same as array([])

### Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

``` javascript
function binaryAgent(str) {
    return str;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```

### Steamroll Array 

Flatten a nested array. You must account for varying levels of nesting.

``` javascript
function steamrollArray(arr) {
    return arr;
}
steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
```

### Unique element

Write a JavaScript function to find the unique elements from two arrays

``` javascript
function difference(arr) {
    return arr;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]
```

---------

# Intermedia

### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

``` javascript
function diffArray(arr1, arr2) {
    var newArr = [];
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

### DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the remain DNA.
Base pairs are a pair of A-T and C-G. Match the missing element to the provided character.

``` javascript
function pairElement(str) {
    return str;
}
pairElement("GCG"); //CGC
```

### Sum All Odd Fibonacci Numbers

Given a positive integer `num` , return the sum of all odd Fibonacci numbers that are less than or equal to `num` .

The first two numbers in the Fibonacci sequence are `1` and `1` . Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than or equal to 10 are `1` , `1` , `3` , and `5` .

``` javascript
function sumFibs(num) {
    return num;
}
sumFibs(4000000); //4613732
```

# Problems Solving

### The Recamán Sequence

The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:

For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
Repeat until the number of interest is found.
Look at example below for the steps to do for to establish the Recamán Index of number 2:

``` javascript
Sequence = [0]

Last - Length = 0 - 1 = -1(lower than zero)
Last + Length = 0 + 1 = 1

Sequence = [0, 1]

Last - Length = 1 - 2 = -1(lower than 0)
Last + Length = 1 + 2 = 3

Sequence = [0, 1, 3]

Last - Length = 3 - 3 = 0(already present in sequence)
Last + Length = 3 + 3 = 6

Sequence = [0, 1, 3, 6]

Last - Length = 6 - 4 = 2(greater than 0 and not already in sequence)

Sequence = [0, 1, 3, 6, 2]
```

// The Recaman Index of 2 is: 4
Given a positive integer n, implement a function that returns its Recamán Index.

``` javascript
recamanIndex(2)➞ 4

recamanIndex(3)➞ 2

recamanIndex(7)➞ 5
```

### Profile Lookup

We have an array of objects representing different people in our contacts lists.
A `lookUpProfile` function that takes `name` and a property ( `prop` ) as arguments has been pre-written for you.
The function should check if `name` is an actual contact's `firstName` and the given property ( `prop` ) is a property of that contact.
If both are true, then return the `value` of that property.
If `name` does not correspond to any contacts then return `"No such contact"` .
If prop does not correspond to any valid properties of a contact found to match name then return `No such property` .

``` js
// Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line

    // Only change code above this line
}

lookUpProfile("Akira", "likes");
```

### Hailstone Sequence 
Write the function that can generate hail stone from an number  
Hailstone Sequences follow these rules:  
If a number is even, next number is divided by 2  
If a number is odd, next number multiplied it by 3 and add 1.  

For example, for a starting number of 7, the sequence is 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, ....   
Such sequences are called hailstone sequences because the values typically rise and fall, somewhat analogously to a hailstone inside a cloud.  

Remember that hailstone sequence always end at 1!
you can use arrayname.push(value) to add an value to the end of the arrayname (arrayname is an array)
```javascript 
function Hailstone(number){
    let sequence = []
    return sequence
}

```

### Prime Factorization

Return the Prime Factorization of the provided integer.
If the integer is represented with the letter n, can be represented as the product of positive prime integers less than n.Print it.
For example: `15=5*3` , `20 = 5*2*2` , `126 =7*3*3*2 ` 
Only integers greater than or equal to zero will be supplied to the function.

``` javascript
function PrimeFactorization(num) {
    return num;
}
PrimeFactorization(5);
```

### Semiprimes

A semiprime is a composite number that is the product of two primes. Apart from these two primes, its only other proper (non-self) divisor is 1.

The two prime factors of a semiprime can be the same number (e.g.the semiprime 49 is the product of 7x7). A semiprime that has two distinct prime factors is called a squarefree semiprime.

Create a function that takes a number and returns "Squarefree Semiprime", "Semiprime", or "Neither".

Examples

``` javascript
semiprime(49)➞
"Semiprime"

semiprime(15)➞
"Squarefree Semiprime"

semiprime(97)➞
"Neither"
```

### Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

``` javascript
function findLongestWordLength(str) {
    return str.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog"); //6 - jumped
```

### The Fiscal Code

Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used.(Newman -> NWM).     
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).   
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).

    
Generate 3 capital letters from the name, if it has:          
Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).    
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).      
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).     
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).     
 
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:      

Take the last two digits of the year of birth (1985 -> 85).       
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.      
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).         
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).       
Examples

``` javascript
const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T"
}
```

``` javascript
fiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
})➞
"DBTMTT00A01"

fiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950"
})➞
"YUXHLN50T41"

fiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928"
})➞
"MSOMKY28A16"
```

### Sexagenary Cycle (Chinese Zodiac)

In early recorded Chinese history, time was reckoned using the sexagenary (60-year) cycle, generated from two subcycles:

Five heavenly stems (elements) in this order: wood, fire, earth, metal, water. The stems change every two years.
Twelve earthly branches (animals) in this order: rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, pig. The branches change yearly.
The combinations between these two sub-cycles result in a 60-year cycle where no two years are the same — for example, the 5 years of the Rat have 5 different elements: 1924 Wood Rat, 1936 Fire Rat, 1948 Earth Rat, 1960 Metal Rat, 1972 Water Rat.

The first 14 years of the current cycle are shown in the table below:

| Gregorian Year | Stem  | Branch  |
|----------------|-------|---------|
| 1984           | Wood  | Rat     |
| 1985           | Wood  | Ox      |
| 1986           | Fire  | Tiger   |
| 1987           | Fire  | Rabbit  |
| 1988           | Earth | Dragon  |
| 1989           | Earth | Snake   |
| 1990           | Metal | Horse   |
| 1991           | Metal | Sheep   |
| 1992           | Water | Monkey  |
| 1993           | Water | Rooster |
| 1994           | Wood  | Dog     |
| 1995           | Wood  | Pig     |
| 1996           | Fire  | Rat     |
| 1997           | Fire  | Ox      |

These days, the sexagenary cycle is used mainly for historical celebrations and events, and in Chinese astrology. The Gregorian calendar is now the standard means of reckoning time.

Create a function that takes a number representing a year in the Gregorian calendar, and returns a string consisting of the corresponding stem-and-branch combination in the sexagenary cycle.

Examples

``` javascript
sexagenary(1971)➞
"Metal Pig"

sexagenary(1927)➞
"Fire Rabbit"

sexagenary(1974)➞
"Wood Tiger"
```

### Panlindrome checker

Complete the function to return `true` if the given string is a palindrome. Otherwise, return `false` .

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

I'll pass strings with varying formats, such as `"racecar"` , `"RaceCar"` , and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"` , `"2A3 3a2"` , and `"2_A3*3#A2"` .

``` javascript
function palindrome(str) {
    return true;
}
palindrome("eye"); //true
```

[//]:<> (')

### Roman Numeral Converter

Complete the function to convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

``` javascript
function convertToRoman(num) {
    return num;
}
convertToRoman(97); //XCVII
```

### Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e.spaces, punctuation), but do pass them on.

``` javascript
function rot13(str) {
    return str;
}
rot13("PUNEVMNEQ"); //
```

### Telephone Number Validator

Complete the function to return `true` if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

``` 
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
```

For this challenge you will be presented with a string such as `800-692-7753` or `8oo-six427676;laskdjf` . Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return `true` if the string is a valid US phone number; otherwise return `false` .

``` javascript
function telephoneCheck(str) {
    return true;
}
telephoneCheck("555-555-5555");
```

| Invoke                              | answer     |
|-------------------------------------|------------|
| telephoneCheck("555-555-5555")      | a boolean. |
| telephoneCheck("1 555-555-5555")    | true.      |
| telephoneCheck("1 (555) 555-5555")  | true.      |
| telephoneCheck("5555555555")        | true.      |
| telephoneCheck("555-555-5555")      | true.      |
| telephoneCheck("(555)555-5555")     | true.      |
| telephoneCheck("1(555)555-5555")    | true.      |
| telephoneCheck("555-5555")          | false.     |
| telephoneCheck("5555555")           | false.     |
| telephoneCheck("1 555 555 5555")    | true.      |
| telephoneCheck("1 456 789 4444")    | true.      |
| telephoneCheck("123**&!!asdf#")     | false.     |
| telephoneCheck("55555555")          | false.     |
| telephoneCheck("(6054756961)")      | false      |
| telephoneCheck("2 (757) 622-7382")  | false.     |
| telephoneCheck("0 (757) 622-7382")  | false.     |
| telephoneCheck("-1 (757) 622-7382") | false      |
| telephoneCheck("2 757 622-7382")    | false.     |
| telephoneCheck("10 (757) 622-7382") | false.     |
| telephoneCheck("27576227382")       | false.     |
| telephoneCheck("(275)76227382")     | false.     |
| telephoneCheck("2(757)6227382")     | false.     |
| telephoneCheck("2(757)622-7382")    | false.     |
| telephoneCheck("(555)5(55?)-5555")  | false.     |

### Cash Register

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument `price` , payment as the second argument `cash` , and cash-in-drawer `cid` as the third argument.

`cid` is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [... ]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

``` javascript
function checkCashRegister(price, cash, cid) {
    var change;
    return change;
}
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
//{status: "OPEN", change: [["QUARTER", 0.5]]}
```
