# Introduction to CSS
- CSS (Cascading Style Sheets) là một loại ngôn ngữ giúp chúng ta style (định dạng) trang web thông qua việc style HTML. Ngay từ đầu, HTML được hướng tới là sẽ chỉ đảm nhiệm phần nội dung của trang web - tức là sẽ tập trung vào cách hiển thị các thông tin, media,... Bởi vì lý do này, các định dạng mặc định của HTML không quá bắt mắt, thô,... CSS bước vào để thay đổi các định dạng này.CSS Không khác gì lớp áo của trang web cả (Người đẹp vì lụa).
- Có 3 cách viết CSS chính : inline, internal, external. Inline là cách sử dụng trực tiếp HTML attribute style của từng HTML Element. Internal là cách sử dụng 1 tag style riêng biệt kết hợp với các selector. External là cách sử dụng 1 file .css và kết hợp với các selector
 
## Declaration
- Đối với cách sử dụng inline CSS, chúng ta áp dụng trực tiếp các declaration lên 1 tag như thế này 
```html
<p style="color:red;">There are red! </p>
<p style="color:red;font-size:30px">There are red and big! </p>
```
- Đối với Internal & External CSS thì còn có thêm selector
<img src="../sources/C4EJS/C4EJS-Lecture-2.2.png" alt="css syntax">

---

## Selectors
```css
/* p là selector */
p {
  color: red;
  text-align: center;
}
```
- Selector chỉ tới những HTML element phù hợp điều kiện, và áp dụng các khai báo css cho element đó.
- Có 4 loại selector cơ bản là: universal, tagname, id, class
```css
/* Universal selector bắt đầu bởi dấu "*", mang ý nghĩa toàn bộ element đều phù hợp*/
*{
    color:red
}

/* Tagname selector bắt đầu bởi tên của một element, mang ý nghĩa toàn bộ element cùng loại đều phù hợp */
p {
    /* Tất cả những p element đều sẽ được căn giữa và có màu đỏ! */
  color: red;
  text-align: center;
}

/* id selector bắt đầu bởi dấu "#", theo sau là id, mang ý nghĩa chỉ 1 element có id phù hợp*/
#good { 
    /* Chỉ có một element có id là "good" thì chữ là màu xanh */
    color: blue;
}

/* class selector bắt đầu bởi dấu ".", theo sau là classname, mang ý nghĩa toàn bộ element mang class đó đều phù hợp */
.yellow { 
    /* Các element nào có class là yellow thì sẽ có màu là yellow */
    color: yellow;
}

```
- Cách sử dụng id, class dành cho các tag html
```html

<p class="[classname1] [classname2] [classname3] [...]">this is text with classes</p>
<!-- 1 element thì có thể có nhiều class được ngăn cách với nhau bằng khoảng trắng. -->
<!-- Lưu ý không được phép khai báo thuộc tính class nhiều lần và cho rằng đây là việc thêm class mới -->
<p class="[classname1]" class="[classname2]" class="[classname3]" ...>this is text with classes but WRONG</p>

<p id="[id]">this is text with id</p>

<p id="good">this is text with "good" as id</p>
<!-- Lưu ý, id không có khoảng trắng, và chỉ có 1 "từ" duy nhất!  -->

<p id="good">this is text with "good" as id,too. Its WRONG!</p>
<!-- Id là duy nhất, không được phép có 2 tag cùng id  -->

```
---

## Specificity
- Xét trường hợp như sau
```css
#pink{
    color:pink;
}
p {
    color:yellow;
}
.blue{
    color:blue;
}
.red{
    color:red;
}
```

```html
<p>What is my color?</p>
<p class="blue">What is my color?</p>
<p class="red">What is my color?</p>
<p class="blue red">What is my color?</p>
<p id="pink" class="blue">What is my color?</p>
<p id="pink" class="blue red">What is my color?</p>
<p id="pink" class="blue red" style="color:black">What is my color?</p>
```
- Khi sử dụng nhiều selector thì sẽ dẫn tới trường hợp bị xung đột về value của các property, có một cơ chế để giải quyết việc xung đột này gọi là Specificity - tức là tính điểm, tìm hiểu kỹ hơn ở phần resources. Có vài quy tắc sau cần phải nhớ. Ưu tiên inline > id > class > tagname > * . Nếu cùng độ ưu tiên thì giá trị cuối sẽ được chọn.
- Dùng từ khoá "!important" để tăng mức độ ưu tiên lên cao nhất - hạn chế lạm dụng.
---

## Measure unit
- Có 2 loại unit để đo độ dài chính trong CSS 
- absolute: Độ dài cụ thể, tường minh. Ví dụ: px, cm, mm, in (inches),...
- relative: không tường minh, phụ thuộc vào thứ khác. Ví dụ: %, vw, vh,...

---

## CSS properties
- Giới thiệu về các CSS property hay được sử dụng 
- 
---

## Reference & More Resources: 
* https://www.w3schools.com/css/css_syntax.asp
* https://www.w3schools.com/css/css_selectors.asp
* https://www.w3schools.com/html/html_id.asp
* https://www.w3schools.com/html/html_classes.asp
* https://www.w3schools.com/css/css_specificity.asp
* https://www.w3schools.com/cssref/css_units.asp
* https://www.w3schools.com/css/default.asp
---
<!-- Navigator -->
<div>
<a href="Lecture-02.1.HTML-II.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="README.md">
    <img width=50 src="../sources/index.svg" >
</a>
<a href="Lecture-02.3.CSS.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->