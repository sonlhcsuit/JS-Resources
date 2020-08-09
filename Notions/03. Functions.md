## Functions and Methods
Functions or methods give us a way to structure programs appropriately.  
They help us write code shorter, reuseable, less-repetion, adaptive, isolative,...  
Function is a way to make input to ouput. Name(binding,word) is not required.
> ### Defining
Using an identifier (name, word, binding, variable ,ie..) and the *function* - keyword to *bind* an anonynous function to a indetifier
```js
let myFunc = function(){ // -> anonymous function
    // Do something
}
```
```js
let myFunc2 = function(X){//-> anonymous function with X as parameter
    // Do something with X - which we were given to get Output
}
```
> ### Declaration
There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently - Hoisting
```js
function myFunc(){ // -> anonymous function
    // Do something
}
```
```js
function myFunc2(X){//-> anonymous function with X as parameter
    // Do something with X - which we were given to get Output
}
```
> ### Arrow Function
Instead using ```function``` keyword, it uses arrow symbol ```=>``` to create a ```function```. It is similar to defining a function through a binding(variable, name, word, etc).
```js
let myFunc = ()=>{ // -> anonymous function
    // Do something
}
```
```js
let myFunc2 =(X)=>{//-> anonymous function with X as parameter
    // Do something with X - which we were given to get Output
}
```
When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:
```js
let MySquare = (x) => { return x * x; };
let MySquare2 = x => x * x;
```
> ### return 
Do you see ```return``` keyword in ```MySquare```?
Why we use that keyword? What is it purpose?  
Some functions need to produce a value, such as ```Mysquare```,some don't. A ```return``` keyword used to determine the value the function returns.  
When control come across ```return``` keyword, it immediately jumps out of the current function and gives the returned value to the code which ```call``` or ```invoke``` this functions.
> ### Scope
Each binding (variable, name, word, etc...) has a ```scope```, in which it is available(can use the name to get the value). The biggest one is ```global```, and others are ```local```
When ```call``` or ```invoke``` function, all local bindings(variables, names, words, etc) were created - and they are available only new scope created by function.
> ### parametter/arguments
Remember how to write an function?
```js
function greetings(name){ // -> name is a parameter
    console.log(`Hello ${name}`)// 'this' name is available in greetings scope
}
let name = `Michelle`
greetings(name) // -> name is an arguments 
```
While creating funtions, we may need to deal with some values - input. And parameters are things which we were given!   

While invoking functions, we may need to supply functions some value required. And arguments are things we giving to functions.

**Optional Arguments**  

For example, a function ```multiple``` need 2 parameters ```x``` and ```y``` to peform ```x*y``` and returning value. But, is this okay if we do something like that?
```js
function multiple(x,y){
    return x*y
}
multiple(2,3,4,5,6)
```
Our multiple function just cares about x and y, which is 2 and 3 respectively. But what is happen with 4, 5, and 6? Nothing!  

-> You can give (```pass```) lot of arguments while invoking function, no matter.

But we wanna do an expression such as ```2*3*4*5*6```. Do we need to write another function like ```multiple6facto(x,y,a,b,c,d)```?   

No! We have a way to control all arguments given (or passed) through an ```arguments``` binding - an array. 
```js
function multiple(){
    let product = 1
    for (argument of arguments ){
        product = product * argument 
    }
    return product;

}
multiple(2,3,4,5,6)// works
multiple(2,3)//works too
```
> ### Call Stack
When invoking a funtion, a lot of things get involved to that call. There must be a way to control the running flow of programs.   
Which does line of codes run first? How the machine knows it?   
```return``` keyword is a mechanism to solve this problem. Each time a function is invoked, this function runs until it met ```return``` or out of scope.   
More infomation at recursive. 

<img src='https://i.ytimg.com/vi/2ZH_1d8TYVg/maxresdefault.jpg'> 

> ### Recursive
A function calls itself.Recursion allows some functions to be written in a different style. *Recursive* is a kind of loops. But with typical JS implementation, recursive is slower than  `for` loop.  
```js
function power(base, exponent) {
   if (exponent == 0) {
    return 1;
    } else {
    return base * power(base, exponent - 1); 
    }
}
console.log(power(2, 3));
```
> ### Closure 


<img src='https://i.redd.it/gzbjmf85emay.png'>

In summary, if a function(inner function) is created inside another function (outer function), inner function or sub function have the right to access all bindings of outer function. Even when sub function is returned, it still has involved with outer function. 
Example:
```js
function say(message){
    return (name)=>{
        console.log(`${message} ${name}!`)
    }
}
let greet = say("Hello")
greet("Son")
// Hello Son 
```

> ### Growing
One funtion should has one work. It helps you write more reusable code, meaning less bug appearing in the future.
