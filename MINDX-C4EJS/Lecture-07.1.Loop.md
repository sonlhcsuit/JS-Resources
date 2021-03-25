# Loop
- Khi đối mặt với bài toán thực tế, có rất nhiều tác vụ cần phải lặp đi lặp lại nhiều lần, mỗi lần lặp có thể khác nhau hoặc không. Thay vì copy một đoạn code thành nhiều lần rồi sửa chữa một chút thì ta có thể dùng vòng lặp đối với các tác vụ quen thuộc. Vòng lặp là một cấu trúc điều khiển, lặp đi lặp lại những đoạn code, lệnh cho tới khi đạt được điều kiện gì đó. 

---

## while 
- Thường được sử dụng để lặp đi lặp lại một khối lượng công việc nào đó, cho tới khi một điều kiện không còn đúng nữa.

```js
// while - là từ bắt buộc phải có
// chừng nào kết quả của condition expression thì hàm doSomething() sẽ lặp lại liên tục cho tới khi 
// condition expression trả về kết quả sai thì sẽ dừng lại
while ( condition ){
    // instruction
    doSomething()
    
}
// Một ví dụ
while ( isMarried() ){
    
    findSomeone()
}

```

---

## for 
- Vòng lặp for thường dùng để lặp khi số lần lặp đã được xác định. Còn vòng lặp while thì thường dùng đối với việc không thể xác định được số lần lặp 

```js
// for,() và 2 dấu chấm phẩy bắt buộc phải có đầy đủ đối với vòng lặp for cổ điển 
for (initialization;condition;update){

}
// initialization - biểu thức chỉ chạy một lần duy nhất khi vòng lặp bắt đầu, thông thường để khai báo biến điều khiển
// condition - Điều kiện của biến điều khiển, thông thường là kiểm tra xem đã đủ số lần lặp chưa
// update - sau mỗi lần lặp, biểu thức này sẽ được chạy sau cùng (hết đoạn code ở trong thân vòng lặp), thường dùng để cập nhật biến điều khiển tăng hoặc giảm

for(let i = 0;i <= 10;i=i+1){
    console.log(i+'th times I try to find a girlfriend!')
    findGirlfriend()
}
// Tìm bạn gái 11 lần! (tại sao lại 11 à, suy nghĩ đi nhé)
```

- Về cơ bản, vòng lặp for thường được sử dụng nhiều hơn vì tính chặt chẽ và có cấu trúc của nó. Các cách viết vòng lặp có thể chuyển đổi linh hoạt sang cho nhau (while, for,...) chỉ với một chút thay đổi!

---

# break & continue
- break : thoát khỏi vòng lặp ngay khi gặp lệnh này
- continue: thoát khỏi lần lặp hiện tại và bắt đầu lần lặp mới
- Một vài lỗi hay xảy ra khi thao tác với vòng lặp là lỗi lặp vô hạn. Phải luôn kiểm tra điều kiện lặp trước và đảm bảo nó không bao giờ luôn đúng !
```js
while(1==1) // Đây là điều kiện luôn đúng
while(true)
while(a=1)

```

---

## Exercise:
- Bài 1 - 5 ở file 02.2.Loops
---

## Reference & More Resources: 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration