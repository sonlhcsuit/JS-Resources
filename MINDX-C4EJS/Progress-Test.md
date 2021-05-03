## Bài 1:
Viết hàm đảo ngược chuỗi và in ra kết quả.   
Đầu vào: str_input   
Đầu ra: chuỗi đã được đảo ngược  
Lưu ý: không sử dụng hàm reverse()   

```js
function reverse(str_inp){
    return ""
}
reverse("program") ➞ "margorp"
reverse("data") ➞ "atad"
```

## Bài 2:
Viết hàm với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa.  
Đầu vào: str  
Đầu ra: Chuỗi với ký tự đầu của mỗi từ (ngăn cách với nhau bởi khoảng trắng) được viết hoa.    
Lưu ý: các từ ngăn cách với nhau bởi khoảng trắng, bỏ qua các ký tự đặc biệt và dấu câu  

```js
function capitalize(str_inp){
    return ""
}
reverse("program developer") ➞ "Program Developer"
reverse("Computer science") ➞ "Computer Science"
reverse("this is Test") ➞ "This is Test"   
reverse("hello a") ➞ "Hello A” 
```

## Bài 3:
Viết hàm xóa các phần tử trùng của một mảng và in ra kết quả.   
Đầu vào: 1 mảng
Đầu ra: Mảng mới với các phần tử không trùng nhau  
Gợi ý: Có thể sử dụng hàm `includes` hoặc `indexOf`
```js
function unique(str_arr){
    return []
}
unique([“one”,”two”,”three”,”one”,”one”,”four”,”five”,”four”,”five”five”]) ➞ [“one”,”two”,”three”,”four”,”five”]
unique([1,2,3,3,4,5,4,4,4,5,5]) ➞ [1,2,3,4,5]
```

## Bài 4:
Viết hàm xác định một số được tạo nên từ tất cả chữ số chẵn hay không?
Đầu vào: 1 mảng các số
Đầu ra: Mảng mới với số chỉ được tạo nên từ các số chẵn

```js
function allEven(inp_arr){
    return []
}
allEven([2, 4 , 6, 642, 13, 6, 863, 92]) ➞ [2, 4 , 6, 642, 6]
allEven([12, 234, 8, 20, 7896]) ➞ [8, 20]
```

## Bài 5:
Viết hàm kiểm tra ngày tháng năm (chuỗi dạng dd/mm/yyyy) do người dùng nhập vào.
- Kiểm tra xem ngày tháng năm đó có hợp lệ hay không?
Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28

- Trả về ngày tiếp theo của một ngày hợp lệ, nếu input là một ngày không hợp lệ thì trả về chuỗi "00/00/0000"
Lưu ý: Không dùng `Date`

```js
function isValidDate(date_str){
    return true
}
isValidDate('30/04/2021') ➞ true
isValidDate('29/02/2021') ➞ false

function getNextDate(date_str){
    return ""
}
isValidDate('30/04/2021') ➞ "01/05/2021"
isValidDate('29/02/2021') ➞ "00/00/0000"
```
Lưu ý: có thể tái sử dụng code của hàm `isValidDate` để hoàn thành `getNextDate`

## Bài 6:
Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).


