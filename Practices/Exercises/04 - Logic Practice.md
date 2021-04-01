# **_Logic Practice_**

---

### 1. Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

```js
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
```

Notes:  
- Input will be single words (not space).  
- Characters in words will be upper or lower case.  
- "y" is not considered a vowel.  

---

### 2. Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

```js
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
```

Notes:
- Your output must be case-sensitive (see second example).

---

### 3. How Many Vowels?
Create a function that takes a string and returns the number (count) of vowels contained within it.

```js
countVowels("Celebration") ➞ 5

countVowels("Palm") ➞ 1

countVowels("Prediction") ➞ 4
```

Notes:  
- a, e, i, o, u are considered vowels (not y).  
- All test cases are one word and only contain letters.

---

### 4. Sum All Odd Fibonacci Numbers

Given a positive integer `num` , return the sum of all odd Fibonacci numbers that are less than or equal to `num` .

The first two numbers in the Fibonacci sequence are `1` and `1` . Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than or equal to 10 are `1` , `1` , `3` , and `5` .

``` javascript
function sumFibs(num) {
    return num;
}
sumFibs(4000000); //4613732
```

---

### 5. Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

``` javascript
function findLongestWordLength(str) {
    return str.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog"); //6 - jumped
```

---

### 6. Panlindrome checker

Complete the function to return `true` if the given string is a palindrome. Otherwise, return `false` .

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

I'll pass strings with varying formats, such as `"racecar"` , `"RaceCar"` , and `"race CAR"` among others.

We'll also pass strings with special symbols, such as `"2A3*3a2"` , `"2A3 3a2"` , and `"2_A3*3#A2"` .

``` javascript
function palindrome(str) {
    return true;
}
palindrome("eye"); //true
```

---

### 7. Reverse the Case
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

```js
reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
```

### 8. Max Consecutive Ones

Given an binary array, find the maximum number of consecutive 1s in this array.

```js
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]); // 3

findMaxConsecutiveOnes([0, 0, 1, 0, 1, 1]); // 2

findMaxConsecutiveOnes([0, 0]); // 0
```

Notes:
- The input array will only contain 0 and 1
- The length of input array is a positive integer

Hold Your Breath!
You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

Positive numbers represent height above the water.
0 is sea level.
Negative numbers represent depth below the water's surface.
Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

Your character starts with a maximum breath meter of 10, and you can replenish your breath by 4 for every item in the array which you are at or above sealevel.

However, when diving underwater, your breath meter decreases by 2 per item in the array. Watch out, if your breath diminishes to 0, your character dies!

Worked Example
divingMinigame([-5, -15, -4, 0, 5]) ➞ true

// Breath meter starts at 10.
// -5 is below water, so breath meter decreases to 8.
// -15 is below water, so breath meter decreases to 6.
// -4 is below water, so breath meter decreases to 4.
// 0 is at sea level, so breath meter increases to 8.
// 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// Character survives!
Examples
divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ true

divingMinigame([-3, -6, -2, -6, -2]) ➞ false

divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4]) ➞ false
Notes
Lists may be of any length.
All arrays are valid.



---
Hamming Distance
Hamming distance is the number of characters that differ between two strings.

To illustrate:

String1: "abcbba"
String2: "abcbda"

Hamming Distance: 1 - "b" vs. "d" is the only difference.
Create a function that computes the hamming distance between two strings.

Examples
hammingDistance("abcde", "bcdef") ➞ 5

hammingDistance("abcde", "abcde") ➞ 0

hammingDistance("strong", "strung") ➞ 1
Notes
Both strings will have the same length.






### 9. Even All the Way
Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

```js
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
```

Notes  
Arrays start at index 0.

### 10. Transform into an Array with No Duplicates
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

```js
[1, 3, 3, 5, 5, 5][
  // original array

  (1, 3, 5)
];
// original array transformed into a set
```

Create a function that sorts an array and removes all duplicate items from it.

```js
set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

set([4, 4, 4, 4]) ➞ [4]

set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
```

### 11. Find Numbers with Even Number of Digits

Given an array _nums_ of integers, return how many of them contain an even number of digits.

```js
findEvenNumberOfDigits([12, 234, 2, 6, 7896]); // 2
/* 
    Explanation:
        12 contains 2 digits ( even number of digits ).
        345 contains 3 digits ( odd number of digits ).
        2 contains 1 digit ( odd number of digits ).
        6 contains 1 digit ( odd number of digits ).
        7896 contains 4 digits ( even number of digits ).

        Therefore only 12 and 7896 contain an even number of digits.
    */

findEvenNumberOfDigits([555, 901, 482, 1771]); // 1 ( Only 1771 contains an even number of digits )
```




### 12. Sock Merchant

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are **_n = 7_** socks with colors **_arr = [1, 2, 1, 2, 1, 3, 2]_** . There is one pair of color **_1_** and one of color **_2_**. There are three odd socks left, one of each color. The number of pairs is **_2_**.

**Function Description**

Complete the **sockMerchant** function in the editor. It must return an integer representing the number of matching pairs of socks that are available.

**sockMerchant** has the following parameter(s):

- **_n_**: the number of socks in the pile
- **_arr_**: the colors of each sock

**Input Format**

The first line contains an integer **_n_**, the number of socks represented in **_arr_**.

The second line contains **_n_** space-separated integers describing the colors **_arr[i]_** of the socks in the pile.

**Sample Input**

```js
    let n = 9;
    let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    function sockMerchant(n, arr) {
        result = // Do something
        return result;
    }
    // output is 3
```


**Explanation**

![sock.png](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png)

John can match three pairs of socks.

### 13. Chunk An Array

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

**chunk()** has the following parameter(s):

- **_arr_**: An array containing as many elements as you want
- **_size_**: Is the length of each sub-array that you want to chunk


```js
    chunk([10, 20, 20, 10, 10, 30, 50, 10, 20],3) ➞ [[10, 20, 20], [10, 10, 30], [50, 10, 20]]
```
