# CSS
## BEM standard
- BEM là một chuẩn đặt tên, giúp việc viết và đọc code sẽ trở nên dễ dàng hơn (hoặc ít nhất đó là thứ mà người tạo ra chuẩn này hy vọng như vậy)
- [Vietnamese](https://www.youtube.com/watch?v=v1hSncGZg24)
- [English](https://www.youtube.com/watch?v=er1JEDuPbZQ)
- Đề nghị xem tiếng Việt, vì nó dễ hơn. 
---
## Box Model
- Tất cả mọi HTML element đều được biểu diễn trên trang web với mặt phẳng 2D (Oxy - Cartesian). Tất cả Element đều được xem như là một box. Có thể hiểu box model là một box, hình vuông bao quanh các element.
- Một box model sẽ gồm 4 phần: margin - lề ngoài, border - biên, padding - lề trong,content - Nội dung của element.
<img src="../sources/C4EJS/C4EJS-Lecture-2.3.png" alt="css syntax">
- Box Model sẽ liên quan tới việc xác định kích thước của một element, thông thường được sử dụng trong việc thiết kế và căn chỉnh giao diện.

```css
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}

```
- Với một khai báo như trên thì kích thước thực tế là `10 + 5 + 320 + 5 + 10 = 350`. Việc này có thể dẫn tới layout không như mong muốn
- Sử dụng thuộc tính box-sizing
---

## display
- HTML có 2 loại element là block và inline. Ta có thể dùng thuộc tính display của CSS để chỉnh lại thuộc tính này của HTML. Ngoài ra thuộc tính display còn có nhiều options khác như :none (ẩn), flex (dành cho flex box), ...
---
## Exercise
- Thực hiện Portfolio

---

## Reference & More Resources: