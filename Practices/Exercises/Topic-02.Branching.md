# **_Control Flows_** 

---

### 1. Special two-digit-number
A special two-digit number is a number such that when the sum of the digits of the number is added to the product of its digits, the result is equal to the original two-digit number.
```js
special2digits(19) ➞ true

special2digits(20) ➞ false

```
Notes:
- Try think how to extract 2 digits from the input number using math only
- Maybe you need to know about : div & mod operator

---

### 2. Area and perimeter finder
Write a function that accepts width (decimal), height (decimal) and choice ("area", "perimeter") as input and calculates the area or perimeter of a square.

```js
areaPerimeter(2, 3, "area") ➞ 6

areaPerimeter(8, 6, "perimeter") ➞ 28

areaPerimeter(2.9, 3.1, "perimeter") ➞ 12
```

---

### 3. Triangle and parallelogram area finder
Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

```js
areaShape(2, 3, "triangle") ➞ 3

areaShape(8, 6, "parallelogram") ➞ 48

areaShape(2.9, 1.3, "parallelogram") ➞ 3.77
```
Notes:  
- Area of a triangle is **0.5 * b * h*** 
- Area of a parallelogram is **b * h**
- Assume triangle and parallelogram are the only inputs for shape.  

---

### 4. The pH Scale

Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.

```js
pHName(5) ➞ "acidic"

pHName(8.7) ➞ "alkaline"

pHName(7) ➞ "neutral"
```

Notes:
- Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.

---

### 5. BMI Calculator

Get heigt in cm and weight in kg of 1 human then calculate they BMI number and print answer

```js
BMI(170,60 ) ➞ "normal"

BMI(180,55) ➞ "underweight"

```

---

### 6.Zodiac
Create a function take *age* of person as argument and return which zodiac he/she is. Select current year

```js
// Current year is 2020
zodiac(12) ➞ "Mouse"
zodiac(8) ➞ "Dragon"

```
Note:
- Try to figure out how to use % operator

---

### 7. Tax
Create a function to calculate incometax
- no tax if your income lower than 1000$
- 10% income as tax if your income lower than 1500$
- 20% income as tax if your income lower than 2000%
- 30% income as tax if your income lower than 2500%
- 35% income as tax otherwise
```javascript
tax(2500) ➞ 750
tax(1234) ➞ 0
tax(4321) ➞ 1512.35
```

---

### 8. Quadratic expression Calculate
Take *a*, *b*, *c* as arguments then solve Quadratic Expression, print delta's status & solution(s)
<img src="https://www.gstatic.com/education/formulas/images_long_sheet/en/quadratic_equation.svg">

```js
quadratic(1,-2,1 ) ➞ '1'
quadratic(1,-5,6 ) ➞ '2 and 3'
quadratic(1,5,6 ) ➞ '-2 and -3'
quadratic(3,2,5) ➞ 'No solution'
```

--- 

### 9. Narcissistic numbers
By definition, a narcissistic number is full of itself. A narcissistic number is the sum of its own digits each raised to the power of the number of digits.

```js
isNarcissistic(153) ➞ true
// 153 = 1^3 + 5^3 + 3^3 = 153
```
Notes:
- Only 3-digit numbers are considerated

---

### 10. Last Digit Ultimate
Your job is to create a function, that takes 3 numbers: a, b, c and returns true if (the last digit of a \* the last digit of b) = the last digit of c. Check the examples below for an explanation.

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
- The last digit of a = `x`, the last digit of `b` = `y`, and the last digit of `c` = `z`.
- Return true if `x*y = z`, and false otherwise.  
- Numbers can be negative.

---
