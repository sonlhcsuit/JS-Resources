## ***Regular Expression*** 

> ### Remove Trailing and Leading Zeros
Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

**Trailing Zeros** are the zeros after a decimal point which don't *affect* the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
>removeLeadingTrailing("230.000") ➞ "230"  
removeLeadingTrailing("00402") ➞ "402"  
removeLeadingTrailing("03.1400") ➞ "3.14"  
removeLeadingTrailing("30") ➞ "30"
 
---------------------
If you get a number with .0 on the end, return the integer value (e.g. return `4` rather than "4.0").
If the number is 0, 0.0, 000, 00.00, etc... return `0`.

```js
function removeLeadingTrailing(number) {
	
}
```

> ### Prefixes vs. Suffixes
Create two functions: `isPrefix(word, prefix)` and `isSuffix(word, -suffix)`.

`isPrefix` should return true if it begins with the prefix argument.
`isSuffix` should return true if it ends with the suffix argument.
Otherwise return false.

isPrefix("automation", "auto-") ➞ true

isSuffix("arachnophobia", "-phobia") ➞ true

isPrefix("retrospect", "sub-") ➞ false

isSuffix("vocation", "-logy") ➞ false

The prefix and suffix arguments have dashes `-` in them.
```js
function isPrefix(word, prefix) {
	
}

function isSuffix(word, suffix) {
	
}
```

> ### Strip URL Query Parameters

Create a function that takes a URL (string), removes duplicate query parameters and parameters specified within.

>stripUrlParams("https://edabit.com?a=1&b=2&a=2") ➞ {"a":2,"b":2}
```js
function stripUrlParams(url, paramsToStrip) {
	
}
```

> ### KixCodes
KixCodes, it's a fast way to deliver letters and packages that can be scanned during the process.

Kix Code

The code is a combination of: Postal code, House/box/call number and House appendage / suffix

If there is a character between the house number and the suffix, we need to replace that with an X. Eventually, the code will be printed in the KixCode font.

Examples
```js
kixCode(`PostNL, Postbus 30250, 2500 GG ’s Gravenhage`) ➞ `2500GG30250`

kixCode(`Liesanne B Wilkens, Kogge 11-1, 1657 KA Abbekerk`) ➞ `1657KA11X1`

kixCode(`Dijk, Antwoordnummer 80430, 2130 VA Hoofddorp`) ➞ `2130VA80430`
```
```js
```

> ### Unravel all the Possibilities

Unravel all the Possibilities
Write a function that takes in a string and returns all possible combinations. Return the final result in alphabetical order.

```js
unravel("a[b|c]") ➞ ["ab", "ac"]

unravel("a[b|c]de[f|g]") ➞ ["abdef", "acdef", "abdeg", "acdeg"]

unravel("a[b]c[d]") ➞ ["abcd"]

unravel("a[b|c|d|e]f") ➞ ["abf", "acf", "adf", "aef"]

unravel("apple [pear|grape]") ➞ ["apple grape", "apple pear"]

```

Think of each element in every block (e.g. [a|b|c]) as a fork in the road.

```js
function unravel(mystring){
    return ""
}
```

Create a function that returns true if two lines rhyme and false otherwise. For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.

```js
doesRhyme("Sam I am!", "Green eggs and ham.") ➞ true

doesRhyme("Sam I am!", "Green eggs and HAM.") ➞ true

doesRhyme("You are off to the races", "a splendid day.") ➞ false

doesRhyme("and frequently do?", "you gotta move.") ➞ false
```

```js
function doesRhyme(string_a,string_b){
    return true
}
```