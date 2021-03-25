# Branching
## Conditional expression
- Khi lập trình, việc chúng ta phải đối mặt việc xử lý các trường hợp khác nhau của dữ liệu (Ví dụ: Đi ra chợ mua sữa, nếu có trứng thì mua 10 quả trứng )
- Tuỳ thuộc vào điều kiện của dữ liệu đầu vào như thế nào mà chúng ta phải xác định được dữ liệu phù hợp với các cách xử lý khác nhau
- Vậy nên chúng ta có các toán tử so sánh (comparison operator) dùng để xác định dữ liệu có phù hợp với một tiêu chuẩn nào đó hay không. (Ví dụ: 18 tuổi trở lên và có bằng lái xe mới được phép lái xe,... )
- Kết quả của một phép so sánh có kiểu giá trị là boolean (true ,false )
- Ngoài ra các điều kiện còn có thể tương tác với nhau thông qua các toán tử logic (logical operator - and, or, not,...)

---

## if - else if - else
- Câu lệnh điều kiện if-else sẽ hỗ trợ chúng ta trong việc viết code rẽ nhánh, quyết định xem sẽ sử dụng cách xử lý nào với trường hợp dữ liệu phù hợp
```js
if (condition){
    // Nếu kết quả của biểu thức điều kiện condition là true thì sẽ sử dụng đoạn code ở đây
}else{
    // Sử dụng đoạn code ở đây
}


// Đôi khi cần nhiều điều kiện hơn thì nên sủ dụng cấu trúc if - else lồng nhau như thế này

if (condition1){
    if (condition2){
        // Statements 1
    }else{
        // Statements 2
    }
} else {
    if ( condition3){
        // Statements 3
    } else {
        // Statements 4
    }
}
// Một chút lưu ý nhỏ là ta có thể kết hợp else + if thành chung để gọn gàng hơn, sử dụng các toán tử logic để kết hợp


if (condition1 && condition2){
    // Statements 1 
} else if (condition2 ){
    // Statements 2
} else if (condition3 ){
    // Statements 3
} else {
    // Statements 4
}
```

---

## switch - case
- Khi đối mặt với cần nhiều trường hợp hơn (Ví dụ: 12 con giáp ) thì việc sử dụng cấu trúc if else lồng nhau không được hoan nghênh cho lắm! (Chỉ hơi khó đọc một chút)
- switch-case giúp ta giải quyết vấn đề này một cách nhanh chóng và nhanh gọn lẹ. Tuy nhiên điểm yếu của switch-case là chỉ có thể so sánh bằng (==) thay vì so sánh đa dạng (thoải mái tự do kết hợp như if-else)
- Điều khiến switch-case đặc biệt thoải mái là có thể tận dụng nhiều 1 đoạn code cho nhiều trường hợp xử lý giống nhau. Khi một case được xác nhận là phù hợp (kết quả phép so sánh là true), thì những case ở phía dưới đều được mặc định là đúng, các đoạn code sẽ được thực thi toàn bộ mà không cần phải kiểm tra nữa.

```js
let age = 1
switch(variable){
    // Variable hoặc expression, giá trị của chúng sẽ được đi so sánh với từng trường hợp (từng case ) qua phép so sánh bằng (==)
    case 0:
        console.log('mouse')
        break;
    case 1:
        console.log('buffalo')
        break;
    // ...
    case 12:
        console.log('Pig')
        break

    default:
        // Khi 12 trường hợp trên đều không phù hợp thì sẽ chọn trường hợp này!
        break
}
// Bởi vì đặc tính của cấu trúc switch-case nên ta sẽ dùng break tại mỗi đoạn cuối của case để không cho phép trường hợp ở trên xảy ra
```
---

## Exercise:


---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
* https://github.com/edtechkidsvn/c4ejs-student-book/blob/master/branching/branching.md
