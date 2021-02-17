# Basic Knowledge 
## JSON vs XML
- XML và JSON là kiểu định dạng dữ liệu thường được sử dụng để trao đổi thông tin trên web. Về XML thì khá giống HTML (cùng họ Markup Language). JSON thì khá giống Object và cả Array (javascript). Tuy nhiên key-value pair thì bắt buộc phải nằm trong dấu cặp dấu ". JSON là một **chuỗi** (string)

<img src="https://www.1337pwn.com/wp-content/uploads/2017/09/json-vs-xml-which-format-to-use-for-your-api.png" alt="JSON vs HTML">

- Hiện nay JSON là định dạng dữ liệu để được sử dụng rộng rãi khi truyền tải dữ liệu qua mạng (ít nhất là trong lĩnh vực lập trình web). Các lập trình viên nhận, xử lý, truyền tải dữ liệu dạng JSON nhanh, thuận tay, dễ dàng hơn là XML. Một built-in object của Javascript có thể giúp ta xử lý dữ liệu dạng JSON là *JSON*
```js
let person = {
    name:'Hoang Son',
    class:'CIJS-DXX',
}
// JSON.stringify : Hàm encode một Object của Javascript thành dữ liệu dạng JSON (tức là string)
let person_as_JSON = JSON.stringify(person)
console.log(person_as_JSON) 
//`{"name":"Hoang Son","class":"CIJS-DXX"}` 
// Lưu ý là dấu ` ` đại diện cho một chuỗi.

// JSON.stringify : Hàm decode  dữ liệu dạng JSON thành một Object của Javascript 

let person_as_Object = JSON.parse(person_as_JSON)
console.log(person_as_Object) 
// Bây giờ thì nó là Object - Dễ dàng xử lý chỉ bằng việc "chấm"
```
---

## localStorage
- Đây là một cơ chế (mechanism) của trình duyệt cho phép một trang wev lưu trữ một số thông tin cơ bản (ví du: Thông tin người dùng đã đăng nhập,... ). Để sử dụng nó rất đơn giản, trong file *\*.js* , các bạn đã có sẵn một biến tên là *localStorage* chỉ việc sử dụng. Tuy nhiên sẽ có một vài chút rắc rối khi lưu dữ liệu trực tiếp trình duyệt.Các bạn có thể sử dụng các lệnh sau.  
```js
// Cú pháp này dùng để gán giá trị cho thuộc tính có key là "mykey"
// Không khuyến khích việc gán giá trị trực tiếp như thế này
// localStorage.mykey = 12 
// hoặc là 
// localStorage["mykey"] = 12
localStorage.setItem('mykey',12)
localStorage.setItem('mykey',19)
localStorage.setItem('mykey','?????')
// Cú pháp này dùng để lấy giá trị của thuộc tính có key là "mykey"
localStorage.getItem('mykey')

// Lưu ý: Các bạn không thể gán giá trị là mảng hay object được!!! 
localStorage.setItem('mykey',[1, 2, 3, 4]) // Wrong 
// Các bạn phải mã hoá (encode) thành dạng chuỗi bằng cách sử dụng đối tượng JSON như thế này
localStorage.setItem('mykey',JSON.stringfy([1, 2, 3, 4]))
// Khi sử dụng các mã hoá này thì tương tự khi các bạn lấy data ra (mà đã mã hoá) thì phải làm như thế này 
let data = JSON.parse(localStorage.getItem('mykey')) 
// Nếu các bạn không dùng JSON.parse thì chỉ nhận lại được một chuỗi như thế này "[1, 2, 3, 4]"
```

<img src="../sources/CIJS-Lecture 1.1.png" alt="localStorage">

---

## callback
- Để có thể hiểu được callback, đầu tiên các bạn phải nắm một số khái niệm về hàm. Một số tài liệu có thể tham khảo: 
    - https://developer.mozilla.org/vi/docs/Web/JavaScript/Guide/Functions
    - https://www.w3schools.com/js/js_functions.asp

- Một function sẽ một tên hàm độc nhất, nhằm để gọi hàm - thực hiện đoạn code mà chúng ta đã khai báo. Đặc điểm của tên hàm là nó cũng là một identity - một định danh. Khi một hàm được truyền vào hàm khác bằng định danh của nó thì được gọi là callback.

- Cụ thể hơn, trong javascript thì hàm được xem là đối tượng (object - có thể truy cập thông qua tên hàm, tương tự như tên biến). Do đó, các hàm có thể lấy các hàm khác làm đối số (tất nhiên chúng ta cũng có thể return một hàm). Thì những hàm được dùng làm đối số này được gọi là callback

```js
// Khai báo function có tên là sayHi
function sayHi(){
    console.log('Hi, you clicked me!')
}
// addEventListener là một hàm, và nó nhận vào một hàm khác thông qua định danh - cụ thể ở đây là sayHi
// như vậy thì sayHi là một callback
let btn = document.getElementById('btn').addEventListener('click',sayHi)

// Đôi khi, chúng ta không cần thiết phải dặt tên cho các hàm callback, vì dài dòng nên chúng ta sẽ
// khai báo trực tiếp luôn như thế này!

let btn = document.getElementById('btn').addEventListener('click',function (){
    console.log('you clicked me')
})
// Lúc này thì hàm vô danh này được gọi là callback 

// Những hàm nhận vào một callback, thì sẽ được gọi với tên là Higher Order Function - HOF
// addEventListener là một HOF , ngoài ra .map , .forEach, .filter cũng là một HOF 
// callback được gọi như thế nào, sẽ tuỳ thuộc vào HOF, thông thường thì sẽ được gọi cuối hàm HOF
// chúng ta cũng khai báo được parameter cho hàm callback, tuy nhiên việc truyền các đối số
// vào như thế nào thì vẫn phải dựa vào HOF

```

- callback là thành phần rất quan trọng của JS, gần như rất khó để thay thế, tác vụ đơn giản nhất của callback là sẽ thực hiện một chức năng nào đó (cập nhật giao diện chẳng hạn) khi người dùng thực hiện một event nào đó.

- Một callback có thể nhận vào một callback được không? YES. Và sẽ trông như thế này 

```js
function doSomeStuff(callback){
    let stuff = Math.random()*100
    callback(stuff)
}

doSomeStuff(function(number){
    console.log(number)

    doSomeStuff(function(a){
        console.log(a)
        console.log(`Area of circle with Diameter ${a} is:`,a*3.14)
    })
})
// Và tưởng tượng xem, sau khi tính xong diện tích hình tròn, ta cần tính vài thứ nữa thì sao =>
// lồng nhau, more tabs, và việc này gọi là callback hell 
```

<img src="https://miro.medium.com/max/1200/1*sOy11ZsU1ijCSjZwx8ZzGQ.jpeg" alt="cb hell">

- Tại sao lại có callback hell? Chúng ta thường xuyên phải xử lý những dữ liệu đến ngẫu nhiên, không phải tuần tự (chạy 1 lần là xong), thông thường chúng ta chẳng biết dữ liệu đến khi nào (ít nhất thì biết dữ liệu sẽ đến dưới dạng gì - tức là biết các property). Chúng ta phải "tính trước" cách xử lý dữ liệu => sử dụng callback. Thực tế thì việc xử lý yêu cầu nhiều về phần logic , không chỉ đơn giản như log vài thứ ra console dẫn đến viết nhiều code, hiển nhiên không thể viết mọi thứ vào 1 callback được (dài và lan man,khó đọc, khó hiểu, khó debug,..). Vậy nên sẽ chia ra từng công đoạn, mỗi công đoạn sẽ dùng kết quả của công đoạn trước để xử lý, và thế là callback hell xuất hiện

- Vậy chúng ta làm sao để khắc phục callback hell? Tự [google](https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/) nhé!

---

## Promise 
- Được xây dựng nhằm giải quyết vấn đề callback-hell. Nếu có một cách nào đó có thể dễ dàng quản lí việc các callback được gọi theo thứ tự nhất định thì tốt quá. callback hell khó đọc (indentation càng ngày càng sâu dựa theo độ sâu) nhưng với Promise thì khác, sẽ dễ hơn (hoặc ít nhất là một chút)

```js
// Một Promise sẽ có 3 trạng thái:pending - đang chờ, fulfilled - đã xong, rejected - có lỗi
// Khai báo Promise, executor là một hàm callback có 2 giá trị tham số đầu vào (resolve,reject)
// resolve dùng để trả về kết quả thành công
// reject  dùng để báo lỗi
let myPromise = new Promise(executor)

// Hãy bắt đầu với thực tế nào

let yourPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if (Math.random()*100 > 40){
            let message = 'You have waited for me 5 seconds, lets go!' 
            resolve(message)
            // 50% thành công và 50% thất bại 
        }else{
            let message = 'You have waited for me 5 seconds, but I cant be with you!'
            reject(new Error(message))

        }
    },0)
    // chờ 5 giây , sau đó trả về lời nhắn 
})
.then((message)=>{
    console.log(message)
    return new Date().toTimeString()
    // Giá trị return ở đây, mặc định sẽ là arguments cho .then kế tiếp 
})
.then((time)=>{
    // .then phía trên, ta return thời gian khi mọi thứ hoàn thành, nên ta sẽ truy cập được giá trị đó thông qua biến time 
    console.log(`Finish at ${time}`)
})
.catch(error=>{
    console.log(error.message)
})
.finally(()=>{
    console.log('Everything is done!')
})

```

- Tham khảo thêm ở [google](https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Promise) nhé!

- Như vậy thì callback hell ở phía trên sẽ được "viết lại" như thế này dễ xử lý hơn
```js
let a = new Promise ((resolve,reject )=>{
    let resultFromA = '???'
    resolve(resultFromA)
})

a.then(resultFromA=>{
    // process
    return resultFromB
})
.then(resultFromB=>{
    // process resultFromC
})
...
.then(resultFromF=>{
    console.log(resultFromF)
})
```
---

## async - await   

callback, promise là những cách xử lý bất đồng bộ của javascript. Ngoài ra còn cách xử lý bằng cách dùng cặp từ khoá: async - await nữa(tra [google](https://viblo.asia/p/giai-thich-ve-asyncawait-javascript-trong-10-phut-1VgZvBn7ZAw) để biết thêm chi tiết)

---

## HTTP Message & fetch
- Server (Máy chủ) và Client (Máy khách) trao đổi thông tin với nhau thông qua internet bằng cách sử dụng HTTP Message (HTTP protocol) gồm một cặp **Request** và **Response**. Thông thường client sẽ gửi một request tới server, server đáp ứng yêu cầu và trả về các dữ liệu cần thiết bằng một response. Cả 2 gồm những phần quan trọng sau : **body** - nơi chứa thông tin truyền tải (data), *headers* - chứa các mô tả về request, vài headers hay dùng như :
    - Content-Type
    - Accept
    - Access-Control-Allow-Origin
    - Authorization

- Chi tiết hơn về HTTP hoạt động như thế nào thì cũng tra [google](https://vi.wikipedia.org/wiki/Hypertext_Transfer_Protocol) luôn nhé!
- **fetch** là cách đơn giản nhất để gửi một http request từ phía client, promised-base (nền tảng là promise => phải biết xài promise ). Có thể dùng fetchOptions (tra [google](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) ) để tuỳ chỉnh headers, body, verb (GET, POST)

---

## Reference:  
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
* https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
* https://stackoverflow.com/questions/22424705/i-dont-understand-json-and-when-im-supposed-to-use-it-care-to-explain
* https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
* https://developer.mozilla.org/en-US/docs/Web/HTTP