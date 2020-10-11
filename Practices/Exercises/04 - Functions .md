
# ***Functions***
______________________________
> ### 1. Remove all dollar sign of a string

``` javascript
function removeDollarSign(text) {
    
    return "new string"
};
removeDollarSign('$80% percent of $life is to show $up')
```

Hint:   
You can iterate through an string (character by character) by doing the same as array([])

> ### 2. Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

``` javascript
function binaryAgent(str) {
    return str;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
```


> ### 3. Beans counting
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



> ### 4. Semiprimes

A semiprime is a composite number that is the product of two primes. Apart from these two primes, its only other proper (non-self) divisor is 1.

The two prime factors of a semiprime can be the same number (e.g.the semiprime 49 is the product of 7x7). A semiprime that has two distinct prime factors is called a squarefree semiprime.

Create a function that takes a number and returns "Squarefree Semiprime", "Semiprime", or "Neither".


``` javascript
semiprime(49) ➞ "Semiprime"

semiprime(15) ➞ "Squarefree Semiprime"

semiprime(97) ➞ "Neither"
```

> ### 5. Prime Factorization

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

> ### 6. The Recamán Sequence

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



> ### 7. Hailstone Sequence 
Write the function that can generate hail stone from an number  

Hailstone Sequences follow these rules:  
If a number is even, next number is divided by 2  
If a number is odd, next number multiplied it by 3 and add 1.  

For example, for a starting number of 7, the sequence is 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1, ....   
Such sequences are called hailstone sequences because the values typically rise and fall, somewhat analogously to a hailstone inside a cloud.  

Remember that hailstone sequence always end at 1!
you can use arrayname.push(value) to add an value to the end of the arrayname (arrayname is an array)
```javascript 
function hailstone(number){
    let sequence = []
    return sequence
}
hailstone(7) ➞ [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1, 4, 2, 1]
```

> ### 8. Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
```js
spinalCase('This Is Spinal Tap') ➞ "this-is-spinal-tap"
spinalCase('thisIsSpinalTap') ➞ "this-is-spinal-tap"
spinalCase('The_Andy_Griffith_Show') ➞ "the-andy-griffith-show"
```

> ### 9. Pig LatinPassed
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
```js

translatePigLatin("california")➞"aliforniacay"
translatePigLatin("paragraphs")➞"aragraphspay"
translatePigLatin("algorithm")➞"algorithmway"
translatePigLatin("schwartz")➞"artzschway"

```

# ***Callback***

> ### Your onw HOFs 

``` javascript
Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line

    // Only change code above this line
    return newArray;
};
```



> ### Higher Order Functions and Callback 

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.map()
Pokemon.filter()
Pokemon.reduce()
Pokemon.forEach()
```
- using `forEach` to log "Hello + [Pokemon_name]!"
- using `map` to turn array into ["01_Bulbasaur", "02_Ivysaur", ...]