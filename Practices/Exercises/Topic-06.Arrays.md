# **_Array_**

---

### 1. Pocket Monster Lover
Create an array

```javascript
var Pokemon = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
];
```

- Log the [pokemon](https://www.google.com/search?q=charizard&sxsrf=ALeKk004lamleLUUjwsSO8vosEKRKDCIeQ:1616066693955&tbm=isch&source=iu&ictx=1&fir=cUg6N8cnnrgT4M%252CbdloXBKw2prMrM%252C%252Fm%252F09l5c&vet=1&usg=AI4_-kTDJj9tvKFtu6DECoXoCgCDpL2S0Q&sa=X&ved=2ahUKEwjYr-fJ3bnvAhVIQd4KHVtADHQQ_B16BAg3EAE#imgrc=5ZJzH6jPpyGYYM) which can fly and use fire 
- Remove the *rattata* out of the array and add *pikachu* at last of array
- Add 1 *Meow 2* to the head of the array

--- 

### 2. Outlier Number
Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number. Create a function to return this number.

```js
outlierNumber([2, 3, 4]) ➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.

outlierNumber([1, 2, 3]) ➞ 2

outlierNumber([4, 1, 3, 5, 9]) ➞ 4
```

Notes:
- Array size will always be >=3.

### 3. Return Types
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

### 4. Unique element

Write a JavaScript function to find the unique elements from two arrays

```javascript
function difference(arr1,arr2) {
  return arr;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]
```

---

### 5. DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the remain DNA.
Base pairs are a pair of A-T and C-G. Match the missing element to the provided character.

```javascript
function pairElement(str) {
  return str;
}
pairElement("GCG"); //CGC
```

---

### 6.Sum of Minimums
Create a function that takes a 2D array arr returns the sum of the minimum value in each row.
```js
sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20
```

---

### 7.Sum of Minimums 2
Create a function that takes a 2D array arr returns the sum of the minimum value in each column.
```js
sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
]) ➞ 15

// minimum value of the each column are 1,2,3,4,5

```

---


### 9. Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```javascript
function diffArray(arr1, arr2) {
  var newArr = [];
  return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```



### 10. Tuck in Array
Create a function that takes two arrays and insert the second array in the middle of the first array.

```js
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
```

Notes  
- The first array always have **two** elements.

### 11. Saler
- Make a programma with C(reate) R(ead) U(pdate) D(elete) support clothing stores 
![requirement](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/array/array_ex.png?raw=true)
