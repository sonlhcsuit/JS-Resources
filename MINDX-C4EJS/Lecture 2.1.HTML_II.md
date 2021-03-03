# HTML II
## Forms
- Một tác vụ cơ bản của các trang web là thu thập thông tin của người dùng. Cách thường được sử dụng nhiều nhất đó chính là sử dụng form
- Một thành phần cơ bản của 1 form sẽ bao gồm các tag sau :form,label,input,fieldset,legend,...
```html
<form>
    <!-- tag form dùng để bọc xung quanh form -->
    <div>
        <!-- Có thể chia form thành từng phần nhỏ bằng việc gói các phần vào tag div (dễ sử dụng flex box) -->
        <label>Name</label>
        <!-- Viết đoạn mô tả cho từng box để cho người dùng biết cần phải nhập gì -->
        <input type="[type]" value="[defaultValue]"/>
        <!-- Thẻ input tuỳ vào giá trị type mà chúng ta sẽ quyết định loại hình dạng, thông thường thì sẽ là một ô nhập text , value là giá trị định sẵn, placeholder là dòng chữ xám khi bạn nhập gì đó thì dòng chữ đó sẽ biến mất. Nếu type là button/submit nên có giá trị value là từ hiển thị ở trên nút -->
    </div>
    <div>
        <!-- Radio box cho phép người dùng chọn 1 trong nhiều sự lựa chọn -->
        <!-- Lưu ý các tag input - ví dụ là: giới tính - phải có chung giá trị của thuộc tính name. Như vậy user sẽ chỉ chọn được 1 trong nhiều. -->
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br>
        <input type="radio" id="other" name="gender" value="other">
        <label for="other">Other</label>
    </div>
    <div>
        <!-- Ngoài ra thì còn có checkbox cho phép người dùng chọn nhiều hơn 1  -->
        <input type="checkbox" id="vehicle1" name="bike" value="Bike">
        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" id="vehicle2" name="car" value="Car">
        <label for="vehicle2"> I have a car</label><br>
        <input type="checkbox" id="vehicle3" name="boat" value="Boat">
        <label for="vehicle3"> I have a boat</label><br><br>
    </div>
     <div>
        <!-- Thay vì dùng radio thì ta có thể tạo 1 dropdown bằng cặp thẻ select và option  -->
        <label for="cars">Choose a vehicle:</label>
        <select name="cars" id="cars">
            <option value="car" selected disabled>Choose your options</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="boat">Boat</option>
            <option value="train">Train</option>
        </select>
    </div>
</form>
```
- Cặp thẻ fieldset và legend là 2 thẻ sẽ giúp form của chúng ta trông đẹp hơn, các bạn tự tìm hiểu nhé

---

## DOM
- Mối quan hệ giữa các HTML element (tag) là mối quan hệ cha và con. Có thể vẽ mối quan hệ này theo một cái cây gia phả như thế này.

<img src="../sources/C4EJS-Lecture 2.1.png" alt="dom">

- Trang web trông như thế nào phụ thuộc vào cây DOM, như vậy nếu muốn thay đổi trang web thì việc thay đổi cây DOM là đơn giản nhất và Javascript hỗ trợ chúng ta các thao tác trên cây DOM, ví dụ như thêm, xoá, sửa, đổi vị trí,...
---

## Block and Non-block element
- Blocking element là một element chiếm chiều dài mặc định bằng chiều dài toàn bộ viewport (chiều dài màn hình). Ví dụ: div,video,h1,h6,...
- Non-blocking element (inline) là một element chỉ chiếm chiều dài vừa đủ đúng bằng nội dung bên trong. Ví dụ: p,a,...
- Đối với blocking element thì việc chỉnh chiều dài không mang lại ý nghĩa, mặc định phần margin (lề sẽ được thêm bù vào sao cho đủ viewport). 
- Có thể dùng css để chuyển đổi qua lại giữa 2 kiểu này và nhiều hơn
---

## File path

---

## HTML entity
- Một số ký tự đã được dùng làm syntax (<, >), nên khi trình duyệt load HTML sẽ bỏ qua các ký tự này. HTML entity là cách để sử dụng các kí tự này trong trang web. HTML entity còn được dùng để chèn một vài ký tự đặc biết vào trang web
- Tự tra cứu thêm ở [google](https://www.w3schools.com/charsets/ref_utf_symbols.asp)
```html

<p> 100 > 2 </p>
<!-- Chạy đối với 1 vài trình duyệt mới, tuy nhiên không đảm bảo an toàn -->
<p> 100 &gt 2 </p>
<!-- Chạy tốt và chạy đúng -->

<p> &forall; x &isin; (-10;10] x &le; 10</>
```
---

## Reference 
* 