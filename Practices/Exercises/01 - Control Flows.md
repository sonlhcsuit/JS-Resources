# ***Control Flows*** 
_____________________________________________________________

> ### Special two digit number

A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
```js
special2digits(19) ➞ true

special2digits(20) ➞ false

```

> ### BMI Calculator
Get heigt in cm and weight in kg of 1 human then calculate they BMI number and print answer

```js
BMI(170,60 ) ➞ "normal"

BMI(180,55) ➞ "underweight"

```

> ### Quadratic expression Calculate
Take a b c as arguments then solve Quadratic Expression, print delta's status & solution(s)

<img src="https://www.gstatic.com/education/formulas/images_long_sheet/en/quadratic_equation.svg">

```js
quadratic(1,-2,1 ) ➞ {status: "single",value:-1}
quadratic(1,-5,6 ) ➞ {status: "double",value:[2,3]}

```

> ### Perfect Number
A perfect number is a positive integer that is equal to the sum of it divisors. Number because the sum of the proper divisors in each case is equal to the number; the proper divisors of 6 are 1, 2, and 3, and their sum is 6.(496)


```js
isPerfectNum(496) ➞ true

```

> ### Amicable Numbers

Amicable numbers are a pair of numbers with the following property: the sum of all of the proper divisors of the first number (not including itself) exactly equals the **second number** while the sum of all of the proper divisors of the second number (not including itself) likewise equals the **first number**.
```js
isAmicable(220,284) ➞ true
// First we find the proper divisors of 220:

// 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110

// Now find the proper divisors of 284:

// 1, 2, 4, 71, 142
```

> ### Narcissistic numbers

By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits.

```js
isNarcissistic(153) ➞ true
// 153 = 1^3 + 5^3 + 3^3 = 153

```

> ### Triangular Number Sequence

This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: `1, 3, 6, 10, 15` . Write a function that converts n number of places with its corresponding number.

```js
getTriangular(5) ➞ [1,3,6,10,15]

```

> ### Poker Flush?
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

> ### Dice Gambling
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

> ### Digitaldrome
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
