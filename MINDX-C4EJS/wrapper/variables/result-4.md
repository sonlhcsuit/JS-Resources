``` javascript
    function() {
        var x = 30;

        if (x > 10) {
            x = 5;
        }

        console.log(x);
    }
```

Giá trị của x trong đoạn code trên sẽ là 5. Vì biến x được khai báo với **var**, mang giá trị là 30. Giá trị của x lớn hơn 10, sau đó thay đổi giá trị của x thành 5. Câu lệnh cuối cùng ( console.log(x) ) in ra giá trị của x đã được thay đổi (5). Biến được khai báo với **var** có phạm vi truy cập xuyên suốt function chứa nó. 