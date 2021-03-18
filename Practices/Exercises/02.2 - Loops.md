# **_Loops_**

---

### 1. Right-angled triangle
Write a function that makes `n` calls to _console.log_ to output the following triangle:

```js
rightAngledTriangle(4);
// #
// ##
// ###
// ####

rightAngledTriangle(6);
// #
// ##
// ###
// ####
// #####
// ######
```

---

### 2. Left-angled triangle
Write a function that makes `n` calls to _console.log_ to output the following triangle:

```js
leftAngledTriangle(4);
//    #
//   ##
//  ###
// ####

leftAngledTriangle(6);
//       #
//      ##
//     ###
//    ####
//   #####
//  ######
```

---

### 3. Fizz Buzz
Write a program that uses console.log to print all the numbers from 1 to _n_, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

```js
fizzBuzz(10);
//1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz

fizzBuzz(15);
//1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
```

---

### 4. Perfect Number
A perfect number is a positive integer that is equal to the sum of it divisors. Number because the sum of the proper divisors in each case is equal to the number; the proper divisors of 6 are 1, 2, and 3, and their sum is 6.(496)
```js
isPerfectNum(496) ➞ true
```

---

### 5. Abundant Number 
An abundant number or **excessive** number is a number `n`  which the sum-of-divisors `s` are satisfied the condition: `s` `2n`

```js
isAbundantNum(27) ➞ false

isAbundantNum(24) ➞ true

isAbundantNum(97) ➞ false

isAbundantNum(100) ➞ true

```

---

### 6. Amicable Numbers

Amicable numbers are a pair of numbers with the following property: the sum of all of the proper divisors of the first number (not including itself) exactly equals the **second number** while the sum of all of the proper divisors of the second number (not including itself) likewise equals the **first number**.
```js
isAmicable(220,284) ➞ true
// First we find the proper divisors of 220:

// 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110

// Now find the proper divisors of 284:

// 1, 2, 4, 71, 142
```

### 7. Triangular Number Sequence

This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: `1, 3, 6, 10, 15` . Write a function that converts n number of places with its corresponding number.

```js
getTriangular(5) ➞ [1,3,6,10,15]

```

---

### 8. Century Crisis
Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.
  
You must calculate the number of people there will be in three decades from now.
  
The variable population is the world population now.
Assume that every month, someone gives birth to more people n.
Return the number of people there will be when the spaceship is complete.

```js
futurePeople(256, 2) ➞ 976

futurePeople(3248, 6) ➞ 5408

futurePeople(5240, 3) ➞ 6320
```

---



### 9. Isosceles triangle
Write a function that makes `n` calls to _console.log_ to output the following triangle:

```js
leftAngledTriangle(4);
//    #
//   ###
//  #####
// #######

leftAngledTriangle(6);
//       #
//      ###
//     #####
//    #######
//   #########
//  ###########
```

### 10. Chessboard
Write a program that creates a string that represents an n×n grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.This is an example of 8x8 chessboard:

```js
chessBoard(8, "#", "*");
// # * # * # * # *
// * # * # * # * #
// # * # * # * # *
// * # * # * # * #
// # * # * # * # *
// * # * # * # * #
// # * # * # * # *
// * # * # * # * #

chessBoard(8, "^", "%");
// ^ % ^ % ^ % ^ %
// % ^ % ^ % ^ % ^
// ^ % ^ % ^ % ^ %
// % ^ % ^ % ^ % ^
// ^ % ^ % ^ % ^ %
// % ^ % ^ % ^ % ^
// ^ % ^ % ^ % ^ %
// % ^ % ^ % ^ % ^
```
