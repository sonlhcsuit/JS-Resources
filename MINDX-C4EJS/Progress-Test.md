## Bài 1:
Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.   
Đầu vào: str_input   
Đầu ra: đảo ngược chuỗi   
Cho: str_input = "program"; kết quả: "margorp"
Cho: str_input = "data"; kết quả: "atad"
Lưu ý: không sử dụng hàm reverse()  

```js
function reverse(str_inp){
    return ""
}
reverse("program") ➞ "margorp"
reverse("data") ➞ "atad"
```

## Bài 2:
Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.  
Đầu vào: str  
Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.  
Cho "this is Test"; kết quả: "This is Test"   
Cho "hello a"; kết quả: "Hello A”   
Lưu ý: các từ ngăn cách với nhau bởi dấu cách, bỏ qua các ký tự đặc biệt và dấu câu  

```js
function capitalize(str_inp){
    return ""
}
reverse("program developer") ➞ "Program Developer"
reverse("Computer science") ➞ "Computer Science"
```

## Bài 3:
Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.   
Đầu vào: 1 mảng
Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau  
Ví dụ
Cho Arr=[“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]; In ra Arr=[“one”,”two”,”three”,”four”,”five”];
Cho Arr=[1,2,3,3,4,5,4,4,4,5,5]; In ra Arr=[1,2,3,4,5]
```js
function unique(str_inp){
    return ""
}
unique([“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]) ➞ [“one”,”two”,”three”,”four”,”five”]
unique([1,2,3,3,4,5,4,4,4,5,5]) ➞ [1,2,3,4,5]
```

## Bài 4:
Viết chương trình cho phép người dùng nhập vào ngày tháng năm (chuỗi dạng dd/mm/yyyy).
- Kiểm tra xem ngày tháng năm đó có hợp lệ hay không?
Ngày 30/4/2019 là ngày hợp lệ
Ngày 29/2/2019 là ngày không hợp lệ (2019 không phải năm nhuận)
Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
- Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
Ví dụ:
Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021
 
 
## Bài 4:
Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).

