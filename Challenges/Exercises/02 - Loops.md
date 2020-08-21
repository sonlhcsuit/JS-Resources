# ***Loops*** 
_____________________________________________________________
> ### Right-angled triangle
Write a loop that makes seven calls to *console.log* to output the following triangle:
\#  
\#\#  
\#\#\#  
\#\#\#\#  
\#\#\#\#\#  
\#\#\#\#\#\#  
\#\#\#\#\#\#\#  

> ### Fizz Buzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

> ### Chessboard
Write a program that creates a string that represents an n×n grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.This is an example of 8x8 chessboard:   
\#\*\#\*\#\*\#\*  
\*\#\*\#\*\#\*\#  
\#\*\#\*\#\*\#\*  
\*\#\*\#\*\#\*\#  
\#\*\#\*\#\*\#\*  
\*\#\*\#\*\#\*\#  
\#\*\#\*\#\*\#\*  
\*\#\*\#\*\#\*\#   

> ### Panlindrome checker

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

> ### Junction or Self?
In this challenge, you have to separate integers into two families, establishing if they are Junction Numbers or Self Numbers. Given a positive number `n`:

If exists at least a single number which added to the sum of its digits is equal to `n`, then `n` is a Junction Number.

If there are not numbers which added to the sum of their digits are equal to `n`, then `n` is a Self Number.

Given a positive integer `n`, implement a function that returns:

The string "Self" if n is a Self Number.
If n is a Junction Number an array, ordered descendingly, containing the numbers which generate n.

```js
junctionOrSelf(25) ➞ [17]
// If we add 17 to the sum of its digits...
// ...17 + 1 + 7 = 25
// 25 is a Junction Number

junctionOrSelf(818) ➞ [805, 796]
// If we add 805 to the sum of its digits...
// ...805 + 8 + 0 + 5 = 818
// If we add 796 to the sum of its digits...
// ...796 + 7 + 9 + 6 = 818
// 818 is a Junction Number

junctionOrSelf(7) ➞ "Self"
// 1 + 1 = 2
// 2 + 2 = 4
// 3 + 3 = 6
// No number added to its own digits is equal to 7
// 7 is a Self Number
```

As in example #3, the sum of the digits of a positive integer lower than 10 is equal to that same integer.

By the formal definition, a Junction number must have at least two other numbers that generate it, so that the Instructions are to be considered valid only for this specific challenge.

> ### Morse Code Decoded
Create a function that takes a string (morse code) as an argument and returns an unencrypted string.

```js
decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"

decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"
```
The following object can be used for coding:
```js
morseToDots = {
  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  ".-.-.-":".", ".----.":"\"", "---..." :":", "--..--":", ", " ":""
}
```

> ### Creating a Picture Frame
Create a function that takes the width, height and character and returns a picture frame as a matrix.

```js
getFrame(4, 5, "#") ➞ [
  ["####"],
  ["#  #"],
  ["#  #"],
  ["#  #"],
  ["####"]
]
// Frame is 4 characters wide and 5 characters tall.

getFrame(10, 3, "*") ➞ [
  ["**********"],
  ["*        *"],
  ["**********"]
]
// Frame is 10 characters and wide and 3 characters tall.

getFrame(2, 5, "0") ➞ "invalid"
// Frame"s width is not more than 2.
```

> ### Magic Sigil Generator
A magic sigil is a glyph which represents a desire one wishes to manifest in their lives. There are many ways to create a sigil, but the most common is to write out a specific desire (e.g. "I HAVE WONDERFUL FRIENDS WHO LOVE ME"), remove all vowels, remove any duplicate letters and then design a glyph from what remains.

Using the sentence above as an example, we would remove duplicate letters:
 
AUFRINDSWHLOVME  
And then remove all vowels, leaving us with:

FRNDSWHLVM  
Create a function that takes a string and removes its vowels and duplicate letters. The returned string should not contain any spaces and be in uppercase.

```js
sigilize("i am healthy") ➞ "MLTHY"

sigilize("I FOUND MY SOULMATE") ➞ "FNDYSLMT"

sigilize("I have a job I enjoy and it pays well") ➞ "HVBJNDTPYSWL"
```

> ### Digital Egomania: the Self-Describing Numbers
In this challenge, you have to establish if a given number is self-describing. To be self-describing, a positive number must have an even quantity of digits, because it has to be split into separated pairs of adjacent digits x and y, and each pair can be interpreted as a declaration: among the digits of the number, there are x instances of the digit equal to y.

If we take as an example the self-describing number 10123331, we can see how it has an even quantity of digits and it can be split into four pairs:

[1, 0] ➞ This pair declares that among the digits of the number there is 1 instance of 0
[1, 2] ➞ This pair declares that among the digits of the number there is 1 instance of 2
[3, 3] ➞ This pair declares that among the digits of the number there are 3 instances of 3
[3, 1] ➞ This pair declares that among the digits of the number there are 3 instances of 1
If every "declaration" represented by the pairs is true (as in the above example), then the number is self-describing.

Given a non-negative integer num, implement a function that returns true if num is a self-describing number, or false if it's not.

```js
isSelfDescribing(10123331) ➞ true
// See the Instructions

isSelfDescribing(224444) ➞ true
// Pair [2, 2] is true (two times 2 into num)
// Pair [4, 4] is true (four times 4 into num)
// Pair [4, 4] is true (same as previous)

isSelfDescribing(2211) ➞ false
// Pair [2, 2] is true (two times 2 into num)
// Pair [1, 1] is false! It declares: one time 1 into num...
// ...but 2211 has two instances of 1 among its digits

isSelfDescribing(333) ➞ false
// Odd quantity of digits, it can't be splitted
```

Notes  
Pairs can be repeated (see example #2), but they have to be true in any case.
Remember to consider the totality of the digits of the number, when checking if a pair represents a true declaration (see example #3).
You can expect always valid non-negative integers as input.

> ### Check Magic Square
A "magic square" is a square divided into smaller squares each containing a number, such that the numbers in each vertical, horizontal, and diagonal row add up to the same value.

3x3 Magic Square   
<img src="https://edabit-challenges.s3.amazonaws.com/3x3magicsquare.png">

Write a function that takes a 2D array, checks if it's a magic square and returns either true or false depending on the result.

```js
isMagicSquare([
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2]
]) ➞ true

isMagicSquare([
  [16,  3,  2, 13],
  [ 5, 10, 11,  8],
  [ 9,  6,  7, 12],
  [ 4, 15, 14,  1]
]) ➞ true

isMagicSquare([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ false
```
Check diagonals as well.
Test input will always be square.
Check the Resources tab for additional info on magic squares.





