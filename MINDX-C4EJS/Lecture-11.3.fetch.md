# fetch
## blocking I/O

- I/O ở đây nghĩa là input/output, blocking nghĩa là chặn. Tức là tất cả khi thực hiện thao tác nhập input/output thì cả chương trình sẽ bị block. Đến khi thao tác I/O được hoàn thành thì mới tiếp tục đoạn code dang dở (Ví dụ ở đây là sử dụng hàm prompt & alert)
- Điểm mạnh của blocking I/O là có thể đảm bảo các đoạn code được chạy theo đúng thứ tự, không có trường hợp chạy trước sai thứ tự đã được định sẵn.
- Không phù hợp đối với những trường hợp có *event* xảy ra trong tương lai (tính từ lúc chương trình chạy tới dòng cuối cùng của code)
- Việc chặn toàn bộ chương trình chỉ để đợi chờ I/O không ấn tượng, bởi vì có những đoạn code có thể chạy mà không cần dữ liệu từ I/O.

```js
function inp(){
    str = prompt()
    console.log(str)
}
setTimeout(inp,0)
console.log('Zigzag')
```

---

## asynchronous - event & callback
- Ngoại trừ I/O thì những hành động tương tác thông qua internet cũng cần phải chờ để có thể có được dữ liệu mình muốn sau một đỗ trễ nhất định.
- Việc sử dụng cơ chế bất đồng bộ giúp ta xử lý được các *event* xảy ra trong tương lai.
- Một hành động (function) chỉ xảy ra khi một event được kích hoạt (click,input,..) - event-driven paradigm.
- Cơ chế hoạt động chính các ngôn ngữ mang xu hướng event-driven là sẽ có một *main loop* kiểm tra tất cả các event. Khi nhận tính hiệu hoàn thành thì sẽ thực hiện *callback* tương ứng. Đây gọi là Event Loops
- event là những event mà người dùng thực hiện, ta cũng có thể tự phát triển event riêng dành cho bản thân
- callback là 1 function, là một những yếu tố cốt lõi của JS
- Một hành động bất đồng bộ được xem như sự kết hợp của một event và callback. Callback (có thể) sẽ được thực thi trong tương lai nếu tín hiệu từ event phát ra thành công
---

## promise
- promise là một class được tạo ra nhằm mục đích giúp xử lý những hành động bất đồng bộ. Promise gồm 3 trạng thái : 
    - fulfiled: mang ý nghĩa event đã được kích hoạt và callback sẽ được thực thi 
    - pending: không xác định, chưa nhận được tín hiệu từ event
    - rejected: event không được kích hoạt, callback không được chạy và báo lỗi
- Để tìm hiểu kỹ hơn về promise cũng như cách xử lý : tham khảo ở [đây](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).
---
## fetch
- fetch là một hàm giúp chúng ta thực hiện việc tạo một request tới một url nhất định
- built-in của hầu hết các browser hiện nay
- promise-base
---
## async - await
- Khi thực hiện việc tạo một *request* tới ứng dụng khác thông qua *url* và API. Đây là một hành động bất đồng bộ - bởi vì có dính líu tới internet, không chắc là lúc nào cũng thành công! Như vậy thì chúng ta cần phải chờ để khi có được *response* rồi mới có thể tiếp tục xử lý dữ liệu. Ta có thể sử dụng cách căn bản nhất là kết hợp event + callback bằng việc tự định nghĩa event sẽ được phát ra khi gửi một *request* hoặc đơn giản hơn là fetch kết hợp với *promise*. Promise khá khó để bắt đầu, thay vì đó cặp từ khoá *async* và *await* sẽ dễ tiếp cận hơn
- Chúng ta có một ứng dụng đơn giản là, mỗi khi người dùng bấm vào một cái nút thì sẽ hiển thị một hình ảnh của một con pokemon ngẫu nhiên. Chúng ta sẽ bắt tay vào việc sử dụng *PokéAPI* 

```js
let btn = document.getElementById('btn')
let host = 'https://pokeapi.co/api/v2/'
let endpoint = 'pokemon/'
let pokemon_name = 'pikachu'
```

```js
btn.addEventListener('click',function(e){
    let url = `${host}/${endpoint}/${pokemon_name}`
    console.log(url)
    let data = fetch(url)
    console.log(data)
    // ???
    // giá trị của data là một Promise ở trạng thái pending
    // như vậy thì làm sao được nhỉ?
})
```

```js

btn.addEventListener('click',async function(e){
    // sử dụng từ khoá async để biến function này thành một thao tác bất đồng bộ
    // await chỉ có thể sử dụng ở trong 1 thao tác bất đồng bộ
    // nhiệm vụ của await là chờ thao tác bất đồng bộ kia hoàn thành
    let url = `${host}/${endpoint}/${pokemon_name}`
    console.log(url)
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    // Như vậy thì mọi việc đã được giải quyết
    // Lưu ý await chỉ có hiệu lực khi đi kèm với async
})
```

---

## Reference & More Resources: 
- https://en.wikipedia.org/wiki/Callback_(computer_programming)
- https://en.wikipedia.org/wiki/Event_(computing)
- https://en.wikipedia.org/wiki/Event-driven_programming
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://betterprogramming.pub/should-i-use-promises-or-async-await-126ab5c98789
---
<!-- Navigator -->
<div>
<a href="Lecture-11.2.Networking.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="README.md">
    <img width=50 src="../sources/index.svg" >
</a>
<a href="Lecture-12.1.Simulation.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->