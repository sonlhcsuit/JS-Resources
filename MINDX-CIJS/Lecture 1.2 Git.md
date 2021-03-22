# Set up git for a project
## Git 
- Khi chúng ta thực hiện một project (to hay nhỏ thì tuỳ), thì chúng ta sẽ có một vài rắc rối như sau
    - Code lúc nãy chạy, sao bây giờ không chạy?
    - Hôm qua code nó chạy ngon mà, sao hôm nay không chạy
    - Ơ sao thằng bạn mình code cái gì đây, mình code cái này rồi mà 
    - ...

- Tất cả những lần trên, code chúng ta không chạy bởi vì chúng ta đã xoá code cũ, viết code mới và code mới không chạy. Thay vì xoá thì ta có thế comment code cũ lại, tuy nhiên thì nó sẽ làm file rất là dài, khó đọc (tưởng tượng bạn phải viết lại 1 cái hàm 10 lần với 10 phiên bản xem - comment mỗi phiên bản )

- Thay vì comment lại như thế mỗi, ta cần một cái gì đó để quản lý code của chúng ta tại mỗi thời điểm khác nhau. Như vậy thì chúng ta sẽ không cần phải comment, hoặc tệ nhất là không phải dự án ra riêng để backup mỗi khi có một tính năng gì đó mới. Chúng ta có khá nhiều lựa chọn, và tốt nhất bây giờ (hoặc ít nhất là theo mình) là git 

- Git là một version control software giúp ta kiểm tra được các phiên bản code, theo dõi toàn bộ hoạt động và các thay đổi theo thời gian. Git giúp chúng ta có thể khôi phục lại code cũ lỡ chẳng may có gì xảy ra. Mỗi một phiên bản sẽ được gọi là một commit, tức là khi chúng ta hoàn thành một chức năng gì đó, chúng ta sẽ đóng gói code của thời điểm hiện tại lại và thực hiện việc commit, tức là lưu lại các thay đổi như, thêm thay xoá sửa code và đi kèm cùng một message để cho biết rằng chúng ta đã làm công việc gì. Mỗi commit sẽ đi cùng với một commit_id độc nhất để xác định từng commit, và tất nhiên thông qua commit_id thì chúng ta có thể quay ngược lại thời điểm mà code chưa có vấn đề (khôi phục code)

<img src="https://www.nobledesktop.com/image/classExamples/git/branches.png">

- Khi sử dụng git, chúng ta sẽ có thêm khái niệm gọi là branch (nhánh). Sử dụng branch nhằm mục đích chia ra các chức năng nhỏ để phát triển trên các nhánh độc lập với nhau tránh bị xung đột khi có nhiều người code cùng một project.

- Một git repository sẽ được tạo ra trong thư mục gốc của project. Nhiều người code chung(contribute) vào project thì đôi khi sẽ có những thay đổi về code khác nhau ở 2 người - được gọi là conflict. Vd: A và B code một chức năng ở file X. Người A viết dòng 10 file là 100, người B vào sửa '???', cả A và B đều không thể hoàn thành chức năng nếu cứ như thế này. Chúng ta có thể tách ra 2 branch để 2 lập trình viên làm việc riêng, sau đó sẽ thực hiện việc merge - kết hợp 2 branch lại với nhau. Khi merge sẽ có tình trạng conflict, như ví dụ ở trên. Vì vậy sẽ cần một cuộc thảo luận để quyết định xem là : code ai nên sử dụng - được accept. 

- Thông thường một git repository sẽ có một nhánh chính - master (hoặc main). Giữ các phiên bản code hoàn hảo nhất, chạy tốt nhất, tối ưu nhất, thường là phiên bản release. Và nhiều nhánh dev khác để các lập trình viên phát triển các chức năng khác nhau. Sau khi xong vài chức năng nhỏ thì sẽ merge dần dần vào nhánh lớn và cuối cùng là master 

<img src="https://miro.medium.com/max/590/1*8J2cRXDB1iYvl4AAsVV7rQ.png">

Một vài file đáng chú ý khi setup một git repository cho một project
- .gitignore : file chứ những file/directory không cần quan tâm, sẽ được git bỏ qua, không theo dõi sự thay đổi 
- .git (directory): Thư mục chứa thông tin về git repsitory - tức là thông tin về commit, changes (sự thay đổi trong từng commit) - Nên đừng có bao giờ xoá 
- Khi thao tác với git phải chắc chắn là : **BẠN ĐANG Ở CÙNG THƯ MỤC VỚI THƯ MỤC .git**
- Sử dụng git CLI (command line interface - giao diện dòng lệnh) cho thành thạo.
--- 

## Github là gì 
- Git giúp chúng ta quản lý code tốt hơn và mượt mà hơn, tránh khỏi những vấn đề rắc rối khi phát triển dự án. Tuy nhiên, bất hạnh là git chỉ hoạt động local - tức là chỉ hoạt động trên 1 máy tính duy nhất, tại một thời điểm. Vậy thì 2 3 lập trình viên sẽ code trên cùng máy tính sao? Không, có một chức năng của git sẽ giúp các lập trình viên code cùng một dự án trên cùng một git repository nhưng mà ở máy tính khác nhau.

- Đó là sử dụng online repository. Sơ bộ ý tưởng là: có một online git repository ở một máy chủ, một tính năng nào đó đã hoàn thành thì lập trình viên sẽ cập nhật online git repository từ local git repository của anh ta nhằm mục đích lưu trữ. Một lập trình viên mới tham gia dự án, sẽ có thể tải từ git online repository, bắt đầu phát triển thêm các tính năng.

- Có nhiều dịch vụ cung cấp repository hiện nay: GitHub, BitBucket, GitLab,... Chúng ta sẽ sử dụng GitHub để thao tác, lưu trữ code.

- Cách sử dụng github 
<img src="https://www.coderomeos.org/storage/uploads/images/posts/how-to-use-github-simple-github-tutorial-for-beginners-5d75f561e98d4.png">
---

## Một vài lệnh git cơ bản 

- Okay, ở đây chúng ta sẽ chỉ thực hiện một vài tương tác git cơ bản. Lưu ý, online repository sẽ được gọi là remote repository từ bây nhớ nhé. 

- Lưu ý là phải **Ở ĐÚNG THƯ MỤC LÀM VIỆC CỦA CÁC BẠN** nếu không thì đừng hỏi tại sao nó không chạy 

- Những thứ viết trong ngoặc vuông ( [] ) sẽ là những thứ các bạn phải điền vào! 

- Tất cả các lệnh ở dưới đều là CLI, chúng ta có thể dùng github desktop(GUI), nhưng dùng GUI thì các bạn tự tìm hiểu ở [google](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) nhé 


- Điều đầu tiên phải biết là các bạn cần phải mở CLI ở **ĐÚNG CHỖ ĐÃ**, đối với windowns thì dùng file explore lên , di chuyển tới thư mục của dự án (hoặc là chỗ lưu, sau đó bấm vào address bar) **cmd** và hit ENTER 
<img src="../sources/CIJS-Lecture 1.2.jpg" alt="hit">

<!-- còn bổ sung thêm windows -->
- Xong như này thì đã hoàn tất việc mở project bằng CLI, kiểm tra project path (nơi chứa dự án)




- Clone git repository from github (tải xuống một remote repository)
```sh
$ git clone [link]

```
- Tuỳ thuộc vào bạn ở đâu (current path) mà sẽ có một thư mục mới được tạo ra ngay tại đó - nó chính là dự án của các bạn 

- Bây giờ thì di chuyển vào thư mục project vừa tạo ra, và từ bây giờ, tất cả các lệnh **đều ở trong thư mục dự án này**
```sh
$ git status .
```
- Dùng để kiểm tra trạng thái của project! Nếu có chữ **nothing to commit, working tree clean** tức là project đang *sạch* (vừa commit xong, chưa có thay đổi gì mới!). Còn nếu không có, thì tức là project đã có sự thay đổi về code, chúng ta sẽ **làm sạch** project bằng cách commit (wrap code lại và lưu)

```sh
$ git add .
$ git commit -m "[message]"
```
- Lệnh đầu tiên để theo dõi toàn bộ sự thay đổi của project (dấu . mang ý nghĩa là toàn bộ)
- Lệnh thứ 2 để thực hiện commit với **message** là những thứ các bạn làm !

```sh
$ git push 
```
- Đẩy code lên remote repository

```sh
$ git pull
```
- Kéo code mới ở trên repository về

- Đôi khi, các bạn pull/push code thì sẽ xảy ra hiện tượng conflict => cần phải qiải quyết tình trạng conflict. Để làm sao giải quyết thì các bạn tra [google](https://youtu.be/1JuYQgpbrW0?t=737)

```sh
$ git checkout -b [newbranchName]
```
- Tạo ra branch mới từ nhánh hiện tại, nhánh bạn đang ở 

```sh
$ git branch --list 
```
- Coi tất cả các nhánh hiện có của project, nhánh nào có dấu \* là nhánh bạn đang ở 

```sh
$ git checkout [branchName]
```
- Checkout (nhảy sang nhánh khác), trước khi nhảy phải **commit sạch sẽ**

và một đống lệnh khác nữa có mặt ở [google](https://git-scm.com/doc) và trong lúc các bạn cần 

---

## Reference:  
* https://www.youtube.com/watch?v=hwP7WQkmECE
* https://www.youtube.com/watch?v=1JuYQgpbrW0&t=737s
* https://git-scm.com/doc
