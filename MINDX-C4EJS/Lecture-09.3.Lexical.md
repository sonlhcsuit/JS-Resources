# Lexical
## Scope & Lexical environment
- Scope là một khái niệm rất quan trọng trong các ngôn ngữ lập trình, vì nó định ra một khu vực code riêng. Nhằm xác định tính khả dụng (visibility) của một identifier

- Có thể hiểu rằng: Một chương trình (project) của bạn có thể là một căn nhà, mỗi phòng là một khu vực riêng (mọi người trong gia đình,...). Đồ vật cá nhân trong mỗi căn phòng (identifier) thuộc quyền sở hữu của một nguời. Ngoài ra thì mọi người có thể sử dụng những đồ vật chung trong nhà (bếp, tủ lạnh,...)

- Mỗi người ngoại trừ việc sử dụng đồ cá nhân của mình thì còn có thể sử dụng các đồ vật chung. Nhưng đồ cá nhân của mình thì người khác không dùng được

- Một identifier ở mỗi scope cụ thể nhau thì không thể được sử ở scope khác. 

- Identifier must be unique (một biến phải độc lập) đúng với mỗi scope khác nhau

- Trong JS, một scope được xác định bởi cặp dấu ngoặc nhọn (curly brackets) **{}**
```js

if (){
    // It is a scope
} else{
    // It is another scope
}

```

- Một điều khá thú vị rằng là khi **khai báo hàm**, ta không gọi đó là scope mà sử dụng một cái tên hay ho hơn: **lexical environment** 
```js
function myFunction(){
    // It is not only scope but also lexical environment
    let age = 12
    if (true){
        // Just scope
        console.log(age)
    }

}
```
- Trong một scope nhỏ, ta có thể truy cập đến một identifier của outer scope (scope lớn hơn). Nhưng từ scope lớn ta **không thể** truy cập tới identifider ở bất kỳ inner scope (scope nhỏ hơn)
- Quan sát một vài ví dụ sau:

```js
function myFunction(){
    let age = 12
    if (true){
        console.log(age)
        // console : 12
    }
}
```

```js
function myFunction(){
    let age = 12
    if (true){
        let age = '?'
        console.log(age)
        // console : ?
    }
}
```

```js
function myFunction(){
    let age = 12
    if (true){
        let age = '?'
        console.log(age)
        // console : ?
    }
}
```

```js
function myFunction(){
    // It is not only scope but also lexical environment
    let age = 12
    if (true){
        // Just scope
        let age = '?'
        console.log(age)
        // console : ?
    }
}
```


```js
function myFunction(){
    if (true){
        let age = '?'
        console.log(age)
        // console : ?
    }
    console.log(age)
    // console : 'Error' :age is not defined
}
```

---

## Scope Chain (Identifier chain, variable chain)
- Khi một hàm được gọi (invoke, call,..), hoặc khi một biến được truy cập thì sẽ có các quy tắc sau để tìm kiếm các identifier phù hợp. Các quy tắc cơ bản để tuân theo đã được đề cập ở trên (outer & inner scope). Tuy nhiên vẫn còn một số điểm cơ bản phải chú ý.

- Khi khai báo identifier thì identifier sẽ được binding (gắn liền ) với scope ở đó. Và JS sẽ sử dụng scope (hoặc lexical) đó đành cho việc xác định các identifier. Có thể tham khảo rõ hơn về **Execution Environment**

```js
let val = 'hola'
function myf1(){
    console.log(val)
}
function myf2(){
    console.log(val)
}
myf1()  
myf2() 

// hola
// hola
```

```js
let val = 'hola'
function myf1(){
    let val = 'bonjour'
    console.log(val)
}
function myf2(){
    console.log(val)
}
myf1()  
myf2()  
// bonjour
// hola
```

```js
let val = 'hola'
function myf1(){
    let val = 'bonjour'
    console.log(val)
    function myf2(){
        console.log(val)
    }
    myf2() 

}

myf1()  
// bonjour
// bonjour
// Hàm myf2 được khai báo ở trong hàm myf1, nên khi scope chain outer là myf1 mà không phải global, nên JS sẽ truy xuất ở outer lexical myf1 trước global
// Ở ví dụ 1,2 thì hàm myf2 được khai báo ở lexical global nên scope chain sẽ truy xuất ở global, mặc dù hàm myf2 được gọi trong hàm myf1 
```

---

## Returned Function
- Hàm có thể được xem là một loại data types (kế thừa từ object), cho nên cũng có thể được trả về từ một hàm khác, hoặc khai báo thông qua function expression
- Có một function expression đơn giản được gọi là arrow function - Giúp tiết kiệm thời gian code (ngắn gọn, dễ đọc hiểu)

```js
function createPromotion(discount){
    return function (price){
        return (price * discount / 100).toFixed(2)
    }
}

let discount50 = createPromotion(50)
let newPrice = discount50(150)
// 75.00

```
- Khả năng ghi nhớ giá trị discount của hàm được trả về được gọi là Closure
---

## Exercise:

---

## Reference & More Resources: 
* https://en.wikipedia.org/wiki/Scope_(computer_science)
* https://stackoverflow.com/questions/12599965/lexical-environment-and-function-scope
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures