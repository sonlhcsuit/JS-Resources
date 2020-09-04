# ***Array***
_____________________________
> ### 1. Pocket Monster Lover 
Create an array

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
```

* Print the pokemon which can fly and use fire
* Remove the rat out of the array and add pikachu at last of array
* Add 1 Meow 2 to the head of the array

> ### 2. Saler 

![requirement](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/array/array_ex.png?raw=true)


> ### 3. Sock Merchant

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are ***n = 7*** socks with colors ***arr = [1, 2, 1, 2, 1, 3, 2]*** . There is one pair of color ***1*** and one of color ***2***. There are three odd socks left, one of each color. The number of pairs is ***2***.

**Function Description**

Complete the **sockMerchant** function in the editor. It must return an integer representing the number of matching pairs of socks that are available. 

**sockMerchant** has the following parameter(s):
* ***n***: the number of socks in the pile
* ***arr***: the colors of each sock

**Input Format**

The first line contains an integer ***n***, the number of socks represented in ***arr***.

The second line contains ***n*** space-separated integers describing the colors ***arr[i]*** of the socks in the pile.

**Sample Input**

``` javascript
    let n = 9;
    let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    function sockMerchant(n, arr) {
        result = // Do something
        return result;
    }
```
**Sample Output**

```
    3
```

**Explanation**

![sock.png](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png)

John can match three pairs of socks.


> ### 4. Chunk An Array

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

**chunk()** has the following parameter(s):
* ***arr***: An array containing as many elements as you want
* ***size***: Is the length of each sub-array that you want to chunk

**Sample Input**

``` javascript
    let size = 3;
    let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];
    function chunk(arr, size) {
        result = // Do something
        return result;
    }
```

**Sample Output**

```
   result = [[10, 20, 20], [10, 10, 30], [50, 10, 20]]
```


> ### 5. Unique element

Write a JavaScript function to find the unique elements from two arrays

``` javascript
function difference(arr) {
    return arr;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]
```


> ### 6. Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

``` javascript
function diffArray(arr1, arr2) {
    var newArr = [];
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

> ### 7. DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the remain DNA.
Base pairs are a pair of A-T and C-G. Match the missing element to the provided character.

``` javascript
function pairElement(str) {
    return str;
}
pairElement("GCG"); //CGC
```

> ### 8. Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

```js
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
```

Notes  
The first array always have **two** elements.

> ### 9. Even All the Way
Given an array of numbers, return an array which contains all the even numbers in the orginal array, which also have even indices.

```js
getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ []
```

Notes  
Arrays start at index 0.

> ### 10. Transform into an Array with No Duplicates
A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.
```js
[1, 3, 3, 5, 5, 5]
// original array

[1, 3, 5]
// original array transformed into a set
```
Create a function that sorts an array and removes all duplicate items from it.

```js
set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

set([4, 4, 4, 4]) ➞ [4]

set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]

set([3, 3, 3, 2, 1]) ➞ [1, 2, 3]
```

# ***Object***

> ### Pocket Monster Lover 2 

``` javascript
var pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
var pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"]
```

* Speed is wrong, fix it (reduce to 60)
* Pikachu has no skill, he can't handle a battle. Help him by add `pikachuSkill` to Pikachu as `skill` property
* Delete `belongto` property


> ### Gaming

![abc](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/object/object_ex.png?raw=true)

* Add `pocket` - an array `"seashell", "strange berry", và "lint".` 

* delete `dagger` in `backpack` .

* add 50 gold

* delete all infomation about pouch.

> ### Get Sum of People's Budget
Create the function that takes an array with objects and returns the sum of people's budgets.

Examples
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600

> ### Distance Between Two Points
In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.

<img src="../../sources/coordinateplane26.png">

Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.

```js
getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325

getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414

getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

```

Notes   
The "distance" is the shortest distance between the two points, or the straight line generated from a to b.

> ### Printer Levels
Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

```js
inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}) ➞ 10

inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}) ➞ 432

inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}) ➞ 0
```

Notes  

A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).

> ### International Greetings
Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
```js
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
```
Write a function that takes in a name and returns a name tag, that should read:

"Hi! I'm [name], and I'm from [country]."
If the name is not in the object, return:

"Hi! I'm a guest."
```js

greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."
```
> ###

> ###
> ###
> ###

# ***Callback***
> ### Your onw HOFs 

``` javascript
Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line

    // Only change code above this line
    return newArray;
};
```



> ### Higher Order Functions and Callback 

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.map()
Pokemon.filter()
Pokemon.reduce()
Pokemon.forEach()
```