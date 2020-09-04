# ***Control Flows*** 
_____________________________________________________________

> ### 1. Special two digit number

A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
```js
special2digits(19) ➞ true

special2digits(20) ➞ false

```

> ### 2. BMI Calculator
Get heigt in cm and weight in kg of 1 human then calculate they BMI number and print answer

```js
BMI(170,60 ) ➞ "normal"

BMI(180,55) ➞ "underweight"

```

> ### 3. Quadratic expression Calculate
Take a b c as arguments then solve Quadratic Expression, print delta's status & solution(s)

<img src="https://www.gstatic.com/education/formulas/images_long_sheet/en/quadratic_equation.svg">

```js
quadratic(1,-2,1 ) ➞ {status: "single",value:-1}
quadratic(1,-5,6 ) ➞ {status: "double",value:[2,3]}

```

> ### 4. Perfect Number
A perfect number is a positive integer that is equal to the sum of it divisors. Number because the sum of the proper divisors in each case is equal to the number; the proper divisors of 6 are 1, 2, and 3, and their sum is 6.(496)

```js
isPerfectNum(496) ➞ true

```

> ### 5. Amicable Numbers

Amicable numbers are a pair of numbers with the following property: the sum of all of the proper divisors of the first number (not including itself) exactly equals the **second number** while the sum of all of the proper divisors of the second number (not including itself) likewise equals the **first number**.
```js
isAmicable(220,284) ➞ true
// First we find the proper divisors of 220:

// 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110

// Now find the proper divisors of 284:

// 1, 2, 4, 71, 142
```

> ### 6. Narcissistic numbers

By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits.

```js
isNarcissistic(153) ➞ true
// 153 = 1^3 + 5^3 + 3^3 = 153

```

> ### 7. Triangular Number Sequence

This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: `1, 3, 6, 10, 15` . Write a function that converts n number of places with its corresponding number.

```js
getTriangular(5) ➞ [1,3,6,10,15]

```
