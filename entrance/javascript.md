# Entrance exam for mentor

## JSB
### Kiến thức về HTML
1. HTML 2 loại tag chủ yếu là inline & block. Hãy phân loại các tag sau và nêu sự khác biệt của loại tag inline & block.
```html
<div>
<span>
<p>
<ol>
<label>
<input>
<h1>
<b>
<video>
<br>
<hr>
<img>
```
> Các inline element là `<span> <label> <input> <b> <br> <img>` và các block element là `<div> <p> <ol> <h1> <video> <hr>`
> Đa số inline element không thể xác định kích thước (width & height), vì kích thước tuỳ thuộc vào nội dung bên trong, hiển thị trên cùng một hàng. Block element mặc định sẽ chiếm toàn bộ chiều dài (của element cha  - nếu có). Khi đặt thuộc tính width & height thì chiều dài vẫn không thay đổi vì được bù qua phần margin

---

2. viết code html để liên kết file js & css từ page.html & index.html cấu trúc thư mục sau.
Cây thư mục của các file hiện tại   
```txt
project
├── assets
│   ├── css
│   │   ├── index.css
│   │   └── page.css
│   ├── js
│   │   ├── index.js
│   │   └── page.js
│   └── page.html
└── html
    └── index.html
```

```html
<link rel="stylesheet" href="./css/page.css">
<script src="./js/page.js"></script>
<link rel="stylesheet" href="/assets/css/index.css">
<script src="/assets/js/index.js"></script>
```
hoặc các cách viết path khác mang lại kết quả tương tự

---

3. Tác dụng của thẻ br & hr
> `<br>` giúp xuống hàng ngay lập tức, `<hr>` xuống hàng ngay lập tức và kẻ một đường ngang 

---

4. Viết một hyperlink dẫn tới google, khi click vào tự chuyển sang tab mới.

```html 
<a href="https://google.com" targe="_blank">
```

---

5. Hãy nêu sự khác biệt giữa `<textarea>` & `<input>` elements

> input có thể có nhiều loại (range, color, ...) tuỳ thuộc vào attribute `type`. textarea thường dùng để nhập một số lượng văn bản lớn, có thể tuỳ chỉnh font chữ, resize,..

---

6. Cấu trúc cơ bản của `<table>` gồm những gì? Làm thế nào để tạo một table có đủ các thành phần sử dụng các element liên quan.
> Gồm table head và table body (foot là optional). Sử dụng tag `<thead>` để tạo headings (tên các cột) kết hợp với `<th>`. `<tbody>` kết hợp với `<tr>` (table row) & `<td>` (table data cell)

---
7. Hãy nêu điểm giống và khác nhau cơ bản giữa ul & ol & dl
> Cả 3 đều có một mục đích chung là biểu diễn một danh sách nhiều nội dung khi kết hợp với `li`. Điểm khác nhau cơ bản là `ul` sử dụng dấu chấm tròn (có thể tuỳ chỉnh dấu khác) để phân tách nội dung. `ol` sử dụng số (thập phân, la mã). `dl` sử dụng indetation (thụt lề)

---


8. Làm một radio set như hình
<img src="./../sources/entrance-1.png">

```html
<form>
    <input type="radio" name="age" value="Prenatal"> <label>Prenatal</label> <br/>
    <input type="radio" name="age" value="Baby"> <label>Baby</label><br/>
    <input type="radio" name="age" value="Toddler"> <label>Toddler</label><br/>
    <input type="radio" name="age" value="Preschool"> <label>Preschool</label><br/>
    <input type="radio" name="age" value="Gradeschooler"> <label>Gradeschooler</label><br/>
    <input type="radio" name="age" value="Teen"> <label>Teen</label><br/>
    <input type="radio" name="age" value="Young Adult"> <label>Young Adult</label><br/>
    <input type="radio" name="age" value="Adult"> <label>Adult</label><br/>
</form>
```

---

9. Làm một combobox như hình

<img src="./../sources/entrance-2.gif" height=200>

```html
<form>
    <label>Chose your favorite Animal</label> <br>
    <select>
        <option value="null" selected disabled>Choose your option</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="rabbit">Rabbit</option>
        <option value="fox">Fox</option>
        <option value="tiger">Tiger</option>
        <option value="lynx">Lynx</option>
        <option value="others">Others</option>
    </select>
</form>
```

---

### Kiến thức về CSS 

1. Liệt kê các loại CSS selector cơ bản (4 loại)
> Universal (*), class(.), id (#), element([elementName]- p,h1,eg.)
2. Liệt kê 5 CSS pseudo class/element
> :hover, :focus, :visited, :disabled, :first-child, :last-child,... Hoặc những thứ tương tự.
3. Sử dụng thuộc tính CSS phù hợp khiến một hình ảnh (vuông) trở thành hình tròn

4. Tạo một button có hình pill như sau

5. thêm vài đoạn code để sửa lỗi cho phần sau (position)

6. Căn giữa element sau

7. Viết các selector phù hợp để được kết quả như hình 

8. khác nhau của dải màu rbga

9. boxsizing:borderbox là gì?

10. flex-wrap?

- Kiến thức về Javascript cơ bản
1. typeof null/function/array? Làm sao để kiểm tra 1 biến có kiểu dữ liệu là array?
2. Kết quả 
delete b[0]
delete a 
3. kết quả in ra (kết hợp return và ? : )
4. sự khác nhau giữa break & continue
5. Đề xuất giải pháp thay thế cấu trúc if else if else sau đây bằng
6. Đề xuất giải pháp thay thế cấu trúc switch case sau
7. có bao nhiêu cách viết vòng lạp for? liệt kê
8. một element có thể có tối đa bao nhiêu listener cho 1 event cố định. Làm sao xoá listener (unsubscribe) khỏi 1 event?
9. element.insertAdjacentHTML()
10. khác sự khác nhau giữa sự kiện input & change của text?
- data types, variable, const, primitives

- toán tử, biểu thức, hàm vòng lặp

- Kiến thức về Javascript document
document.*

## JSA
- git & github
1. tạo một commit 
2. thêm/xoá origin
3. tạo một branch
4. reset HEAD
5. khởi tạo repo
- Kiến thức về JS Advanced
var & let vs function defination & expression, closure
1. giải thích ví dụ (MDN) sau về closure
2. banana
3. local storage ? lưu trữ Object trong localStorage
4. kết quả của hàm setInterval sau ?
5. create Timer()
6. viết hàm để chuyển đổi 1 số thập phân sang nhị phân
7. implement lại làm bultin map/reduce/filter
8. JSON
9. copy a project
10. write regex

- CSS Transition/Effect

- async
1. kết quả đoạn code sau
2. fetch()
3. thực hiện hàm sau bằng 2 cách async & promise 
4. promiseAll ?
5. timeout a request?

## JSI
- DB / NoSQl / Firebase
1. Điểm yếu của noSQL? Firestore? 
2. onSnapshot?
3. querySnapshot?
- Authentication / Authorization / SMS / Email confirm / Firestore
2. Tìm hiểu về việc authentication
- Cloud functions
1. Viết một cloud function cho phép upload ảnh bằng lưu trữ bằng cloud storage. Kết quả trả về là public url của ảnh có thể truy cập ở mọi nơi. Viết bằng html/css/js
- dp. Trình bày ít nhất 3 cách viết hàm tính số fibonacci thứ n.