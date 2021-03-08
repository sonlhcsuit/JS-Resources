# Overview
## Internet là gì? Web là gì? 

> Internet hay Mạng là một hệ thống thông tin toàn cầu có thể được truy nhập công cộng gồm các mạng máy tính được liên kết với nhau. Hệ thống này truyền thông tin theo kiểu nối chuyển gói dữ liệu (packet switching) dựa trên một giao thức liên mạng đã được chuẩn hóa (giao thức IP). Hệ thống này bao gồm hàng ngàn mạng máy tính nhỏ hơn của các doanh nghiệp, của các viện nghiên cứu và các trường đại học, của người dùng cá nhân và các chính phủ trên toàn cầu, được liên kết bởi một loạt các công nghệ mạng điện tử, không dây và mạng quang. Internet mang theo một loạt các tài nguyên và dịch vụ thông tin, chẳng hạn như các tài liệu và ứng dụng siêu văn bản được liên kết với nhau của World Wide Web (WWW), thư điện tử, điện thoại và chia sẻ file.

- Một cách nói đơn giản là nhiều máy tính được liên kết lại với nhau, tạo nên mạng (network). Những network được liên kết với nhau được gọi là Internet. Công dụng đơn giản nhất của network(hay internet) là chia sẻ tài nguyên (các file văn bản, video, hình ảnh,...). WWW là một dịch vụ của Internet nhằm chia sẻ thông tin từ một máy tính này sang một máy tính khác. Máy tính chia sẻ nguồn tài nguyên được gọi là server và máy nhận được nguồn tài nguyên được gọi là client.

- Web (WWW) là một hệ thống tin, mà mỗi tài liệu được xác định bằng cách sử dụng URL ( Uniform Resource Locators). Mỗi document (tài liệu) đều phải ở dưới dạng hypertext (siêu văn bản), được truyền tải bằng việc sử dụng HTTP (HyperText Transper Protocol).

- Đây là các thành phần cơ bản của URL
<img src="../sources/C4EJS-Lecture 1.1.png" alt="URL">

---

## Cách phát triển một trang web (ứng dụng web)
- Web có 2 loại: Static & Dynamic 
- Static web: tất cả thông tin được lưu trong các document, khi nhận được yêu cầu cung cấp thì web server sẽ dùng giao thức http để gửi tới cho web client (web browser). Nội dung không thay đổi, nhanh, dễ phục vụ . Tuy nhiên khó cập nhật, phát triển, sửa lỗi.

- Dynamic web: khi nhận được yêu cầu cung cấp thì web server sẽ thực hiện việc truy xuất dữ liệu từ fs (file system - hệ thống file), db (database - cơ sở dữ liệu) và thực hiện một số tính toán logic để tạo ra một document mới có chứa thông tin cần thiết (giao dịch, tài khoản cá nhân,...). Cập nhật nhanh chóng, nhiều tiện ích được tích hợp, dễ dàng phát triển. Tuy nhiên khó mà so sánh được về mặt tốc độ đối với static web.

- Đây là một ví dụ về dynamic web
<img src="https://reinvently.com/wp-content/uploads/2019/08/scheme.jpg" alt="web architeture">

- Một ứng dụng web, đa phần đều là dynamic web thường được chia làm 2 phần:
    - Front-end: Thông tin và cách chúng được hiển thị (bố cục) ở client, cần thẩm mỹ 
    - Back-end : Xử lý logic dựa trên yêu cầu của client và các dữ liệu liên quan

- Dựa vào từng thành phần mà sẽ có 2 vị trí quan trọng khi phát triển một ứng dụng web FE Developer & BE Developer. Fullstack Developer cũng hay được nói tới, tuy nhiên nó chỉ là từ được sử dụng ngầm chỉ developer có rất nhiều khả năng ( ở phần FE & BE và một số kỹ năng khác: hosting, testing, ...)

- Ở trong khoá học này sẽ tập trung kỹ năng phát triển phần Front-End
- Đọc thêm : https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works 

---

## Reference & More Resources: 
* https://vi.wikipedia.org/wiki/Internet
* https://nodejs.org/api/url.html
* https://www.geeksforgeeks.org/difference-between-static-and-dynamic-web-pages/