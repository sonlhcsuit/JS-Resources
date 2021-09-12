# **_Easy Exercise_**

## Variable, Value Playground

### 1. Return the Sum of Two Numbers

Create a function that takes two numbers as arguments and `return` their sum.

```js
add(3, 2) ➞ 5

add(-3, -6) ➞ -9

add(7, 3) ➞ 10
```

---

### 2. Return the Difference of Two Numbers

Create a function that takes two numbers as arguments and `return` their difference.

```js
minus(3, 2) ➞ 1

minus(-3, -6) ➞ 3

minus(7, 3) ➞ 4
```

---

### 3. Return the Product of Two Numbers

Create a function that takes two numbers as arguments and `return` their product.

```js
multiply(3, 2) ➞ 6

multiply(-3, -6) ➞ 18

multiply(7, 3) ➞ 21
```

---

### 4. Return the Sum of Two Numbers

Create a function that takes two numbers as arguments and `return` their quotient.

```js
divide(4, 2) ➞ 2

addition(-6, -3) ➞ 2

addition(21, 3) ➞ 7
```

---

### 5. Convert Minutes into Seconds

Write a function that takes an integer `minutes` and converts it to seconds.

```js
toSeconds(5) ➞ 300

toSeconds(3) ➞ 180

toSeconds(2) ➞ 120
```

---

### 6. Convert Age to Days

Create a function that takes the `age` (in years)  and return the age in `days`.

```js
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300
```

---

### 7. Return the Remainder from Two Numbers

There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

```js
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
```

---

### 8. Find the Perimeter of a Rectangle

Create a function that takes `length` and `width` and finds the perimeter of a rectangle.

```js
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
```

---

### 9. Basketball Points

You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

```js
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
```

---

### 10. The Farm Problem

In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

- `chickens` = 2 legs
- `cows` = 4 legs
- `pigs` = 4 legs

The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the `total number of legs` of all the animals.
```js
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
```

---

### 11. Football Points

Create a function that takes the number of `wins`, `draws` and `losses` and calculates the number of points a football team has obtained so far.

- `wins` get 3 points
- `draws` get 1 point
- `losses` get 0 points

```js
footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0

```

---

### 12. Sum of Polygon Angles

 Given an n-sided regular polygon `n`, return the total `sum of internal angles` (in degrees).
```js
sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720
```

****Notes***
- n will always be greater than 2.
- The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.

---

### 13. Let's Fuel Up!

 A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

```js
calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100
```

---

### 14. Moving House

 I'd like to calculate how long on average I've lived in a single house.

Given a person's `age` and the number of times they've `moved house` as `moves`, return the average number of years that they've spent living in the same house.

```js
yearsInOneHouse(30, 1) ➞ 15

yearsInOneHouse(15, 2) ➞ 5

yearsInOneHouse(80, 0) ➞ 80
```

---

### 15. Frames Per Second

Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

```js
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000
```

---

### 16. Among Us Imposter Formula

Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is `100 × (i / p)` where `i` is the imposter count and `p` is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

****Notes***: The player limit is 10 and the imposter count can only go up to 3.
```js
imposterFormula(1, 10) ➞ "10%"

imposterFormula(2, 5) ➞ "40%"

imposterFormula(1, 8) ➞ "13%"

```

---

## Conditional Statement playground

### 17. Find Out the Leap Year

 A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

Write a function that determines if the year is a leap year or not.

```js
leapYear(2020) ➞ true

leapYear(2021) ➞ false

leapYear(1968) ➞ true
```

---
### 18. Two Makes Ten

 Create a function that takes two arguments. Both arguments are integers, `a` and `b`. Return `true` if one of them is `10` or if their sum is `10`.

```js
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
```

---

### 19. Many Operators!

 Some basic arithmetic operators are `+, -, *, /, and %`. In this challenge you will be given three parameters, `num1`, `num2`, and an `operator`. Use the operator on number 1 and 2.

```js
operate(1, 2, "+") ➞ 3
// 1 + 2 = 3

operate(7, 10, "-") ➞ -3
// 7 - 10 = -3

operate(20, 10, "%") ➞ 0
// 20 % 10 = 0

```

---

### 20. Movie Theatre Admittance

Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
- The person is at least 15 years old.
- They have parental supervision.

The function accepts two parameters, `age` and `isSupervised`. Return a boolean.
```js
acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true
```

****Notes***
- `age` is a decimal.
- `isSupervised` is a boolean.

---

### 21. Are the Numbers Equal?

Create a function that returns `true` when `num1` is `equal` to `num2`; otherwise return `false`.

```js
isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false
```

---

### 22. Drinks Allowed?

A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

```js
shouldServeDrinks(17, true) ➞ false

shouldServeDrinks(19, false) ➞ true

shouldServeDrinks(30, true) ➞ false

```
---


### 23. Less Than 100?

Given two numbers, return `true` if the sum of both numbers is less than 100. Otherwise return `false`.

```js
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true
```

---

### 24. I'd Like a New Shade of Blue, Please

I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of `complete walls` that I can paint, before I need to head to the shops to buy more.

- `n` is the number of square meters I can paint.
- `w` and `h` are the widths and heights of a single wall in meters.

```js
howManyWalls(100, 4, 5) ➞ 5

howManyWalls(10, 15, 12) ➞ 0

howManyWalls(41, 3, 6) ➞ 2
```

---
## Object, Array, for loop playground
### 25. Binary Array to Decimal

In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of `ones and zeroes` of a binary number, return the equivalent `decimal value`.

```js
binaryToDecimal([0, 0, 0, 1]) ➞ 1

binaryToDecimal([0, 0, 1, 0]) ➞ 2

binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005
```

---

### 26. Return Types

 Create a function that takes an array and returns the types of values (data types) in a new array.

```js
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]

```
---
### 27. Upvotes vs Downvotes

 Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

```js
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
```

---

### 28. Rotate the List by One 🔄

Given an array, rotates the values clockwise by one (the last value is sent to the first position).

```js
rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

```

---

### 29. Reverse an Array

Write a function to reverse an array.

```js
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []

```

---

### 30. Tallest Birthday Cake Candles

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

```js
birthdayCakeCandles([4, 4, 1, 3]) ➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.

birthdayCakeCandles([3, 2, 1, 3]) ➞ 2

birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]) ➞ 4

```

---

### 31. Binary Addition + 0 1 0 1


 Create a function that takes two numbers and returns their sum as a binary string.

```js
addBinary(1, 1) ➞ "10"

addBinary(1, 2) ➞ "11"

addBinary(4, 5) ➞ "1001"
```

--- 

### 32. factorialDivisible

Create a function that takes a number **n** and the expression **L = (n - 1)! + 1 = 1 _ 2 _ 3 ... * (n-1) + 1** please determine if **L** is divisible by **n**

```js
// with n is 3
factorialDivisible(n); // return true
// explain: L = 2! + 1 = 1*2 + 1 = 3 divisible by 3.

// with n is 5
factorialDivisible(n); // return true
// explain: L = 4! + 1 = 1*2*3*4 + 1 = 25 divisible by 5.

// with n is 4
factorialDivisible(n); // return false
// explain: L = 3! + 1 = 6 + 1 = 7 divisible by 4.

```

---

### 33. Automorphic Numbers

A number n is automorphic if n^2 ends in n.

For example: n=_5_, n^2=2*5*

Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

```js

isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true
```

---

### 34. Miserable Parody of a Calculator

 Create a function that will handle simple math expressions. The input is an expression in the form of a string.

```js
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11

