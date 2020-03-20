# How JS Works?
- JS Engine
- Syntax parser
- Lexical environment
- Execution context
- Execution Stack
- Global environment
- Scope chain
- Coercion
- Operator Precedence and Associativity
- Reference Variable & primitive
- this
- Closures & callback
- Everything is an Object (Or a primitive)
- argument & spread operator
- Event queue
- Functional programming
- Object-oriented programming

**JS Engine**

**Syntax parser** - a program that reads your code and determines what it does and if its grammar/syntax is valid.

**Lexical environment** - where something sits physically in the code you write and what surrounds it. In JavaScript where you write something is important.

**Execution context** - a wrapper to help manage the code that is running. There are lots of lexical environments, areas of the code that you look at physically, but which one is currently running is managed via execution contexts. Execution context contains your running code, but it can also contain things beyond what you've written in your code. Because remember that your code is being translated by a syntax parser. That mean whenever you invoke a function. It create a new execution context and then put it in to call Stack (aka **Execution Stack**)- **where latter code will be executed then the sooner**

**Global environment** - Remember Execution Stack above? When you write your code, you may invoke function many times. When an function was invoked, it automatically create new Execution Context (or environment) called **inner environment** and refer to the outer function called **outer environment**. The most outer environment is **Global environment** (aka **Global execution context**)

**Scope chain** - If JavaScript engine doesn't find variable in it's own environment it looks in the outer environment. That whole process of searching of variable in outer lexical environments down the chain is called the scope chain.
```javascript
function a() {
    function b() {
        console.log(myVar);
    }

	b();
}

var myVar = 1;
a();
```
Global -> a -> b so scope chain is b -> a -> Global
```javascript
function a() {
    var myVar = 10
    function b() {
        console.log(myVar);
    }
	b();
}

var myVar = 1;
a();
```
Global -> a -> b so scope chain is b -> a

**Coercion** When you compare 2 or more values by operators following (==,>=,<=,>,<,!), JS engine always do coercion, which mean convert 2 or more operand to 1 data type and then compare it (not with === )

**Operator Precedence & Associativity** - Associativity means the order of which side should be done first (left or right) when operator share the same Precedence. Precedence means which kind operator should be done first. Check the table

**Reference Variable & primitive** are 2 kind of variable existing in JS. Primitive create Reference type. Typically, Pokemon was create Number & String & Another Object
```javascript
var pokemon = {
    name: "Pikachu",
    stats:{
        hp: 100,
        level :50,
        attack:86,
        spattack:150,
        speed:5000000000,
        belongTo:"Red"
    },
}
```
When a property of an object was create, actually create a variable and then link it to that object's properties. Base on this way, as long as you have enough memory, you can add property into objects.
The only thing make confusion here is comparison.

```javascript
var myObj = {
  name:"Ash",// create a anonymous string variable and then link it to "name" property
  pokemon:"Pikachu",//also do that
  badges:{//create object variable
    rock:1,//in the created obj, then create a new variable and link it to created object (badges)
    water:1,//so on
    psychic:0//move on
  }
}
```
When you do a comparison between an object. === show you 2 or more values refer to the same anonymous source or not. If not,is false whatever the values
```javascript
var yourObj = {
  name:"Ash",
  pokemon:"Pikachu",
  badges:{
    rock:1,
    water:1,
    psychic:0
  }
}
// urObj exactly look likes myObj but actually no(at least with === operator)
console.log(myObj === yourObj)// false
var ourObj = myObj;// refer to myObj
console.log(ourObj = myObj)//true
```
By the way, any changes you applying to ourObj also make the same affect with myObj(which was refer to)

**this** - Know enough about Execution context right?
**this** is special object **always** refer to **present** execution context or object  


**Closures**
When a function runs and completes it is removed from execution stack, but variables created and saved in that execution phase are still stored in memory and can be accessed from down the scope.
```javascript
function greet(whattosay) {
   return function(name) {
	   console.log(whattosay + " " + name;
   }
}
var sayHi = greet('Hi');
sayHi('Jason');
```

Inside the variable `sayHi` we run greet function which returns another function and passes string 'Hi'. After that functions is finished and it is popped from the execution stack. But `whattosay` variable still sits saved in the memory with a value Hi. So when we call function `sayHi` it will go in the outer environment and look for `whattosay` variable and will find it and log `"Hi Jason"`. We describe this proccess as execution context has closed in outer variables.

Pay attention when functions are executed to understand where it will look for variables down the scope chain.

**Callback** function - a function you give to another function to be run when the other function is finished(or Event queue).

**Everything is an Object (Or a primitive)**
