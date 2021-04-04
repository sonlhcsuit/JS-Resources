# DOM Object
- Sức mạnh của JS nằm ở chỗ có thể thao túng được DOM, vậy thì làm sao JS có thể làm được điều đó. Để có thể giải thích kỹ càng thì thật sự khó khăn bởi vì sẽ cần liên luỵ khá là nhiều kiến thức nền tảng căn bản
- Thay vì cứ mãi ngẫm nghĩ về việc này thì ta nên tập trung vào việc làm sao để có thể tận dụng khả năng của JS tốt nhất có thể

## document
- document là một **built-in global object** của **client-side JS**. Thông qua document, ta có thể thực hiện được việc thao túng DOM (view of the web)
- **document** là object to nhất, quản lý tất cả các công cụ giúp thay đổi DOM (các công cụ ở đây có thể hiểu là các function, method,..)
- Mỗi một trang web được xem như là một **document**, mỗi **document** gồm nhiều **element** (HTML Element)
- **document** cho phép việc tạo ra, thêm, xoá, sửa các element một cách nhanh chóng

---

## element
- Mỗi một HTML Element sẽ được cấu tạo, lưu trữ như 1 **object**, khi cần sử dụng thì làm giống như việc sử dụng **object**. Tuy nhiên **element** có rất nhiều property với đa tính năng, nên cần phải nhớ, tra cứu để có thể sử dụng thuần thục
- **document** sẽ giúp chúng ta *select* các **element** ở trong DOM, cho phép chúng ta sử dụng thông qua biến
- Việc đầu tiên cần phải học chính là cú pháp chọn các phần tử thông qua các **selector**

```js
document.getElementById("intro")    // chọn element đầu tiên có id là intro
document.getElementsByTagName("p")    // chọn tất cả p element - trả về một Collections (tương tự như mảng)
document.getElementsByClassName("intro")    // chọn element đầu tiên có id là intro
querySelector
document.querySelector(".intro")    // chọn phần tử đầu tiên đáp ứng đủ điều kiện là các selector -> chọn tất cả class
document.querySelectorAll(".intro")    // chọn các phần tử đáp ứng đủ điều kiện là các selector -> chọn tất cả class
```

---

## window
- window là global object (cửa sổ) có chứa **document** object
- Về mặc định thì số lượng của window và dom là 1 (nếu trang web của bạn không sử dụng bất kỳ iframe element nào khác)
- window cung cấp công cụ khi tương tác với trình duyệt web
- window chứa các event, thứ mà các bạn sẽ sử dụng rất nhiều

---
## Exercise:

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/API/Window
* https://developer.mozilla.org/en-US/docs/Web/API/Document





---
<!-- Navigator -->
<div>
<a href="./Lecture-09.4.Callback.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./Lecture-10.2.element.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->
