# ***Values, Types, Operators*** 
_____________________________________________________________
> ### 1. Radians to Degrees
Create a function that takes a `n` angle in radians and returns the corresponding angle in degrees.

```js
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
```

> ### 2. Celsius to Fahrenheit
Create a function that takes a `n` temperature in celsius and returns the corresponding temperature in Fahrenheit.

```js
celsiusToFahrenheit(10) ➞ 50

celsiusToFahrenheit(20) ➞ 68

celsiusToFahrenheit(50) ➞ 122
```

> ### 3. Pound to Kilogram

Create a function that takes a `n` mass in pound and returns the corresponding temperature in kilogram.

```js
PoundToKilogram(20) ➞ 9.0718474

PoundToKilogram(70) ➞ 31.7514659

PoundToKilogram(80) ➞ 36.2873896
```

> ### 4. Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

<img src="../../sources/matchstick_houses.png" >
Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

```js
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

```

Notes:   
Step 0 returns 0 matchsticks.  
The input (step) will always be a non-negative integer.  
Think of the input (step) as the total number of houses that have been connected together.  

> ### 5. Sum of Cubes
Create a function that takes in 3 numbers and returns the sum of its cubes.

```js
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes(3, 4, 5) ➞ 216

sumOfCubes(2,2,2) ➞ 24

```

> ### 6. Pythagorean Triplet
Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.

```js
isTriplet(3, 4, 5) ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12) ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3) ➞ false
// 1² + 2² = 5
// 3² = 9
```
Notes:  
Numbers may not be given in a ***sorted*** order.

> ### 7. Last Digit Ultimate
Your job is to create a function, that takes 3 numbers: a, b, c and returns true if (the last digit of a * the last digit of b) = the last digit of c. Check the examples below for an explanation.

```js
lastDig(25, 21, 125) ➞ true
// The last digit of 25 is 5, the last digit of 21 is 1, and the last
// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// to the last digit of 125(5).

lastDig(55, 226, 5190) ➞ true
// The last digit of 55 is 5, the last digit of 226 is 6, and the last
// digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// equal to the last digit of 5190(0).

lastDig(12, 215, 2142) ➞ false
// The last digit of 12 is 2, the last digit of 215 is 5, and the last
// digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// not equal to the last digit of 2142(2).

```

Notes:
If you still don't understand:  
The last digit of a = `x`, the last digit of `b` = `y`, and the last digit of `c` = `z`.
Return true if `x*y = z`, and false otherwise.  
Numbers can be negative.  

> ### 8. Automorphic Numbers

A number n is automorphic if n^2 ends in n.

For example: n=*5*, n^2=2*5*

Create a function that takes a number and returns true if the number is automorphic, false if it isn't.

```js

isAutomorphic(5) ➞ true

isAutomorphic(8) ➞ false

isAutomorphic(76) ➞ true
```

> ### 9. BMI Calculator
Get heigt in cm and weight in kg of 1 human then calculate they BMI number and print answer

```js
BMI(170,60 ) ➞ "normal"

BMI(180,55) ➞ "underweight"

```
