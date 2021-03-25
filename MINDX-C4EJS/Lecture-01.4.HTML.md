# HTML
## Resources tags
- Các resource tag thường được dùng để thông tin vào trang mà không phải dạng text (chữ), thông thường các resource tag thường sử dụng là 
```html
<link rel="stylesheet" href="./style.css">
<!-- Dùng để thêm file css vào trong file html -->
<!-- Ngoài ra còn dùng để thêm các thứ linh tinh như icon (favicon), license,...  -->

<img src="[image path]" alt="[image description]">
<!-- Dùng để chèn hình ảnh vào file html -->

<video controls>
  <source src="[video path]" type="[video type - mp4,wmv,ogg]">
  <source src="[video path]" type="video/mp4">
  Your browser does not support the video tag.
  <!-- Hiển thị nếu trình duyệt không hỗ trợ tag này -->
</video>
<!-- Dùng để chèn video vào html -->


<audio controls>
  <source src="[audio path]" type="[audio type - mp3,wav,ogg]">
  <source src="[audio path]" type="audio/mp3">
  Your browser does not support the audio tag.
</audio>
<!-- Dùng để chèn âm thanh vào html -->
```
---

## Format tags
- Dữ liệu dạng text( chữ ) được đưa vào trong file html. Lưu ý nếu muốn sử dụng text (chữ) thì nên có một tag p bao bọc xung quanh
```html
<p>this is a text</p>
<!-- Dùng để đưa một đoạn text bình thường vào html-->

<b>Create bold text</b>
<!-- Text được in đậm -->
<strong>Strong text</strong>
<!-- Cũng là in đậm -->
<i>i talic text</i>
<!-- In nghiên -->
H<sub>2</sub>0
<!-- Dùng để viết chữ nhỏ ở dưới -->
x<sup>2</sup> - Superscript text
<!-- Dùng để viết chữ nhỏ ở trên -->

<u>underline</u>
<!-- Còn đây là gạch chân -->
<!-- Còn rất nhiều tag nữa, tuy nhiên các bạn không dùng những tag này, CSS sẽ giúp chúng ta làm điều đó tốt hơn -->
```

---

## Table tags
- Có một vài dữ liệu ở trên trang web cần được biểu diễn ở dạng bảng, thì ta sẽ dùng như sau
```html
<!-- Dùng để khai báo table -->
<table>
    <!-- Khai báo các tên của các cột, phần head của table -->
  <thead>
    <tr>
        <!-- tag tr dùng để xem đánh dấu 1 hàng   -->
      <th>Name</th>
      <!-- tag th dùng để đánh dấu 1 cột -->
      <th>Gender</th>
      <th>Country</th>
    </tr>
  </thead>
<!-- Khai báo data của từng cột, dựa theo thứ tự đã khai báo ở tag thead -->
  <tbody>
    <tr>
        <!-- Khác với th ở trên, thì ở đây dùng td để dánh dấu 1 cột -->
      <td>Son</td>
      <td>Male</td>
      <td>Vietnam</td>
    </tr>
    <!-- Muốn thêm dòng mới thì cứ việc thêm tr nhé -->
    <tr>
      <td>Quang</td>
      <td>Male</td>
      <!-- <td>Vietnam</td> -->
      <!-- Nếu bị m6t1  -->
    </tr>
  </tbody>
</table>

```

---

## List
- Đôi khi chúng ta không cần dùng table bởi vì dùng quá nhiều tag, ta có thể sử dụng list - là những chỉ mục - thay vì table. 
- Có 3 loại list thường dùng là ol (ordered list), ul(unordered list), dl(description list) và li (list item)

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Redux</li>
  <li>Node</li>
  <li>MongoDB</li>
  <li>GatsBy</li>
</ol>


<ul>
  <li>Finland</li>
  <li>Sweden</li>
  <li>Norway</li>
  <li>Denmark</li>
  <li>Iceland</li>
</ul>

<dl>
  <dt>HTML</dt>
  <dd>HTML(HyperText Markup Language) is the build block the web.</dd>
  <dt>CSS</dt>
  <dd>CSS(Cascading Style Sheet) that make HTML page look beautiful.</dd>
  <dd></dd>
  <dt>JavaScript</dt>
  <dd>
    JavaScript is a programming language that can add interactivity to websites
  </dd>
  <dt>React</dt>
  <dd>
    React is a modern JavaScript library that was initial released on May 29,
    2013.
  </dd>
</dl>
``` 

---

## Navigating 
- Có một cách đơn giản để di chuyện giữa nhiều file html khác nhau đó là sử tag a (anchor)
```html
<a href="./about.html">About</a>
<!-- Khi click vào thì sẽ chuyển trang about.html-->

<a href="#hehe">About</a>
<!-- Khi click vào thì sẽ chuyển tới element có id là hehe-->
```
---

## Exercise
- Các bạn thực hiện code Brown Bear & Healthy Food ở trên lớp 
- Về nhà thực hiện lại tương tự với đối tượng là Norwegian Forest cat và một món ăn nào đó các bạn thích
- Các bạn có thể tra cứu chi tiết hơn về các tag, các attribute và cách sử dụng chi tiết ở link thứ 4
---
## Reference & More Resources: 
* https://vi.wikipedia.org/wiki/Internet
* https://nodejs.org/api/url.html
* https://www.geeksforgeeks.org/difference-between-static-and-dynamic-web-pages/
* https://www.w3schools.com/tags/default.asp