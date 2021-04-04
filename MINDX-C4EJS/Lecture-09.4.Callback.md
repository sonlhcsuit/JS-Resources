# Callback
## Callback
- Function là một kiểu dữ liệu, ta có thể truy cập thông qua identifier. Chúng ta cũng có thể trả về một hàm, hay thậm chí là truyền một hàm vào một hàm khác.

- Thì những hàm **được truyền** vào một hàm khác thông qua arguments thì được gọi với tên là callback. Những hàm **nhận** vào arguments được gọi là Higher Order Function

```js
function greeting(name,action){
    console.log(`Olá ${name}!`)
    // Dome something after that
    action()
}

function bye(){
    console.log('Au revoir')
}

function inviteLunch(){
    console.log('Would you like to have lunch with me?')
}

greeting('Stella',inviteLunch)

// greeting('Stella',bye)
```
- Tuỳ thuộc vào mục đích sử dụng mà mỗi HOF có mục đích khác nhau. Callback góp mặt để đa dạng hoá , tăng cường khả năng tích hợp.
- Callback được sử dụng rất nhiều trong JS, dễ dàng tích hợp để tương tác với người dùng. Có thể hiểu callback là một hành động, mệnh lệnh được chỉ định sẵn.
- Các bạn sẽ hiểu rõ hơn về callback thông qua ví dụ về DOM. Còn ở đây nói về bản chất của callback, và mục đích chung
---

## Exercise:

---

## Reference & More Resources: 

* https://en.wikipedia.org/wiki/Callback_(computer_programming)
* https://developer.mozilla.org/en-US/docs/Glossary/Callback_function





---
<!-- Navigator -->
<div>
<a href="./Lecture-09.3.Lexical.md">
    <img width=50 src="../sources/left-arrow.svg" >
</a>
<a href="./Lecture-10.1.document.md">
    <img  width=50 src="../sources/right-arrow.svg">
    </a>
</div>
<!-- Navigator -->
