# **_Values, Types, Operators_**
---

### 1. Convert Minutes into Seconds

Write a function that takes an integer `minutes` and converts it to seconds.

```js
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
```

---

### 2. Radians to Degrees

Create a function that takes a `n` angle in radians and returns the corresponding angle in degrees.

```js
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
```

---


### 3. Celsius to Fahrenheit

Create a function that takes a `n` temperature in celsius and returns the corresponding temperature in Fahrenheit.

```js
celsiusToFahrenheit(10) ➞ 50

celsiusToFahrenheit(20) ➞ 68

celsiusToFahrenheit(50) ➞ 122
```

### 4. Pound to Kilogram

Create a function that takes a `n` mass in pound and returns the corresponding temperature in kilogram.

```js
PoundToKilogram(20) ➞ 9.0718474

PoundToKilogram(70) ➞ 31.7514659

PoundToKilogram(80) ➞ 36.2873896
```

---

### 5. Matchstick Houses

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

<img src="../../sources/matchstick-houses.png">

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

```js
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436

```
Notes:  
- Step 0 returns 0 matchsticks.  
- The input (step) will always be a non-negative integer.  
- Think of the input (step) as the total number of houses that have been connected together.

---

### 6. Sum of Cubes

Create a function that takes in 3 numbers and returns the sum of its cubes.

```js
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

sumOfCubes(3, 4, 5) ➞ 216

sumOfCubes(2,2,2) ➞ 24

```

---

### 7. Basketball Points

You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

```js
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100
```



### 8. Rectangle Area

Calculate and return the area of a rectangle having sides `height` and `width`.

- length: The length of the rectangle.
- width: The width of the rectangle.
- Return a number denoting the rectangle's area.

```js
getArea(2,5) - 10
getArea(1,2) - 2
getArea(100,200) - 2000
```

---

### 9. Rectangle Perimeter

Calculate and return the perimeter of a rectangle having sides `height` and `width`.

- length: The length of the rectangle.
- width: The width of the rectangle.
- Return a number denoting the perimeter of a rectangle.

```js
getPerimeter(2,5) - 14
getPerimeter(1,2) - 6
getPerimeter(100,200) - 600
```

---

### 10. Pythagorean Triplet

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
- Numbers may not be given in a **_sorted_** order.
- You must find the way to determine max, min and remain number (but not with sort, or max, min built-in functions)

