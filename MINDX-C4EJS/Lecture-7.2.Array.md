# Array
## Array
- Khi lập trình, chúng ta phải lưu dữ liệu rất nhiều, và đa phần các dữ liệu đó cùng kiểu dữ liệu như lại mang một ý nghĩa khác nhau. Ví dụ: Doanh số bán hàng từng ngày trong tháng. Làm sao chúng ta có thể lưu trữ được các dữ liệu như vậy trong các ngôn ngữ lập trình.Cách đơn giản nhất là sử dụng biến. Đối với 1 tháng thì chúng ta có thể sử dụng 30 biến tương ứng với các ngày để lưu trữ
```js
let revenue_01 = 23
let revenue_02 = 45
// ...
let revenue_31 = 65


```
- Sử dụng cách làm này cho việc lưu trữ dữ liệu là một vấn đề nếu chúng ta muốn lưu doanh thu của cả năm (hoặc 10 năm) để tính toán.
- Sử dụng mảng. Mảng là tập hợp nhiều phần tử được lưu trữ lại thành cụm với nhau, có thể truy cập được những phần tử nhỏ hơn dựa trên **index**. Index của mảng trong javascript là zero-based (bắt đầu từ 0)

<img src="../sources/C4EJS-Lecture 7.1.jpg">

- Đối với Javascript thì có một vài điều cần lưu ý: Mảng có thể chứa nhiều phần tử khác kiểu dữ liệu với nhau (kể cả mảng).

```js
let my_array = [123, true, 'false', NaN, undefined, ['what', 'is' ,'this'] ] 
let our_array = []
// Khai báo một mảng bằng cặp dấu [ ], các phần tử ngăn cách với nhau bởi dấu ,

```

---

## Array manipulation
- Khi thực hiện các thao tác xử lý mảng thì ta có 3 việc hay làm nhất: Đọc, thêm, xoá, sửa

- Đối với việc đọc các phần tử con (element of array) thì index chính là cách duy nhất để có thể lấy thông tin

```js
let my_array = [123, true, 'false', NaN, undefined, ['what', 'is' ,'this'] ] 
console.log(my_array[0]*12)
// như vậy thì my_array[0] tương ứng với phần tử đầu tiên - 0 chính là index (mảng bắt đầu đánh chỉ mục cho các phần tử bằng 0)
// Lưu ý, index bắt buộc phải là số nguyên, không được phép là số thực (hay bất cứ thứ gì đó khác số nguyên!) thì sẽ ăn ngay 1 giá trị trả về undefined 

// Tương tự việc đọc, chúng ta cũng có thể cập nhật giá trị của một phần tử nhất định thông qua index 
my_array[5] = 'changed'
console.log(my_array)

// Có thể hiểu mảng là các biến độc lập với nhau, và chúng ta đánh số thứ tự cho chúng và sử dụng chung 1 tên!
// Bởi vậy nên chúng ta có thể truy cập và cập nhật các giá trị của từng phần tử của mảng như cách chúng ta làm với biến 
```

- Ngoài trừ việc lấy dữ liệu & cập nhật dữ liệu thì đôi khi chúng ta cũng có nhu cầu rằng là thêm/xoá dữ liệu
```js
let my_array = [123, true, 'false', NaN, undefined, ['what', 'is' ,'this'] ] 

// Để thêm dữ liệu thì ta sử dụng 2 hàm (chính xác hơn thì được gọi là method - prototype) là push & unshift

my_array.push('new_commer_last')        // thêm cuối
my_array.unshif('new_comment_first')    // thêm đầu	

// Đối nghịch với thêm thì chúng ta cũng có xoá

my_array.pop()		// Xoá cuối
my_array.shift()	// Xoá đầu

// Tuy nhiên chúng ta không có cách xoá /thêm phần tử bất kỳ mà không phải ở đầu hoặc cuối mảng!

// Lưu ý là không được xoá bằng từ khoá delete!

function insert(array,position,value){
	array.push(null)
	// Thêm phần tử 
	for(let i = array.length - 1;i > position ; i-- ){
		array[i] = array[i-1]
	}
	// "dời mảng" tạo thành chỗ trống, sau đó gán giá trị thừa vào
	array[position] = value
	return array
}

function remove(array,position){
	for(let i = position;i < array.length; i++ ){
		array[i] = array[i+1]
	}
	array.pop()
	return array
}

```


---

## Exercise:

---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
