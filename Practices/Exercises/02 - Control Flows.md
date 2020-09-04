# ***Control Flows*** 
_____________________________________________________________

> ### 1. Special two-digit-number

A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
```js
special2digits(19) ➞ true

special2digits(20) ➞ false

```

> ### 2. Perfect Number
A perfect number is a positive integer that is equal to the sum of it divisors. Number because the sum of the proper divisors in each case is equal to the number; the proper divisors of 6 are 1, 2, and 3, and their sum is 6.(496)

```js
isPerfectNum(496) ➞ true

```

> ### 3. Abundant Number 
An abundant number or **excessive** number is a number `n`  which the sum-of-divisors `s` are satisfied the condition: `s` > `2n`

```js
isAbundantNum(27) ➞ false

isAbundantNum(24) ➞ true

isAbundantNum(97) ➞ false

isAbundantNum(100) ➞ true

```

> ### 4. Amicable Numbers

Amicable numbers are a pair of numbers with the following property: the sum of all of the proper divisors of the first number (not including itself) exactly equals the **second number** while the sum of all of the proper divisors of the second number (not including itself) likewise equals the **first number**.
```js
isAmicable(220,284) ➞ true
// First we find the proper divisors of 220:

// 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110

// Now find the proper divisors of 284:

// 1, 2, 4, 71, 142
```

> ### 5. Narcissistic numbers

By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits.

```js
isNarcissistic(153) ➞ true
// 153 = 1^3 + 5^3 + 3^3 = 153

```

> ### 6. Triangular Number Sequence

This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: `1, 3, 6, 10, 15` . Write a function that converts n number of places with its corresponding number.

```js
getTriangular(5) ➞ [1,3,6,10,15]

```

> ### 7. Quadratic expression Calculate
Take a b c as arguments then solve Quadratic Expression, print delta's status & solution(s)

<img src="https://www.gstatic.com/education/formulas/images_long_sheet/en/quadratic_equation.svg">

```js
quadratic(1,-2,1 ) ➞ {status: "single",value:-1}
quadratic(1,-5,6 ) ➞ {status: "double",value:[2,3]}

```

> ### 8. Sum All Odd Fibonacci Numbers

Given a positive integer `num` , return the sum of all odd Fibonacci numbers that are less than or equal to `num` .

The first two numbers in the Fibonacci sequence are `1` and `1` . Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than or equal to 10 are `1` , `1` , `3` , and `5` .

``` javascript
function sumFibs(num) {
    return num;
}
sumFibs(4000000); //4613732
```
