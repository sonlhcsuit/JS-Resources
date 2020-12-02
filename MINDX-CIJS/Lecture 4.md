
## Virtual DOM 
- DOM là thứ cho phép các lập trình viên có thể thay đổi trang diện mạo của trang web bằng javascript. Nó là thứ duy nhất cho phép các coder làm như thế. Nếu không có nó thì chúng ta phải viết khá là nhiều html. Tuy nhiên khi trực tiếp đối mặt với DOM thì mọi thứ sẽ không dễ dàng như vậy.

- Chúng ta đôi khi phải xem xét rằng, update or create. Đối với text input tag, nếu chúng ta tạo mới hoàn toàn thì sẽ bị mất đi sự kiện focus chẳng hạn. Tuy nhiên khi tạo mới thì JS có khả năng xử lý chuỗi rất nhanh giúp ta tiết kiệm được nhiều thời gian hơn.

- vDOM bước vào cuộc chơi. vDOM là thứ sẽ giúp các bạn kiểm tra rằng khi nào sẽ update DOM, và khi nào tạo ra. Việc còn lại của các bạn chỉ đưa cho chúng nó template và data là được

- Tất nhiên là chúng ta không thể so sánh tốc độ của vDOM với DOM được, vì vDOM chỉ là công cụ giúp chúng ta viết code đơn giản hơn, vDOM cũng sử dụng DOM để tạo ra View 

```js
// update
let btn = document.getElementById('btn')
btn.value = 'hihi'

// create 
let btnCont = document.getElementById('btn-cont')
btn.value = `<input type="button" value="hihi"/>`

```
https://medium.com/@hayavuk/why-virtual-dom-is-slower-2d9b964b4c9e

## Life Cycle
- React sử dụng vDOM để cho phép coders viết code dễ dàng hơn, đó là sự đánh đổi.
<img src="https://cdn-images-1.medium.com/max/1800/0*OoDfQ7pzAqg6yETH.">
- Một một node của vDOM của react là một Component
- 1 Component có 3 giai đoạn chính 
    - Mount  : tương ứng với việc component (node) được gán vào vDOM - được hiển thị
    - Update : dữ liệu ứng vớ component đó bị thay đổi, cần phải được chỉnh sửa 
    - Unmount: bị xoá khỏi vDOM
- render()             : Hàm được gọi mỗi khi component hoàn tất giai đoạn mount và update. Trả về view mới đã được update bởi vDOM
- ComponentDidMount    : Hàm này được gọi khi giai đoạn mount thành công, chỉ xảy ra 1 lần duy nhất
- ComponentDidUpdate   : Hàm này được gọi khi giai đoạn update thành công, xảy ra nhiều lần 
- ComponentWillUnmount : Hàm này được gọi khi giai đoạn unmount sắp sửa diễn ra, chỉ xảy ra 1 lần duy nhất

https://reactjs.org/docs/state-and-lifecycle.html

## FLUX
<img src="https://viblo.asia/uploads/436769b8-f60b-4fb0-99d0-3423dd2608c0.png">  
<img src="https://viblo.asia/uploads/91c984ab-c6fc-4b09-8427-33ec0968a687.png">  
<img src="https://images.viblo.asia/71fc0f22-1381-49df-8d5d-1314bd5c77a4.png">  
https://facebook.github.io/flux/docs/in-depth-overview

## Thinking Way In React
- Bởi vì sử dụng vDOM nên cách tư duy sẽ hơi khác biệt một chút, việc của chúng ta sẽ là định nghĩa view trông như thế nào và dữ liệu được đưa vào như thế nào mà thôi. Việc update đã có vDOM lo!

## List and Keys
- Khi sử dụng mảng để render ra nhiều phần tử cần thiết thì chú ý dùng thêm props 'key' để giúp vDOM của react kiểm tra và update dễ dàng hơn!

