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
- Hoisting nghĩa là kéo lên, các bạn sẽ bắt gặp tình huống này khi thực hiện việc declaration biến (khi sử dụng từ khoá "var"), hàm.
- JS đảm bảo rằng toàn bộ quá trình Instantiation của các biến đều được diễn ra.
- Giá trị mặc định của các biến là undefined
- Điều này cũng đúng với function declaration, luôn được hoisting để khởi tạo trước, nhằm đảm bảo rằng hàm chạy tốt, tránh trường hợp gặp lỗi (not defined)

```js

var myvar = 'some string value'

// Đây là một ví dụ về việc khai báo biến gồm : Instantiation & Initialization
// Instantiation : Khởi tạo ô nhớ, vùng nhớ để lưu trữ giá trị, mặc định giá trị của ô nhớ mà JS quyết định là undefined!
// Initialization: Gán giá trị khởi tạo trực tiếp vào ô nhớ ngay lập tức khi quá trình Instantiation thực hiện xong! Có thể hiểu quá trình này giống như là assignment

```
- Vậy hoisting có lợi ích và tác hại gì?
- Lợi ích:
    - Đảm bảo tất cả các biến đều có tồn tại trước khi bắt đầu thực hiện chương trình, tránh lỗi **not define** xảy ra
- Tác hại:
    - Khó kiểm soát flow, đôi khi gây rắc rối về ghi đè biến, khó debug, ...

```js
love()
var love = 'Hehe'
love()

function love(){
    console.log('Hihi')
}

// Trường hợp như thế này thì sao? màn hình console của bạn sẽ là gì?

```
- Cách giải quyết trường hợp này là sử dụng từ khoá **let**, **const** thay vì **var** để khai báo biến. Vì như thế này sẽ báo lỗi, dễ dàng trong việc debug và kiểm soát
- Sử dụng function expression để khai báo hàm (optional), tránh hoisting

---

## Callback

---
## Exercise:

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Glossary/Function
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
