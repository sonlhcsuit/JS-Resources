# ***Array, Object and Callback***
_____________________________
> ### Pocket Monster Lover 
Create an array

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
```

* Print the pokemon which can fly and use fire
* Remove the rat out of the array and add pikachu at last of array
* Add 1 Meow 2 to the head of the array

> ### Saler 

![requirement](https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/images/array/array_ex.png?raw=true)

> ### Higher Order Functions and Callback 

``` javascript
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.map()
Pokemon.filter()
Pokemon.reduce()
Pokemon.forEach()
```

> ### Sock Merchant

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


> ### Your onw HOFs 

``` javascript
Array.prototype.myMap = function(callback) {
    var newArray = [];
    // Only change code below this line

    // Only change code above this line
    return newArray;
};
```

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


> ### Unique element

Write a JavaScript function to find the unique elements from two arrays

``` javascript
function difference(arr) {
    return arr;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]
```


> ### Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

``` javascript
function diffArray(arr1, arr2) {
    var newArr = [];
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
```

> ### DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the remain DNA.
Base pairs are a pair of A-T and C-G. Match the missing element to the provided character.

``` javascript
function pairElement(str) {
    return str;
}
pairElement("GCG"); //CGC
```

> ### Sum All Odd Fibonacci Numbers

Given a positive integer `num` , return the sum of all odd Fibonacci numbers that are less than or equal to `num` .

The first two numbers in the Fibonacci sequence are `1` and `1` . Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return 10 because all odd Fibonacci numbers less than or equal to 10 are `1` , `1` , `3` , and `5` .

``` javascript
function sumFibs(num) {
    return num;
}
sumFibs(4000000); //4613732
```
