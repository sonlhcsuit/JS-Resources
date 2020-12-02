## CORS 
- CORS là viết tắt của từ (Cross Origin Resources Sharing). Là một cơ chế sử dụng header server (back-end) xác định một request tới server thuộc origin (domain, scheme, port) nào ? Điều này dẫn tới việc có chấp nhận request từ một origin khác hay không? 

- Mỗi khi chúng ta (dev) gửi một request tới cho một server nào đó mà khác origin (domain, scheme,port ) hiện tại. Trình duyệt trước tiên sẽ gửi một ``pre-flight`` request tới cho origin để confirm. Nếu được thì sẽ gửi request của chúng ta, nếu không thì sẽ bị chặn!!! (chặn ở client). Nếu sử dụng ``opaque`` request (mode:'no-cors') thì cái bạn nhận được chỉ là response rỗng không có giá trị. 

- CORS là một cơ chế của trình duyệt web để bảo vệ người dùng tránh việc XSS (Cross Site Scripting). Giả sử bạn đang online facebook. Bạn cũng đồng thời vào vài trang web-mà-ai-cũng-biết-là-web-gì-đấy có chứa đoạn script có khả năng gửi request lên facebook để lấy thông tin. Vậy thì làm sao facebook biết được đoạn script đó do họ viết hay người khác viết? Và liệu rằng code từ một domain khác có ý đồ gì không? Người dùng có thực sự đang lấy dữ liệu không? Tất nhiên là không thể xác định được. Cần phải căn cứ vào origin (nguồn của request để xác định liệu rằng đây có phải là request hợp lệ)

- Tuy nhiên thì đối với Front-end Developer thì đây là cái lỗi đẫm máu nhất luôn. Gặp nó thì chỉ có cứng họng khóc huhu chứ chả thể làm được gì. 

- Một vài cách (có thể, có khả năng) fix được lỗi
    - Sử dụng proxy 
    - Sử dụng extension Moesif 
    - Chắc cú nhất sửa server backend 
    - Dùng server gọi trung gian ( nếu bên thứ 3 không hỗ trợ )


## Basic Knowledge 
- JSON vs XML : XML và JSON là kiểu định dạng dữ liệu thường được sử dụng để trao đổi thông tin trên web. Về XML thì khá giống HTML (cùng họ Markup Language). JSON thì khá giống Object và cả Array (javascript). Tuy nhiên key-value pair thì bắt buộc phải nằm trong dấu cặp dấu "

- localStorage: Một object global, mỗi trang web (origin), đều có object này, có thể truy cập trực tiếp thông qua localStorage ở trong file .js. Đây là một cơ chế (mechanism) của trình duyệt cho phép lưu trữ một số thông tin cơ bản.

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