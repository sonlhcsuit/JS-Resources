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
<img src="../sources/C4EJS/C4EJS-Lecture-8.1.png">

- Mỗi element của object sẽ được gọi bằng property (gồm key & value). Bằng việc sử dụng key, ta có thể truy cập, xử lý với value của object. Lưu ý, mỗi key là một identifier (tức là phải tuân theo quy tắc đặt tên). Value có thể là mọi thứ (array, object, number,...)

- Key phải là unique ở cùng độ depth (độ sâu). Nếu khai báo property trùng nhau thì giá trị khai báo ở trước sẽ bị ghi đè bởi giá trị phía sau!
---

## Object Manipulation
- Về cơ bản thì giống như mảng, ta cũng có các thao tác cơ bản: thêm đọc xoá sửa
```js
let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
    1: '?'
}

// Đối với việc đọc, cập nhật thì object có 2 cách
// Static key. Sử dụng toán tử . (dot operator hoặc dot notation)

pokemon.name                // Trả về giá trị là "Pikachu"
pokemon.name = 'cat'        // Cập nhật giá trị

// Lưu ý khi sử dụng dot notation thì ta phải lưu ý rằng chỉ có thể access tới những key phù hợp với quy tắc identifier (quy tắc đặt tên)

pokemon.1                   // Sai, vì 1 không phải là 1 identifier hợp lệ

// Dynamic key. Sử dụng một biến để chứa key
let k = 1
pokemon[k]          // Giá trị là '?'
pokemon['stats']    // Giá trị là 1 object
k = 'stats'
pokemon[k]


// Để thêm và xoá property trong object khá là đơn giản. 

// Muốn thêm thì rất đơn giản, chỉ cần định nghĩa key và gán value là được. 
pokemon['type'] = 'electric'

// Muốn xoá thì sử dụng từ khoá delete trước propety muốn xoá
delete pokemon[1]
```
---
## Useful Function
```js
let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
    1: '?'
}

pokemon.keys()      // Trả về giá trị của key dưới dạng mảng. Thường hay để sử dụng vòng lặp
pokemon.hasOwnProperty('name')      // Trả về true hoặc false nếu tồn tại một property có key là name

// Có thể sử dụng cấu trúc for of để xử lý dữ liệu object 

for(let key of pokemon){
    console.log(key)
    // Dùng vòng lặp for - of thì không thể cập nhật !
}
let keys = pokemon.keys()
for(let i =0;i < keys.length;i++){
    console.log(object[keys[i]])
}
```
- Và nhiều hàm khác ở mục phía dưới!
---
## Exercise:

- Bài 1 - 5 ở file 03.2.Objects

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
