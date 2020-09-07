# ***Problems Solving***
________________________
> ### Sexagenary Cycle (Chinese Zodiac)

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


> ### 1. Roman Numeral Converter

Complete the function to convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

``` javascript
function convertToRoman(num) {
    return num;
}
convertToRoman(97); //XCVII
```

> ### 2. Caesars Cipher

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

> ### 3. Telephone Number Validator

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

> ### 4. Cash Register

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

> ### 5. Phone Letter Combinations
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.  

<img src="https://www.researchgate.net/profile/Shumin_Zhai/publication/221518150/figure/fig1/AS:305488823635968@1449845619238/The-standard-12-key-telephone-keypad-character-layout-follows-the-ITU-E161-standard-8.png">


Alternative Text  


```js
letter_combinations("23") ➞ ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

letter_combinations("532") ➞ ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"]
```

> ### 6.Digitaldrome
In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).

Given an integer n, implement a function that returns a string:

"Metadrome" if the digits of n form an ascending sequence without repeating digits.  

"Plaindrome" if the digits of n form an ascending sequence with repeating digits.   

"Katadrome" if the digits of n form a descending sequence without repeating digits.  

"Nialpdrome" if the digits of n form a descending sequence with repeating digits.  

"Repdrome" if n contains a single repeating digit.  

"Nondrome" if none of the above conditions is true.
```js
digitaldrome(1357) ➞ "Metadrome"
// Ascending sequence without repeating digits

digitaldrome(12344) ➞ "Plaindrome"
// Ascending sequence with repeating digits

digitaldrome(7531) ➞ "Katadrome"
// Descending sequence without repeating digits

digitaldrome(9874441) ➞ "Nialpdrome"
// Descending sequence with  repeating digits

digitaldrome(666) ➞ "Repdrome"
// There's only a single repeating digit

digitaldrome(1985) ➞ "Nondrome"
// This is not a sequence
```
Hint:  
- Any given n will be a positive integer.
- The word "drome" comes from the Greek suffix for "run", while "kata" and "meta" are the prefixes for "down" (or "into") and "after" (or "through").

> ### 7. Poker Flush?
Create a function that takes in two arrays and determines whether there exists a flush.

The first array represents the 5 cards dealt on the table.
The second array represents the 2 cards in your hand.
Notation: card number and suit (abbreviated as S = Spades, H = Hearts, D = Diamonds, C = Clubs) separated by an underscore.
```js
checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]) ➞ true 
// diamond flush

checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]) ➞ true 
// spade flush

checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]) ➞ false
```

> ### 8. Dice Gambling
Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:

If a 1 is rolled, that is bad luck. The next roll counts as 0.
If a 6 is rolled, that is good luck. The next roll is multiplied by 2.
The array length will always be 3 or higher.
```js
rolls([1, 2, 3]) ➞ 4
// The second roll, 2, counts as 0 as a result of rolling 1.

rolls([2, 6, 2, 5]) ➞ 17
// The 2 following the 6 was multiplied by 2.

rolls([6, 1, 1]) ➞ 8
// The first roll makes the second roll worth 2, but the
// second roll was still 1 so the third roll doesn't count.
```

Notes   
Even if a 6 is rolled after a 1, 6 isn't summed but the 6's "effect" still takes place.

> ### 9.Digitaldrome
In this challenge, you have to establish if the digits of a given number form a sequence (ascending or descending).

Given an integer n, implement a function that returns a string:

`Metadrome` if the digits of n form an ascending sequence without repeating digits.
`Plaindrome` if the digits of n form an ascending sequence with repeating digits.
`Katadrome` if the digits of n form a descending sequence without repeating digits.
`Nialpdrome` if the digits of n form a descending sequence with repeating digits.
`Repdrome` if n contains a single repeating digit.
`Nondrome` if none of the above conditions is true.
```js
digitaldrome(1357) ➞ "Metadrome"
// Ascending sequence without repeating digits

digitaldrome(12344) ➞ "Plaindrome"
// Ascending sequence with repeating digits

digitaldrome(7531) ➞ "Katadrome"
// Descending sequence without repeating digits

digitaldrome(9874441) ➞ "Nialpdrome"
// Descending sequence with  repeating digits

digitaldrome(666) ➞ "Repdrome"
// There's only a single repeating digit

digitaldrome(1985) ➞ "Nondrome"
// This is not a sequence
```
Notes  
Any given n will be a positive integer.  
The word "drome" comes from the Greek suffix for "run", while "kata" and "meta" are the prefixes for "down" (or "into") and "after" (or "through").

> ### 10. Water Jug Puzzle
Given a set of 3 jugs of water that have capacities of a, b, and c liters, find the minimum number of operations performed before each jug has `x`, `y`, and `z` liters. Only jug C will start completely filled.

An operation is any of the following: A jug is emptied, a jug is filled, or water is poured from one jug to another until one of the jugs is either empty or full.

For example, jugs `A`, `B`, and `C` with capacities of 3, 5, and 8, where jugs `A` and `B` start empty and `C` has the full 8, require 2 operations to reach the state of 0, 3, and 5 liters in the jugs.

Create a function that, given an array of jug capacities [A, B, C] and an goal state array [x, y, z], returns the minimum number of operations needed to reach the goal state. If the inputs are invalid or there is no solution, return "No solution."

```js
waterjug([3, 5, 8], [0, 3, 5]) ➞ 2

waterjug([1, 3, 4],  [0, 2, 2]) ➞ 3

waterjug([8, 17, 20], [0, 10, 10]) ➞ 9

waterjug([4, 17, 22], [2, 5, 15]) ➞ "No solution."

waterjug([3, 5, 8], [0, 0, 9]) ➞ "No solution."
```

Hint:  
- The amount of water in a jug can never exceed the capacity of that jug.
- The total liters in the goal state must be equal to the capacity of jug C.

> ### 11. Symmetrical Patterns
Kathleen owns a beautiful rug store. She likes to group the rugs into 4 mutually exclusive categories.

- imperfect
- horizontally symmetric
- vertically symmetric
- perfect
An imperfect rug is one that is neither horizontally nor vertically symmetric. Here is an example of an imperfect rug:
```js
[
  ["a", "a", "a", "a"],
  ["a", "a", "a", "a"],
  ["a", "a", "b", "b"]
]
```
The following is an horizontally symmetric rug. You could "fold" the rug across a hypothetical x-axis, and both sides would be identical. A horizontally symmetric rug is not vertically symmetric (otherwise this rug would be classified as perfect ).
```js
[
  ["c", "a", "a", "a"],
  ["b", "b", "b", "b"],
  ["c", "a", "a", "a"]
]
```
The following is a vertically symmetric rug. You could "fold" the rug across a hypothetical y-axis, and both sides would be identical. A vertically symmetric is not horizontally symmetric (otherwise this rug would be classified as perfect ).
```js
[
  ["a", "b", "a"],
  ["b", "b", "b"],
  ["a", "b", "a"],
  ["a", "b", "a"]
]
```
Finally, a perfect rug is one that is both vertically and horizontally symmetric. That is, folded either length-wise or width-wise will yield two identical pieces.
```js
[
  ["a", "b", "b", "a"],
  ["b", "b", "b", "b"],
  ["a", "b", "b", "a"]
]
```

Given a rug of `m` x `n` dimension, determine whether it is imperfect, horizontally symmetric, vertically symmetric or perfect. Rugs are represented using a two-dimensional array.

```js
classifyRug([
  ["a", "a"],
  ["a", "a"]
]) ➞ "perfect"

classifyRug([
  ["a", "a", "b"],
  ["a", "a", "a"],
  ["b", "a", "a"]
]) ➞ "imperfect"

classifyRug([
  ["b", "a"],
  ["b", "a"]
]) ➞ "horizontally symmetric"

classifyRug([
  ["a", "a"],
  ["b", "b"]
]) ➞ "vertically symmetric"
```

Hint: 
- You can consider a 1 x n rug as being trivially horizontally symmetric, an n x 1 rug as being trivially vertically symmetric, and a 1 x 1 rug as being trivially perfect.

