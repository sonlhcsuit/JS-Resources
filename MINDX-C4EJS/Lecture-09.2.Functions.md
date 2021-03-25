# Function
## Function
- Function là một đoạn code ngắn, có thể sử dụng để thực thi một tác vụ nào đó tại ở một đoạn code khác hoặc chính trong bản thân nó. Tuỳ thuộc vào tác vụ mà lập trình viên muốn định ra sẽ khai báo function như thế nào
- Về cơ bản function có 2 loại như sau

```js
function myfunction(args){
    // function body
}
// Đây được gọi là function declaration

(function myf(args){
    // function body
})
// Đây được gọi là function expression - named!
(function (args){
    // function body
})
// Đây cũng được gọi là function expression - anonymous!
```
- Sự khác biệt cơ bản nhất của 2 loại function declaration và function expression chính là hoisting ! 
- Function expression thì có các tính chất như một expression vậy, sau khi được thực hiện xong thì biến mất (không nếu muốn lưu lại thì phải sử dụng biến để lưu trữ giá trị - function cũng được xem là 1 kiểu dữ liệu trong javascirpt - reference type!)
- Named function expression thì tên hàm chỉ là để phân biệt, không có tác dụng lưu lại để tái sử dụng, phải sử dụng biến - chính xác hơn là identifier
```js
const myf = (function value() {
        console.log('this is value named function expression')
})
console.log(myf)
value() // value is not defined!

```
```js
const myf = (function () {
        console.log('this is value anonymous function expression')
})
console.log(myf)
```
- Khi khai báo 1 hàm sử dụng function expression như 2 trường hợp trên thì có thể bỏ qua cặp dấu ngoặc đơn!

---

## Hoisting

---

## Callback

---
## Exercise:


---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
