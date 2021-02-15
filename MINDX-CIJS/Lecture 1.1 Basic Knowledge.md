## Basic Knowledge 
- JSON vs XML : XML và JSON là kiểu định dạng dữ liệu thường được sử dụng để trao đổi thông tin trên web. Về XML thì khá giống HTML (cùng họ Markup Language). JSON thì khá giống Object và cả Array (javascript). Tuy nhiên key-value pair thì bắt buộc phải nằm trong dấu cặp dấu "

![image](https://www.1337pwn.com/wp-content/uploads/2017/09/json-vs-xml-which-format-to-use-for-your-api.png)

- localStorage: Đây là một cơ chế (mechanism) của trình duyệt cho phép một trang wev lưu trữ một số thông tin cơ bản (ví du: Thông tin người dùng đã đăng nhập,... ). Để sử dụng nó rất đơn giản, trong file *\*.js* , các bạn đã có sẵn một biến tên là *localStorage* chỉ việc sử dụng. Tuy nhiên sẽ có một vài chút rắc rối khi lưu dữ liệu trực tiếp trình duyệt.Các bạn có thể sử dụng các lệnh sau.  
```js
// Cú pháp này dùng để gán giá trị cho thuộc tính có key là "mykey"
// Không khuyến khích việc gán giá trị trực tiếp như thế này
// localStorage.mykey = 12 hoặc là localStorage["mykey"] = 12
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

Các bạn cũng có thể truy cập, kiểm tra, xoá, thêm trực tiếp localStorage thông qua trình duyệt.


Các bạn cũng có thể truy cập, kiểm tra xem 
Một object global, mỗi trang web (origin) mà các bạn truy cập đều có riêng có object này.
 Object có thể truy cập trực tiếp thông qua localStorage ở trong file .js. 
- callback - một hàm được truyền vào như là một tham số cho hàm khác. Thường mang ý nghĩa là action (hành động) sẽ được diễn ra ngay sau khi một sự kiện, thứ gì đó hoàn thành. (asynchronous)

- Khi có nhiều hành động diễn ra nối tiếp nhau thì việc lồng nhiều callback sẽ dẫn tới trường hợp callback hell (indentation càng ngày càng sâu), và khó đọc. Cần có một cơ chế khác giúp xử lý việc này. Promise bước vào cuộc chơi, Promise giúp giải quyết vấn đề callback hell(vẫn dùng callback nhưng indetation đẹp hơn bằng cách dùng method chaining ). Cặp từ khoá async await

- HTTP Verb: Những thao tác yêu cầu xử lý dữ liệu từ server. GET, POST, PUT, PATCH, DELETE 

- Request & Response: Cả 2 đều là những giao thức mạng http gồm các phần cơ bản sau: body, headers. Headers chứa các metadata về giao thức, body còn có thể hiểu là data mà giao thức đem theo (payload). Vài headers hay dùng như :
    - Content-Type
    - Accept
    - Access-Control-Allow-Origin
    - Authorization

- fetch: Cách đơn giản nhất để gửi một request tới cho người dùng từ client JS. Sử dụng tư tưởng promise hơn là tư tưởng callback-nest như XMLHttpRequest. Có thể dùng fetchOptions để tuỳ chỉnh headers, body, thao tác xử lý dữ liệu 

## Git 
- Git là công cụ quản lý version (version control) của code để giúp ta kiểm tra được các phiên bản, ai đã sửa gì, chỗ nào, thành cái gì. Git giúp chúng ta có thể khôi phục lại code cũ lỡ chẳng may có gì xảy ra 

- Một project cần set up một git repository. Github là một online repository, cho phép đồng bộ git repository (local) với online repository (được lưu trữ ở server)

- branch: Nhánh, dùng để phát triển tính năng, khi nào phát triển xong thì merge lại vào nhánh chính 
- .gitignore: Dùng để lưu những file mà git không cần quan tâm đến version của chúng

- Lưu lại một version (một commit)
- Nhảy nhánh

## NodeJS
- Node.js là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. Đơn giản hơn, JS chạy ở server thì cần có nodejs (runtime engine)

- NPM là chương trình quản lý thư viện (package manager) ngầm định trong môi trường Javascript Node.js. Bao gồm một trình gọi dòng lệnh (Command Line) từ máy khách Client với tên gọi là npm, và cơ sở dữ liệu trực tuyến chứa các gói public và private còn được gọi là npm registry. Npm registry được gọi từ npm client và trên web browser. Tất cả được quản lý trực tiếp từ NPM, inc.

- node_modules : chứa các file thư viện (rất nặng)

- package.json : metadata về node project

## setup 
```sh
$ npm install -g creat-react-app
$ create-react-app mindx-cijs
# npx create-react-app mindx-cijs
```

```sh
$ npm install -g firebase-tools
$ cd mindx-cijs
$ npm install --save firebase
```

- Lưu repository lên github 

Reference:  
* https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS