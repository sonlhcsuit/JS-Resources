# Values, Variable & Data type
## Values
- Bản chất của máy tính là tính toán, vậy nên *Value* là những thứ không thể thiếu của một ngôn ngữ lập trình. Value theo ý nghĩa toán học là một giá trị xác định - fixed value. Value sẽ có một tập hợp giới hạn bao quanh nó (ví dụ tập số N, R, Q,...). Máy tính sẽ thực hiện việc tính toán từ value này sang value khác (ví dụ 3 + 5 để tạo ra value mới là 8).Value còn có thể gọi là data, data có một kiểu dữ liệu nhất định (ví dụ: số nguyên, số thực, số phức,...). 

---

## Data Type
- Mỗi data sẽ đi kèm với data type, nhằm xác định cụ thể data sẽ trông như thế nào. Trong JS, data không nhất thiết là phải là số. Có nhiều loại data type như sau (Kiểu dữ liệu):
    - Primal :
        - number: số (bao gồm tất cả các loại số như: số nguyên, số thực,...)
        - string: chuối (một dòng chữ, hay ký tự)
        - boolean: chỉ có 2 giá trị là *true* hoặc *false*
    - Non-Primal (Reference):
        - array : mảng
        - object
        - user-defined : người dùng tự định nghĩa
- Đối với data dạng number thì cách sử dụng như sau
```js
100
100.12
1
100e20
9e-2
// Chỉ cần viết số 
```
- Đối với data dạng string thì cách sử dụng như sau
```js
"Đây là một chuỗi"
'Đây cũng là chuỗi'
`chuỗi`

// Dòng chữ (text) phải được bọc trong cặp dấu ', ", `
// Lưu ý, text không được phép có dấu ',",` ở trong nội dung, nếu có thì phải thay bằng \',\",\` mới hợp lệ

"Anh nói:\"Này bạn tôi ơi\""

'Anh nói: "Này bạn tôi ơi"'
// Cách này cũng giải quyết được vấn đề, tuy nhiên không khuyến khích

```
- Đối với data dạng boolean thì chỉ sử dụng 2 giá trị

---

## Variable
- Đôi khi data rất dài, khó nhớ khiến chúng ta khó khăn khi thực hiện 1 phép toán,... Chúng ta thường xuyên nhớ những từ ngữ dễ dàng hơn là những con số khô khan. Vậy nên việc sử dụng một từ ngữ, để tham chiếu đến 1 data có value nào đó thì sẽ dễ dàng hơn. Biến là việc sử dụng một từ, một tên có nghĩa chỉ tới 1 giá trị cụ thể nào đó. Khi cần truy xuất giá trị, ta chỉ cần gọi tên biến thay vì thay viết toàn bộ giá trị
- Một vài quy tắc khi sử dụng biến
    - Một biến chỉ có thể lưu trữ 1 giá trị duy nhất tại 1 thời điểm
    - Tên biến gồm có 60 ký tự (a-z và A-Z, 0-9, và 2 ký tự đặc biệt là *_* và *$*)
    - Tên biến không được bắt đầu bằng số
    - Tên biến (identifier - định danh) phải là duy nhất
    - JS là một ngôn ngữ có phân biệt chữ hoa chữ thường (case sensitive), nên *mindx* và *Mindx* là 2 biến khác nhau!
    - Giá trị mặc định của biến trong JS là *undefined*
```js
// sử dụng từ khoá let để khai báo biến (declaration)
let var_name; // Giá trị mặc định là undefined
// Gán giá trị mới cho biến bằng cách sử dụng dấu "=" (assign)
var_name = 100; // Lưu ý bên trái "=" luôn luôn phải là một biến!
let var_name = 'heheh' // Không thể khai báo 2 biến trùng tên trong cùng 1 phạm vi!
// Thay vào đó, có thể tái sử dụng lại biến bằng cách gán lại giá trị
var_name = 'heheh'
```

---

## Reference & More Resources: 
* https://www.w3schools.com/js/js_variables.asp
* https://www.w3schools.com/js/js_datatypes.asp
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures







---
<!-- Navigator -->
<div>
<a href="./Lecture-05.1.Introduction-to-Javascript.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./README.md">
    <img width=50 src="../sources/index.svg" >
</a>
<a href="./Lecture-05.3.Operator-Expression-Function.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->
