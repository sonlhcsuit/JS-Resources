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

## Parameters & Arguments
- Một dạng chuẩn của việc khai báo hàm là như thế này
```js
// function declaration
function functionName (params,params){
    // function body
    return 
} 
// function invocation
functionName(args,args)

```
- Function mặc định sẽ có giá trị trả về là **undefined**, ta có thể sử dụng từ khoá **return** để trả về giá trị do chúng ta xác định. Gía trị trả về là giá trị bạn nhận được khi một lời gọi hàm hết hiệu lực (kết thúc)

- Khi khai báo function, bạn phải xác định các parameter dành cho hàm - tức là input mà hàm nhận được là gì. Bạn sẽ đặt identifier cho input các bạn nhận được. Việc đặt tên này giống như đặt tên biến. Tuỳ ý nhưng phải tuân theo quy tắc.

- Khi gọi hàm, bạn phải truyền vào các arguments (cung cấp input) bằng việc chỉ định rõ giá trị mà hàm sẽ nhận được thông qua **value** hoặc **identifier**

---

## Pass arguments into a function & Determine parameter received
- JS không có hạn chế về số lượng các arguments truyền vào hàm, cũng như hạn chế về số lượng parameter khai báo (Đối với một số ngôn ngữ lập trình như C/C++, Java thì yêu cầu phải chính xác bằng nhau và đúng kiểu dữ liệu)

- Khi khai báo hàm gồm 2 parameter đầu vào, khi gọi hàm thì truyền 1, 3, 5, 7 arguments cũng không sao vì JS không bắt lỗi điểm này. Tuy nhiên việc có đảm bảo hàm chạy đúng hay không, khai thác hết tham số đầu vào hay không thì lại là một câu chuyện khác

```js
function myf(a,b,c){
    console.log(a,b,c)
}

myf(1,2,3,4,5,6,7,8,9,)
```

- Vì vậy , JS hỗ một từ khoá là **arguments** để giúp kiểm soát tất cả các tham số đầu vào dưới dạng mảng. Như vậy thì ta có thể tận dụng được toàn bộ các **arguments** được truyền vào (đối với trường hợp không xác định được số lượng tham số truyền vào)

```js
function myf(){
    // Có thể đặt thêm những params đầu tiên, tuy nhiên vẫn có thể truy cập được thông qua 
    // arguments[0],...
    // arguments không thực sự là mảng, tuy nhiên lại có cách hoạt động giống như mảng
    console.log(arguments)
}
myf(1,2,3,4,5,6,7,8,9,)
```

---

## return
- Từ khoá **return** được dùng để trả về giá trị cho hàm. Mang ý nghĩa rằng hàm đã kết thúc. Nếu không thể tìm được từ khoá **return** thì hàm thực hiện hết đoạn code đặt ra thì sẽ trả về giá trị undefined
- Khi JS bắt gặp từ khoá **return** thì sẽ ngay lập tức kết thúc hàm (đồng nghĩa với việc kết thúc cả vòng lặp ngay lập tức)

---

## Exercise:

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Glossary/Function
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
* https://www.youtube.com/watch?v=GdAyat5P72Q
---
<!-- Navigator -->
<div>
<a href="Lecture-09.1.DOM.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="..">
    <img width=50 src="../sources/index.svg" >
</a>
<a href="Lecture-09.3.Lexical.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->