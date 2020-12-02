## Props
- Props là viết tắt của từ properties nghĩa thuộc tính (số nhiều). Props này mang ý nghĩa là tham số (parameter) được truyền vào một hàm
```jsx
// Khi khai báo một function thì ta cần khai báo rằng function thì phải định nghĩa rằng có bao nhiêu dữ liệu
// chúng ta nhận được 
function add(a,b){ // a,b => được gọi là parameter. 
    return a + b
}
// add(10,100)
// Chúng ta có thể truyền nhiều tham số vào hàm, tuy nhiên React lại không làm như thế, mà xem tất cả tham số truyền vào dưới dạng object - props 
function add(props){
    return props.a + props.b 
}
// add({a:10,b:100})
// Đối với một component thì chúng ta truyền props như sau

<Add a={10} b={100}>
```

## State and Update State
- State là một property của một Component giúp lưu trữ trạng thái của Component đó. State chỉ hữu dụng đối với Class Component. State là một object và chỉ thuộc về một Component nhất định, các component con và component cha không thể thay đổi trực tiếp mà chỉ có thể thông qua callback hỗ trợ để thay đổi state
- Class Component cũng có props, nghĩa là cũng có thể được truyền xuống từ các component cha. 
```jsx
class Clock extends React.Component{
    constructor(props){
        super(props)
        // chỉ có thể truy cập trực tiếp tới state tại constructor 
        this.state = {time:0}
    }
    click(){
        // this.setState({
        //     time:this.state.time+1
        // })

        // this.setState({
        //     time:this.state.time+1
        // },()=>{
        //     console.log('Updated')
        // })

        // double shot, but no render!
        this.setState((prevState,props)=>{
            prevState.time = prevState.time + 1

            // return prevState // add this one, your code then render
        })

    }
    render(){
        return (
            <input onClick={this.click} >
        )
    }
}
```
## Execution Context and this?
- Là nơi mà đoạn code đó đang chạy. Scope của variable khác nhau, được phân định bằng cặp dấu { } thì khi chạy. Các function sẽ tự động tạo ra một execution context mới. Execution context sẽ chứ thông về các biến, các function available trong context đó.
- Scope Chain 

- ``this`` là một từ khoá gọi tới execution context thực thi một function, tuy nhiên có một chút khác biệt nhỏ. Bình thường thì khi khai báo function sẽ được được đi cùng context của chính nó (nơi nó được gọi). Tuy nhiên this thì chỉ trỏ với vài context đặc biệt.

- Đối với this thì chỉ có 3 loại context, khi sử dụng this thì chúng ta cần phải biết rằng 'this' đang chỉ tới context nào
    * Default Bindings - Global Context
    * Direct Bindings - Option Context
    * Implicit Bindings - Object Context
    * Explicit Bindings - Object Context
```js
// Default
// 'this' refers to global its call no matter where it invoked 
function Yep(){
    console.log(this)
}
Yep()

// Direct
// we can specific which context (or object) we wanna 'this' refer to {a:100}
Yep.call({a:100})

// Implicit
// 'this' refers to the objects itself
let cat = {
    name:'kitty',
    meow:function (){
        console.log(this)
        console.log(this.name)
    }
}
cat.meow() 
// we assign the meow function of cat to 'meow' variable
// when we do that, 'this' refers to global object (default binding)
let meow = cat.meow
meow()


```
https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly

https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

## Forms Bindings data 
```jsx
class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }

    handleChange = (e) => {
        this.setState({ content: e.target.value })
    }
    render() {
        return (
            <div >
                <input type="text" className="chat-input-text" placeholder="Enter your message" onKeyDown={this.handleChange} />
                <i className="fas fa-paper-plane chat-input-btn"></i>

            </div>
        )
    }

}
```