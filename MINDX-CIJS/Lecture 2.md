## <script></script>
- Thực ra đối với html thì chỉ tồn tại 1 tag script duy nhất. Việc chúng ta sử dụng nhiều tag script, thực chất chỉ là gom nhiều file js vào lại làm 1 (có thứ tự). Điều này làm cho code ở những tag script ở phía dưới có thể truy cập tới các biến đã khai báo ở tag script ở trên 

- Đối với những dự án cỡ nhỏ thì khối lượng code rất ít, nên chúng ta có thể dùng 1 hoặc nhiều tag script để viết code thì đơn giản có thể quản lý được các global variable

- Tuy nhiên đối với dự án lớn, hoặc trung thì việc quản lý sẽ tốn nhiều chi phí, hơn hết việc đặt tên cũng là một vấn đề

## Transplier 
- Javascript là một ngôn ngữ có thể chạy ở phía web-client duy nhất hiện nay. Tuy nhiên không phải bất cứ trình duyệt nào cũng có thể chạy javascript ở phiên bản cao cấp nhất ES10 ( ie, firefox...). Tuy nhiên có nhiều tính năng của javascript mới có thể được viết lại ở dạng cũ javascript phiên bản thấp hơn mà vẫn giữ được tính năng => Đảm bảo những trình duyệt không hỗ trợ phiên javascript cao cấp vẫn có thể chạy được. Giúp coder đỡ mệt. Và chẳng lẽ làm điều này bằng tay ư? Tất nhiên là không => Transpiler ( Babel )

- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

## Bundler 
- Khi viết code javascript trên nhiều tag script thì khó để tái sử dụng. Vì vậy cần một thứ gọi là moduler bundler. Vậy module bundler là gì. Cho phép các bạn phân tách code ra nhiều file khác nhau, mỗi khi cần dùng một đoạn code nào đó của file nào thì chỉ cần gọi tới file đó. Giúp tái sử dụng code, dễ đặt tên, dễ quản lý. Tất nhiên là sẽ không làm điều này bằng tay rồi => Webpack

- Webpack is a module bundler. webpack takes modules with dependencie and generates static assets representing those modules

## JSX 
- Element 
```jsx 
<div> Hello </div>
```
- Component 

```jsx
// Main.jsx
export function Main(){
    let value = 'this is first component'
    return(
        <div>
            <h1>This is first component</h1>
            <input type="button" value="click me!" onClick={()=>console.log('clicked !!')}>
        </div>
    )
}

```
- export & import 
```jsx 
// App.jsx
import { Main } from 'Main'

```
- JS binding
```jsx
// Main.jsx
export function Main(){
    let value = 'this is first component'
    return(
        <div>
            <h1>{value}</h1>
            <input type="button" value="click me!">
        </div>
    )
}

```
- Using style and external css 
```jsx
import 'Main.css'
// Main.jsx
export function Main(){
    let value = 'this is first component'
    return(
        <div>
            <h1>{value}</h1>
            <input type="button" value="click me!" style={{fontSize:30,backgroundColor:'red'}}>
        </div>
    )
}

```
- Class
```jsx
class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:'this is first component'}
    }
    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <input type="button" value="click me!" style={{fontSize:30,backgroundColor:'red'}}>
            </div>
        )
    }
}
```

References:
- https://babeljs.io/docs/en/
- https://webpack.js.org/concepts/
- https://reactjs.org/docs/introducing-jsx.html
- https://reactjs.org/docs/components-and-props.html