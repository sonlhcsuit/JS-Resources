# Problems Solving
__________________________
> ### Distance to Nearest Vowel
Write a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

```js
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
```
```js
function distanceToNearestVowel(strg){
    return []
}
```

> ### Polybius Square (Basic)
The Polybius Square cipher is a simple substitution cipher that makes use of a 5x5 square grid. The letters A-Z are written into the grid, with "I" and "J" typically sharing a slot (as there are 26 letters and only 25 slots).

|s  |1  |2  |3  |4	|5  |  
|---|---|---|---|---|---|
|1	|A	|B	|C	|D	|E
|2	|F	|G	|H	|I/J|K
|3	|L	|M	|N	|O	|P
|4	|Q	|R	|S	|T	|U
|5	|V	|W	|X	|Y	|Z


To encipher a message, each letter is merely replaced by its row and column numbers in the grid.

Create a function that takes a plaintext or ciphertext message, and returns the corresponding ciphertext or plaintext.

```js
polybius("Hi") ➞ "2324"

polybius("2324  4423154215") ➞ "hi there"

polybius("543445 14343344 522433 21422415331443 52244423 4311311114") ➞ "you dont win friends with salad"
```

Hint:   
As "I" and "J" share a slot, both are enciphered into 24, but deciphered only into "I" (see third and fourth test).


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





