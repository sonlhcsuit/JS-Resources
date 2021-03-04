``` javascript
    {
        let x = 30;
        {
            let y = 20;
        }
        console.log(x);
        console.log(y);
    }
```

Trong đoạn code trên, với `console.log(x)`, kết quả sẽ in ra được là `30`, tuy nhiên với `console.log(y)` chương trình sẽ báo lỗi.
Lý do là với `x`, việc khai báo biến này và truy cập nó (gọi `console.log(x)` được tính là truy cập) được diễn ra ở trong cùng một **Scope**, nên được JavaScript tính là hợp lệ.

Với biến **y**, việc khai báo biến này diễn ra ở scope nhỏ (trong cặp ngoặc nhọn), cho nên đến cuối **Scope** này, JavaScript sẽ tự động xoá đi biến y, trong khi việc truy cập (`console.log`) diễn ra ở **Scope** lớn hơn, nơi mà biến `y` được coi là không tồn tại bở JavaScript, nên sẽ bị JavaScript hiểu là lỗi. Trong trường hợp muốn sử dụng được `y`, cần để việc khai báo `let y` ở **Scope** lớn hoặc hoặc bằng với **Scope** có sử dụng đến biến này.

Ví dụ:

``` javascript
    {
        let x = 30;
        {
            let y = 20;
            console.log(y);
        }
        console.log(x);
    }
```

hoặc

``` javascript
    {
        let x = 30;
        let y = 20
        {
            console.log(y);
        }
        console.log(x);
    }
```