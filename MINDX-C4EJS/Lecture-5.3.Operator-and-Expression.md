# Operator, Expression
## Operator
- Operator có nghĩa là toán tử, thông thường là những phép toán, lệnh cần thiết để thực thi, tính toán gì đó.
- Có nhiều loại toán tử như +,-,=,*,/,%,**,... là những toán tử dành cho tính toán
- Có nhiều loại toán tử không nhất thiết phải là các ký hiệu toán học, mà có thể là từ khoá typeof, new,...
- Dựa vào chức năng thì có thể phân loại toán tử thành các nhóm sau 
<img src="../sources/C4EJS-Lecture 5.3.png">

---

## Expression
- Expression có nghĩa là biểu thức, thông thường là sự kết hợp giữa operator và operand (toán hạng)
- Operand hiểu đơn giản nghĩa là những data tham gia vào việc tính toán, có thể ở dưới dạng giá trị xác định hay sử dụng biến để chỉ tới
- Mỗi Operator có một lượng operand nhất định, ví dụ *1 + 1* thì phép cộng cần 2 operand (2 số), nhưng đôi khi. Có thể dựa vào số lượng operand tham gia vào việc tính toán mà có thể chia các operator thành: unary, binary, ternary operator. (toán tử 1,2,3 ngôi)
- Mỗi expression không nhất thiết phải trả về giá trị, tuy nhiên đa phần là đều có.
- Trong expression, nếu có nhiều sự tham gia của toán tử và toán hạng **(4\*\*2 + 9\*2 - 100)\*\*1** thì cần phải có 1 cách để xác định xem toán tử nào cần thực hiện trước dựa trên độ ưu tiên và độ kết hợp toán tử (operator precedence, operator associativity)
---
## Function
- function là một dạng đặc biệt của expression. Bởi vì buổi học thứ 1 nên function chỉ ở mức độ overview 
- Học cách khai báo hàm, sử dụng hàm cơ bản 
```js
function f_name(x){
    // statement để xử lý input
    // ...
    return x**2
    // Từ khoá return để trả về giá trị output 
    // Có thể hiểu hàm là một toán tử đặc biệt, cần sự tính toán phức tạp hơn các toán tử cơ bản
    // 
}

```

---

## Exercise:
- Làm bài 1 - 5 trong file 01 ở <a href="https://github.com/sonlhcsuit/JS-Resources/blob/master/Practices/Exercises/01 - Values, Types, Operators and Basic Functions.md">đây</a>

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
