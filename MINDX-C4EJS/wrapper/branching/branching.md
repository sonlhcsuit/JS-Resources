## C4E JS - Student book

### I. CÂU LỆNH RẼ NHÁNH LÀ GÌ? (BRANCHING STATEMENT)
**1. Giới thiệu**

-   Ngay từ chương đầu tiên, chúng ta đã đi vào học ngay vào ngôn ngữ lập trình, mà chưa hề quan tâm đến khái niệm **Lập Trình**.

-   **Lập trình** là công việc tạo ra những phần mềm, web, app, ứng dụng di động nhằm giảm tải sức lao động của con người. Lập trình viên là những người tạo ra những ứng dụng như vậy.

**2. Ví dụ**
-   Khi lập trình ra một phần mềm, người lập trình sẽ phải lường trước được tất cả các tình huống mà người dùng sẽ thực hiện trong quá trình sử dụng sản phẩm của mình. Ví dụ dưới đây mô phỏng 1 chương trình kiểm tra xem người dùng đủ tuổi để lái xe ô tô chưa :  

    -   A và B cùng sử dụng một chương trình. Chương trình này có nhiệm vụ nhận số tuổi của người dùng nhập vào:
        -   Nếu số tuổi lớn hơn 18 &rarr; thông báo "Bạn đủ tuổi lái ô tô"
        -   Nếu số tuổi nhỏ hơn 18 &rarr; thông báo "Bạn chưa đủ tuổi lái ô tô"

    -   Làm sao để người lập trình biết được số tuổi mà người dùng nhập vào lớn hơn hay nhỏ hơn 18 để hiện lên màn hình thông báo phù hợp?


&rarr; **Câu lệnh rẽ nhánh (Branching Statement)** sinh ra để đáp ứng nhu cầu này của người lập trình.

### II. CÚ PHÁP

**1. Câu lệnh if**  

``` javascript
    if (dieuKien1) {
        // code 1
    }
```

-   Nếu **dieuKien1** đúng, thì phần **code 1** sẽ được thực hiện. Ví dụ:

    ``` javascript
        let age = prompt("Your age? ")
        
        if (age < 10) {
            console.log("You are Baby!");
        } 
    ```

-   Đoạn code trên giải nghĩa như sau:  
    -   Cho người dùng nhập tuổi, số tuổi mà người dùng nhập sẽ được lưu vào biến **age**.

    -   **Nếu** (**if**) age nhỏ hơn 10 thì màn hình sẽ in ra "You are Baby!"

**2. Câu lệnh else if**
``` javascript
    if (dieuKien1) {
        // code 1
    } else if (dieuKien2) {
        // code 2
    }
```
-   Nếu **dieuKien1** của **if** sai, thì **dieuKien2** của **else if** sẽ được xét, nếu **dieuKien2** đúng, phần **code 2** **nằm trong else if** sẽ được thực hiện. Ví dụ:
    ``` javascript
        let age = prompt("Your age? ")
        
        if (age < 10) {
            console.log("You are Baby!");
        } else if (age < 18) {
            console.log("You are Teenager");
        }
    ```

-   Đoạn code trên giải nghĩa như sau:  
    -   Cho người dùng nhập tuổi, số tuổi mà người dùng nhập sẽ được lưu vào biến **age**.

    -   **Nếu** (**if**) age nhỏ hơn 10 thì màn hình sẽ in ra "You are Baby!"

    -   **Còn nếu** (**else if**) age không nhỏ hơn 10, nhưng age nhỏ hơn 18 thì màn hình sẽ in ra "You are Teenager!"

**3. Câu lệnh else** 
``` javascript
    if (dieuKien1) {
        // code 1
    } else if (dieuKien2) {
        // code 2
    } else {
        // code 3
    }
```
-   Nếu **dieuKien1** của **if** và **dieuKien2** của **else if** đều sai, thì phần **code 3** **nằm trong else** sẽ được thực hiện. Ví dụ:
    ``` javascript
        let age = prompt("Your age? ")
        
        if (age < 10) {
            console.log("You are Baby!");
        } else if (age < 18) {
            console.log("You are Teenager");
        } else {
            console.log("You are Adult");
        }
    ```

-   Đoạn code trên giải nghĩa như sau:  
    -   Cho người dùng nhập tuổi, số tuổi mà người dùng nhập sẽ được lưu vào biến **age**.

    -   **Nếu** (**if**) age nhỏ hơn 10 thì màn hình sẽ in ra "You are Baby!"

    -   **Còn nếu** (**else if**) age không nhỏ hơn 10, nhưng age nhỏ hơn 18 thì màn hình sẽ in ra "You are Teenager!"

    -   **Những trường hợp còn lại** (**else**), màn hình sẽ in ra "You are Adult!"



***Lưu ý:*** **else** nghĩa là **Những trường hợp còn lại**, đã là **còn lại** thì sẽ không có bất kỳ một điều kiện nào đằng sau nó, đoạn code phía trong **else** chỉ được thực hiện khi điều kiện của **if** và **else if** đều sai


**4. Bài tập**  
1.  Cho người dùng nhập vào chiều cao, cân nặng. Tính ra chỉ số BMI dựa vào công thức, sau đó in ra thông báo tương ứng:  
    ``` javascript
        BMI = weight/(height*height)
        Trong đó:
        weight: cân nặng
        height: chiều cao (m)
        
        < 18.5: Gầy
        18.5 - 24.9: Bình thường
        25 - 29.9: Hơi béo
        30 - 34.9: Béo phì cấp độ 1
        35 - 39.9: Béo phì cấp độ 2
        > 40: Béo phì cấp độ 3
    ```

2.  Viết chương trình tính số nghiệm của phương trình bậc 2, dựa vào 3 số a, b, c mà người dùng nhập vào:  

    -   Nếu delta > 0, thông báo "Phương trình có 2 nghiệm phân biệt".

    -   Nếu delta < 0, thông báo "Phương trình vô nghiệm".

    -   Nếu delta = 0, thông báo "Phương trình có 1 nghiệm duy nhất".

*Bài tiếp theo [Mảng (Array)](../array/array.md)*