# API
## API

- API (Application Programming Interface) nghĩa là một giao diện lập trình ứng dụng. Định nghĩa và tên gọi của API khá là cứng nhắc, khó hiểu - tuy nhiên khi đã tiếp xúc với API thì bạn sẽ thấy nó rất là dễ dàng. Hãy tưởng tượng lại về thức các bạn học được - function. Tại sao lại cần function? Đơn giản là bạn có thể *tái sử dụng* lại đoạn code có chức năng nhất định mà không cần phải copy lại đoạn code đó, dán vào nơi cần sử dụng, đổi tên biến,... 
- Thay vào đó chúng ta *khái quát hoá* các công việc cần làm bằng *parameter, function body, returned value* để tiết kiệm thời gian của chúng ta (tránh việc lãng phí thời gian vào việc copy code)
- Vậy thì khi viết một chương trình, ta có thể sử dụng nhiều hàm của một thư viện khác để tiết kiệm thời gian của chúng ta (Math,JSON,các phương thức khi xử lý string, array, object,...) thay vì phải implement(cài đặt, viết code,... ) từ đầu bằng vòng lặp 
- Nhằm mục đích để có thể tiết kiệm thời gian, công sức, tuổi trẻ khi phát triển phần mềm thì ta có thể *integrate* các ứng dụng, program khác vào trong ứng dụng của mình
- Điều cốt lõi của API chính là sự giao tiếp giữa các ứng dụng với nhau - interface. Người dùng muốn giao tiếp, sử dụng máy tính thì sẽ cần GUI (Graphic User Interface - giao diện đồ hoạ). Còn giữa các ứng dụng với nhau thì sẽ thông qua API. API định nghĩa ra cách các *calls, request* được gọi, *data* sử dụng, các *rules* cần phải tuân thủ.
- Một ứng dụng muốn được các ứng dụng khác tích hợp vào (Ví dụ: paypal, applepay) thì cần phải thiết kế API (cách các *calls, request* được gọi, *data* sử dụng, các *rules* cần phải tuân thủ.). Một ứng dụng muốn tích hợp ứng dụng khác vào thì cần phải tìm hiểu về cách API của ứng dụng đó được thiết kế như thế nào, cần tuân thủ gì, ....
- Khi thiết kế API, thì sẽ có một vài tiêu chuẩn cần phải xem xét. Ta sẽ tìm hiểu về cách sử dụng REST API.

---

## REST
- REST là một chuẩn thiết kế API được sử dụng rộng rãi. 
<img src="../sources/C4EJS/C4EJS-Lecture-11.1.png" alt="dom">

- REST sử dụng giao thức http để trao đổi dữ liệu, yêu cầu một hành động nào đó từ một ứng dụng khác (web server cũng được xem là ứng dụng khác)

- Từ phía ứng dụng của mình, ta sẽ thực hiện một *request* tuân theo các quy tắc, gửi nó đi. Khi ứng dụng khác nhận được (ví dụ: webserver) thì sẽ thực hiện việc rút trích yêu cầu để xác nhận *request* hợp lệ và thực hiện yêu cầu đó và gửi trả lại một *response* theo đúng các quy tắc đã định ra. Lúc này ứng dụng của chúng ta sẽ nhận lại được *response* và xử lý!

- Khuyến khích tìm hiểu các nguồn tài liệu ở dưới 
---
## Reference & More Resources: 
- https://www.youtube.com/watch?v=kG-fLp9BTRo
- https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/
- https://www.mulesoft.com/resources/api/what-is-an-api
- https://www.altexsoft.com/blog/soap-vs-rest-vs-graphql-vs-rpc/
---
<!-- Navigator -->
<div>
<a href="Lecture-10.3.Navigating.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="README.md">
    <img width=50 src="../sources/index.svg" >
</a>
<a href="Lecture-11.2.Networking.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->