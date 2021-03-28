# Introduction to HTML 

## What is HTML?
- Là HyperText Markup Language, thứ ngôn ngữ giúp Web có thể trình bày ra các thông tin cần thiết. Thường dùng để làm giao diện

---

## How to use HTML?
- HTML sử dụng các tag để hiển thị thông tin, cú pháp của một tag như sau 
```html
<tagname attribute="value" attribute="value">Content goes here!</tagname>
```
- **tagname** chính là tên của tag, mỗi tag lại hỗ trợ 1 cách để hiển thị thông tin. Tag thường luôn được viết thường, và đúng chính tả, sai chính tả thì trình duyệt sẽ không chạy(không hiển thị ra ngoài màn hình )

- Tag thường bắt đầu bởi kí tự "\<" (less than - nhỏ hơn) và kết thúc với kí tự "\>" (greater than - lớn hơn). Tag sẽ đi theo gói, theo cặp gồm opening tag và closing tag (có thêm kí tự \/ ở phía trước tag name). Lưu ý rằng là **attribute** phải được khai báo ở opening tag. Tuy nhiên có một vài tag lại không có closing tag mà thay vào đó thì được gọi là self-closing tag.(Cũng có thể hiểu như ai thì cũng có *đôi* có cặp, còn một số người thì cô *đơn*, lẻ bóng - tag **đôi** và tag **đơn**)
```html
<tagname attribute="value" attribute="value"/>
```

---

## What is Comment? 
- Comment là việc khiến một đoạn code không được thực thi.

- Khi viết code, việc mô tả đoạn code làm gì rất cần thiết, để dễ dàng cho bản thân, người sau tiếp tục phát triển code. Bên cạnh đó, comment còn là một cách để các bạn xoá code tạm thời, nếu có gì chẳng may xảy ra thì quay ngược lại đoạn code cũ còn được. Comment bắt đầu bằng "\<\!\-\-" và kết thúc bằng "--\>"

```html
<!-- This is a comment -->
<!-- this
also
a
comment
but 
many
lines  -->
```

---

## Basic HTML Tag 
- Có một vài attribute mà bất cứ tag nào cũng có là : id, style,class
- Sau đây là một vài tag bình thường:
> html, div, p, head, title, h1, h6, p, a, body,...
- Sau đây là một vài self-closing tag:
> area, base, br, col, embed, hr, img, input, link, meta, para, source, track, wbr,...

- HTML tag có rất nhiều(và đơn giản nữa), và khá ít khi có người nhớ hết, nên việc tra cứa dựa trên keywords sẽ quan trọng, các nguồn tra cứu quan trọng là ở [google](https://www.w3schools.com/tags/default.asp) và ở [google](https://developer.mozilla.org/en-US/docs/Web/HTML)

- h1,h6,p
- video, source,img 
- b,i,u,
và các tag cơ bản khác 

---

## Reference & More Resources: 
---
<div>
<a href="./Lecture-05.1.Introduction-to-Javascript.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./Lecture-01.2.Introduction-to-Front-End.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
