## C4E JS - Student book

### I. VÒNG LẶP LÀ GÌ? (LOOPS)
**1. Giới thiệu**

-   Quay lại một chút với bài tập cuối cùng ở chương trước : cho phép người dùng nhập vào tên và tuổi của 5 người khác nhau. Sau đó in ra màn hình thông tin của 5 người đó. 

-   Có thể thấy khi đọc yêu cầu, chúng ta sẽ nghĩ ngay tới việc khai báo ra 5 cặp biến để lưu tên và tuổi của 5 người, kèm theo đó là 5 câu lệnh console.log() tương ứng, việc này tương đối mệt mỏi.

-   Nếu sửa yêu cầu 1 chút, thay vì 5 người sẽ là 10 người, 100 người, thì việc code ra chương trình như vậy vô cùng phiền phức và nhàm chán. Những bài toán trên thực tế còn nhiều hơn con số 100 người rất nhiều. Đây là lúc chúng ta phải cần đến **Loops (Vòng lặp)**.

**2. Khái niệm**

-   **Loops** là một phương pháp lập trình được sử dụng trong trường hợp bạn muốn chạy đi chạy lại cùng một đoạn code, giảm tải đáng kể khối lượng công việc phải làm.

-   Có 2 loại **loop** chính thường được sử dụng nhất, đó là **For Loop (Vòng lặp for)** và **While Loop (Vòng lặp while)**

-   **While Loop** sẽ được đề cập chi tiết ở các chương sau, trong chương này sẽ đề cập chủ yếu tới **For Loop**.

### II. CÚ PHÁP (Syntax)

**1. Cú pháp cơ bản**  

``` javascript
    for (bienKhoiTao; dieuKienLap; buocNhay) {
        // phần code của bạn 
    }
```

-   **bienKhoiTao**, **dieuKienLap** và **buocNhay** sẽ là những câu lệnh phù hợp, tương ứng với từng trường hợp cụ thể, được ngăn cách nhau bởi dấu chấm phẩy ( ; )

-   Phía bên trong cặp ngoặc nhọn ( { } ) sẽ là phần code bạn muốn chạy đi chạy lại.

-   Một **vòng lặp for** được viết ra đầy đủ với các câu lệnh tương ứng với cả 3 statement như sau:

``` javascript
    for (let i = 0; i < 10; i++) {
        // phần code của bạn
    }
```

-   Tạm thời bạn hãy chỉ tập trung vào con số **10**, còn lại tất cả những thứ khác bên cạnh số **10** sẽ được giải thích ở phần tiếp theo.

-   Bạn có thể hiểu **10** là **số lần** bạn muốn đoạn code của mình được lặp lại.

-   Ví dụ:

``` javascript
    for (let i = 0; i < 50; i++) {
        console.log("Welcome to C4EJS Course!")
    }
```  
-   Trong ví dụ trên, đoạn **string** "Welcome to C4EJS Course!" sẽ được in ra màn hình 50 lần.

***Bài tập***  
-   Thực hiện ví dụ ở đầu chương với số người được phép nhập vào là 8 người.

**2. Chi tiết cú pháp**  
-   Cùng nhìn lại ví dụ ở phía trên:  
    ``` javascript
        for (let i = 0; i < 50; i++) {
            console.log("Welcome to C4EJS Course!")
        }
    ```

-   Đoạn **string** "Welcome to C4EJS Course!" được in ra 50 lần. Nói là vậy nhưng tất cả những gì chúng ta nhìn thấy trên màn hình chỉ là một loạt "Welcome to C4EJS Course!" xếp chồng lên nhau. Chẳng có gì để đảm bảo là ở trước mặt chúng ta đã có đủ 50 dòng "Welcome to C4EJS Course!"

-   Để chứng minh thực sự trước mặt chúng ta là 50 dòng "Welcome to C4EJS Course!", hãy sửa đoạn code ở ví dụ trên như sau (in ra **i** bên cạnh "Welcome to C4EJS Course!"):  

    ``` javascript
        for (let i = 0; i < 50; i++) {
            console.log(i, "Welcome to C4EJS Course!")
        }
    ```

-   Như vậy là phía trước "Welcome to C4EJS Course!" sẽ xuất hiện các số lần lượt từ 0 đến 49. Từ ví dụ cũng như kết quả, có thể hiểu các thành phần của **For Loop** như sau:  
    -   **bienKhoiTao** là nơi khai báo một biến với tên biến và value tùy ý.

    -   **dieuKienLap** là điều kiện mà vòng lặp được phép chạy.

    -   **buocNhay** là bước nhảy của biến sau mỗi lần thực hiện đoạn code bên trong vòng lặp.

    -   ***Lưu ý***: Vị trí của 3 statement là cố định, không thể đảo vị trí cho nhau

-   Với ví dụ phía trên, đoạn hội thoại vui dưới đây sẽ giúp bạn hiểu rõ hơn về **For Loops**:

    ***Me***: Ê JavaScript, mày hãy tạo ra cho tao một vòng lặp   for, để lặp đi lặp lại việc in ra màn hình câu "Welcome to C4EJS Course!"

    ***JS***: Có cách nào để em biết được em phải lặp đến bao giờ không anh?

    ***Me***: Mày hãy chuẩn bị một **biến i**, mang **giá trị 0** (let i = 0). Sau mỗi lần in ra "Welcome to C4EJS Course!" thì mày hãy **tăng i lên 1 đơn vị** (i++). Chừng nào mà **i** vẫn còn nhỏ hơn 50 (i<50) thì mày vẫn còn được phép tăng.

    ***JS***: Ok anh.  

***Lưu ý:*** cách viết **i++** tương đương với **i = i + 1** hoặc **i+=1**, nghĩa là **i** tăng lên 1 đơn vị. \tương tự như vậy, **i = i + 3** hoặc **i+=3**, nghĩa là **i** tăng lên 3 đơn vị

<i>**Bài tập**</i>  

1. Viết chương trình in ra màn hình các số từ 0 đến 100  

2. Viết chương trình in ra màn hình các số từ 100 đến 1

3. Viết chương trình in ra màn hình các số chia hết cho 5 trong khoảng từ 5 đến 70

*Bài tiếp theo [Câu lệnh rẽ nhánh (Branching)](../branching/branching.md)*