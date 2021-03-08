## C4E JS - Student book

### I. ĐỐI TƯỢNG LÀ GÌ? (OBJECT)
**1. Giới thiệu**
-   Hãy nhìn vào **Array** sau:
    ``` javascript
        let person = ["Quan", 22, "Ha Noi", 170, 60, 96, 5];
    ```

-   Có phải bạn đang thắc mắc về ý nghĩa của một số phần tử trong **Array person**? Ví dụ như các con số 60, 96, 5 mang ý nghĩa gì?

&rarr; Đây chính là nhược điểm khi sử dụng **Array** để lưu trữ dữ liệu. Giả sử một ngày nào đó bạn phải phát triển tiếp phần code đang còn dang dở của đồng đội, khi tiếp nhận loại dữ liệu như trên, bạn sẽ rất mất thời gian, thậm chí là không thể tìm ra ý nghĩa của các loại dữ liệu trên.

&rarr; **Object** được sinh ra để giải quyết vấn đề này.

**2. So sánh**

-   Cùng nhìn vào 2 **Array** sau đây:  
    ``` javascript
        let monAn = ["com", "thit", "ca", "trung", "rau"];
        let person = ["Quan", 22, "Ha Noi", 170, 60, 96, 5];
    ```
-   Tại sao ở chương trước khi học về Array, nhìn vào **monAn**, bạn lại cảm thấy không hề khó hiểu?

&rarr; Lý do là với **monAn**, các phần tử bên trong nó đều **mang cùng một ý nghĩa** là **món ăn**. Còn với **person**, mặc dùng lưu trữ thông tin xoay quanh về 1 người, nhưng mỗi phần tử mang một ý nghĩa khác nhau.

&rarr; **Object** được sử dụng để lưu trữ những dữ liệu như **person**.

&rarr; Vậy đứng trước một dữ liệu, nếu là để chứa những phần tử mang cùng một ý nghĩa, bạn nên sử dụng **Array**, còn để chứa những phần tử khác nhau về ý nghĩa, hãy chọn **Object**

**3. Khái niệm**
-   **Object** là một phương pháp dùng để lưu trữ nhiều dữ liệu trong một biến.

-   **Object** được dùng để lưu trữ dữ liệu, vậy nên **Object** cũng được tính là 1 **Kiểu Dữ Liệu**.

**4. Cú pháp**
``` javascript
    let person = {
        name: "Quan",
        age: 22,
        location: "Ha Noi",
        height: 170,
        weight: 60
    }
```

-   Nhìn vào đoạn code trên, bạn đã dễ dàng hiểu ngay được ý nghĩa cụ thể của từng giá trị.

-   **person** được gọi là một **Object**.

-   Mỗi một thông tin bên trong **person**  bao gồm 2 phần là **property** và **value**. Bên trái là **property**, bên phải là **value**. Mỗi một thông tin như vậy còn gọi là **một cặp property, value**. **Mỗi cặp property, value** được ngăn cách nhau bởi dấu phẩy (,). Trong đoạn code trên:
    -   **name** là **property**.  
        **"Quan"** là **value**.
    
    -   **age** là **property**.  
        **22** là **value**.

    -   **location** là **property**.  
        **"Ha Noi"** là **value**.

    -   **height** là **property**.  
        **170** là **value**.

    -   **weight** là **property**.  
        **60** là **value**.

### III. CÁC THAO TÁC VỚI ĐỐI TƯỢNG (OBJECT)

-   Cũng giống như **Array**, chúng a sẽ cần phải học 4 kỹ năng cơ bản bao gồm **Create**, **Read**, **Update**, **Delete** **(CRUD)** để có thể làm việc thành thạo được với **Object**

**1. Create**  
-   Cú pháp thêm mới một thông tin, hay còn gọi là thêm 1 cặp **property**, **value** vào Object như sau:  
    ``` javascript
        let person = {
            name: "Quan",
            age: 22,
            location: "Ha Noi",
            height: 170,
            weight: 60
        }
        
        person.yearOfBirth = 1996;
    ```

-   Sau khi thực hiện câu lệnh **person.yearOfBirth = 1996**, **object person** sẽ có thêm 1 cặp **property**, **value** là **yearOfBirth: 1996**

***Bài tập***:  
-   Tạo ra một object chứa thông tin về cầu thủ Cristiano Ronaldo, bao gồm **tên**, **năm sinh**, **quốc tịch**. Link tham khảo: https://vi.wikipedia.org/wiki/Cristiano_Ronaldo

-   Hỏi người dùng có muốn nhập thêm thông tin của cầu thủ không bằng cách nhập "Y" hoặc "N".

-   Nếu người dùng nhập "Y", hỏi tiếp người dùng muốn thêm thông tin gì, giá trị cụ thể là gì? Sau đó thêm thông tin người dùng nhập vào object ban đầu.

-   Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"


**2. Read**

-   Nếu như **Array** được **Truy cập** thông qua **chỉ số**, thì **Object** sẽ được **Truy cập** thông qua **property**.

-   Ví dụ: 
    ``` javascript
        let person = {
            name: "Quan",
            age: 22,
            location: "Ha Noi",
            height: 170,
            weight: 60
        }
        
        console.log(person.age) // 22
    ```

    -   Dấu chấm (.) ở câu lệnh **person.age** có thể hiểu là **"của"**. 
    -   **person.age** nghĩa là lấy ra giá trị tương ứng với **property** **age** của object **person**.

**3. Update**
-   Quy tắc giống với **Array**, đơn giản là truy cập vào phần tử muốn thay đổi, sau đó gán cho nó một giá trị mới, như cách bạn đặt giá trị cho biến.

-   Cú pháp:  
    ``` javascript
        let person = {
            name: "Quan",
            age: 22,
            location: "Ha Noi",
            height: 170,
            weight: 60
        }
        
        person.name = "Don";
    ```

***Bài tập***:  
-   Tạo ra một object chứa thông tin về cầu thủ Cristiano Ronaldo, bao gồm **tên**, **năm sinh**, **quốc tịch**.

-   Cập nhật toàn bộ thông tin trên thành thông tin của cầu thủ Lionel Messi. Link tham khảo: https://vi.wikipedia.org/wiki/Lionel_Messi

**4. Delete**
-   Cú pháp xóa một cặp **property**, **value** vào Object như sau:  

    ``` javascript
        let person = {
            name: "Quan",
            age: 22,
            location: "Ha Noi",
            height: 170,
            weight: 60
        }
        
        delete person.age;
    ```

-   Câu lệnh **delete person.age** được giải thích như sau: xóa **(delete)** đi thông tin có **property** là **age** của **object person**.

***Bài tập:***  
-   Tạo ra một object chứa thông tin về cầu thủ Cristiano Ronaldo, bao gồm **tên**, **năm sinh**, **quốc tịch**.

-   Hỏi người dùng có muốn xóa thông tin nào của cầu thủ không bằng cách nhập "Y" hoặc "N".

-   Nếu người dùng nhập "Y", hỏi người dùng thông tin muốn xóa, tiến hành xóa thông tin được chọn.

-   Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"

### III. BÀI TẬP

Tạo ra một object như hình sau:

![Object-Exercise](../images/object/object_ex.png)  

-   Thêm một **property** với tên "pocket", với **value** là một **Array** bao gồm các phần tử "seashell", "strange berry", và "lint".

-   Xóa phần tử "dagger" trong **Array** của **property** backpack.

-   Cộng thêm 50 vào giá trị của **gold** (Giá trị sau khi cộng là 550).

-   Xóa toàn bộ thông tin liên quan đến **pouch**.

*Bài tiếp theo [Hàm (Function) - Part 1](../function/function-part1.md)*