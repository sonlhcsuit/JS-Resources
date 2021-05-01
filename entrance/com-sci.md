# Entrance exam for mentor

## CSB
### Kiến thức cơ bản về python
1. Cho biết sự một vài (ít nhất 2) sự khác nhau của python3 & python2 
```txt
Có thể gán lại giá trị cho True/False
print trong python2 là một reserved word (không phải built-in function)
... (Và một vài sự khác biệt khác )
```
2. Indexing/Slicing đối với list trong python. Lấy ra mảng con (từ phần tử thứ 4 - 8) và đảo ngược

```py
a = [1,2,3,4,5,6,7,8,9]
a[3:8][::-1]
```
3. Tạo menu tương tác cho phép CRUD danh sách các sản phẩm
```py
def menu():
    menu_str = "Enter your option:\nC. Add a product\nR. View products\nU. Update a product\nD. Delete products\nOther letter to quit\n"
    products = []
    choice = ""
    while (choice := str(input(menu_str)) ) in ['C','c','R','r','U','u','D','d']:
        if choice in ['R','r']:
            print(products)
        elif choice in ['C','c']:
            prd_name = input('Enter product name: ')
        elif choice in ['D','d']:
            print(products)
            prd_idx = input('Enter index(start from 1): ')
            products.pop(int(prd_idx) - 1)
        elif choice in ['U','u']:
            print(products)
            prd_idx = input('Enter index(start from 1): ')
            prd_name = input('Enter product name: ')
            products[int(prd_idx) - 1] = prd_name
if __name__ == "__main__":
    menu()
```

4. Có một file csv khoảng 400 dòng. Làm thế nào để insert một dòng mới ở dòng 200? (dữ liệu dòng 200 trở lên sẽ bị dòi xuống dòng 201 )
```py
def write(fp,data,idx):
    fs = open(fp,"r")
    lines = fs.readlines()
    lines = lines[:idx]+ [str(data)+"\n"] + lines[idx:]
    fs.close()
    fs = open(fp,"w")
    fs.write("".join(lines))
    fs.close()
if __name__ == "__main__":
    write("./data.txt",'?',200)
```

5. Thế nào là kiểu dữ liệu primitives & reference? String có phải là kiểu dữ liệu reference không? Nếu có thì hãy giải thích kết quả đoạn code sau:
```py
a = "MindX"
b = "MindX"
print(id(a)==id(b))
# True
a = "MindXSchool&Technology"
b = "MindXSchool&Technology"
print(id(a)==id(b))
# False
```

String không phải kiểu dữ liệu reference. Kết quả đoạn code ở trên là do kỹ thuật "String interning".
### Thuật toán cơ bản

1. Cài đặt thuận toán chuyển vị một ma trận 2 chiều 
2. Cài đặt thuật toán Binary Search
3. Cài đặt thuận toán selection/buble sort đối với danh sách các nhân viên, đi kèm với key là mức lương.

## CSA
### OOP
1. Nêu sự khác biệt giữa 2 khái niệm Interface và Inheritance ở trong lập trình hướng đối tượng.
- Inheritance là kế thừa từ một lớp cha(kế thừa toàn bộ property & method)
- Interface là một cách trừu tượng hoá, nhằm mục đích cài đặt một khuôn mẫu của các phương thức. Một class có thể implements nhiều Interface. Ngoài ra Interface là một cách khác để cài đặt đa kế thừa
2. Lớp abstract là gì, nêu ví dụ.

---

Các câu sau sử dụng chung mô tả sau:  

Công ty ABC có các hai loại nhân viên: nhân viên gián tiếp và nhân viên trực tiếp, với các thông
tin sau: Mã , Tên , đơn vị, Mức lương. Công ty muốn thực hiện chấm công làm việc của mỗi nhân viên theo yêu cầu sau:

Nhân viên gián tiếp:
- Mỗi ngày công đi làm sẽ được tính hệ số là 1.
- Mỗi ngày nghỉ sẽ có 2 mức: nghỉ có lý do hệ số là 0.5, nghỉ không lý do hệ số là 0.

Nhân viên trực tiếp:

- Mỗi ngày công được tính theo ca làm việc: nếu làm Ca 1, hệ số là 1; Ca 2 hệ số là 1.5.
- Mỗi ngày nghỉ sẽ có 2 mức: nghỉ có lý do hệ số là 0.5, nghỉ không lý do hệ số là 0.
- Ngoài ra nhân viên trực tiếp còn có hệ số phụ cấp: 10%, 15% hoặc 20%.

Mỗi nhân viên sẽ có một danh sách chấm công ngày làm việc ( Ví dụ: ArrayList) tính từ ngày 1
của tháng cho đến hết tháng. (Lưu ý, danh sách chấm công chỉ lưu trữ số ngày chấm công trong
1 tháng, sang tháng mới sẽ trở lại từ đầu).  

Lương tháng của nhân viên sẽ được tính bằng tổng lương ngày (nếu là nhân viên trực tiếp thì
lương tháng sẽ có thêm hệ số phụ cấp); trong đó lương ngày được tính bằng Mức lương * hệ số
của ngày làm việc (hoặc nghỉ có lý do)

3. Thiết kế cây kế thừa (mỗi node là một class gồm các method & attribute)
4. Cài đặt các class đã thiết kế
5. Giả sử có một list các nhân viên, tính lương cho từng người với một static method ở lớp nhân viên

### Thuật toán trung bình
1. Cài đặt merge sort/quick sort/ heapsort và giải thích
2. Cài đặt cây tìm kiếm nhị phân
3. Cài đặt thuật toán đếm bit 1 của các số từ 1 -> n. Độ phức tạp yêu cầu là O(n)
4. Cài đặt thuật toán tính dãy con tăng dài nhất (có liên tục và không liên tục)
### Phân tích dữ liệu

## CSI
