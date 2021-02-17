# Optional
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

---

## Reference:

* https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS