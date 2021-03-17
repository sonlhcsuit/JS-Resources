# Object
## Object
- Về việc sử dụng array để lưu trữ các thông tin cần thiết, có liên quan tới nhau đã giúp chúng ta rất nhiều (ít nhất là về việc không phải đặt tên biến kiểu myvar01,myvar02,..). Tuy nhiên đối với dữ liệu phức tạp dạng như (Thông tin người dùng) thì array lại tỏ ra yếu thế hơn bỏi vì khó nhớ, khó minh hoạ từng loại giá trị

```js
let user = ['hoangson','30/04/1975','mentor','C4E-D24','sonlh@gmail.com']
// username, dob, role, class, email
```
- Lưu trữ dữ liệu dạng này sẽ rất là khó nhớ khi chúng ta phải quy định rằng: phần tử đầu tiên là username, ....
- Con người có giác quan tốt hơn về ngôn ngữ, nên sẽ dễ dàng hơn cho developer (hoặc coder) khi xử lý những thứ như thế này
- Object trong JS được sinh ra để làm điều này, thay vì phải nhớ số (index) thì chúng ta có thể tự định nghĩa index của mình.
<img src="../sources/ObjectProperty.png">

- Mỗi element của object sẽ được gọi bằng property (gồm key & value). Bằng việc sử dụng key, ta có thể truy cập, xử lý với value của object. Lưu ý, mỗi key là một identifier (tức là phải tuân theo quy tắc đặt tên). Value có thể là mọi thứ (array, object, number,...)
---

## Object
- Về việc sử dụng array để lưu trữ các thông tin cần thiết, có liên quan tới nhau đã giúp chúng ta rất nhiều (ít nhất là về việc không phải đặt tên biến kiểu myvar01,myvar02,..). Tuy nhiên đối với dữ liệu phức tạp dạng như (Thông tin người dùng) thì array lại tỏ ra yếu thế hơn bỏi vì khó nhớ, khó minh hoạ từng loại giá trị

```js
let user = ['hoangson','30/04/1975','mentor','C4E-D24','sonlh@gmail.com']
// username, dob, role, class, email
```
- Lưu trữ dữ liệu dạng này sẽ rất là khó nhớ khi chúng ta phải quy định rằng: phần tử đầu tiên là username, ....
- Con người có giác quan tốt hơn về ngôn ngữ, nên sẽ dễ dàng hơn cho developer (hoặc coder) khi xử lý những thứ như thế này
- Object trong JS được sinh ra để làm điều này, thay vì phải nhớ số (index) thì chúng ta có thể tự định nghĩa index của mình.
<img src="../sources/ObjectProperty.png">

- Mỗi element của object sẽ được gọi bằng property (gồm key & value). Bằng việc sử dụng key, ta có thể truy cập, xử lý với value của object. Lưu ý, mỗi key là một identifier (tức là phải tuân theo quy tắc đặt tên). Value có thể là mọi thứ (array, object, number,...)

---
## Exercise:

- Bài 1 - 5 ở file 03.2.Objects

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
