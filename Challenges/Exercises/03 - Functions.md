
# ***Functions***
______________________________
> ### Remove all dollar sign of a string

``` javascript
function removeDollarSign(text) {
    
    return "new string"
};
removeDollarSign('$80% percent of $life is to show $up')
```

Hint:   
You can iterate through an string (character by character) by doing the same as array([])

> ### Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

``` javascript
function binaryAgent(str) {
    return str;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```


> ### Beans counting
Write a function `countBs` that takes a string as its only argument and returns a number that indicates how many uppercase “**B**” characters there are in the string.
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “**B**” characters). Rewrite `countBs` to make use of this new function.
```js

function countBs(input_as_string){
    return 0
}
countBs("aaaaaaaaaaaaaaa")


function countChar(input_as_string,char){
    return 0
}
countChar("aaaaaaaaaaaaaaa","a")
```


> ### The Recamán Sequence

The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:

For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
Repeat until the number of interest is found.
Look at example below for the steps to do for to establish the Recamán Index of number 2:

``` js
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

// The Recaman Index of 2 is: 4
// Given a positive integer n, implement a function that returns its Recamán Index.
```



``` javascript
recamanIndex(2)➞ 4

recamanIndex(3)➞ 2

recamanIndex(7)➞ 5
```

> ### Profile Lookup

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

> ### Hailstone Sequence 
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

> ### Prime Factorization

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

> ### Semiprimes

A semiprime is a composite number that is the product of two primes. Apart from these two primes, its only other proper (non-self) divisor is 1.

The two prime factors of a semiprime can be the same number (e.g.the semiprime 49 is the product of 7x7). A semiprime that has two distinct prime factors is called a squarefree semiprime.

Create a function that takes a number and returns "Squarefree Semiprime", "Semiprime", or "Neither".


``` javascript
semiprime(49)➞
"Semiprime"

semiprime(15)➞
"Squarefree Semiprime"

semiprime(97)➞
"Neither"
```

> ### Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

``` javascript
function findLongestWordLength(str) {
    return str.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog"); //6 - jumped
```

> ### The Fiscal Code

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





