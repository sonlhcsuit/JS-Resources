function getBTN(content) {
    return `<div id="${content}"class="item border d-flex justify-content-center align-items-center">
                <p class="my-0">
                ${content}
                </p>
            </div>`
}

function init() {
    let data = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '.', '=']
    let btns = document.getElementById("btns")
    for (let i = 0; i < data.length; i++) {
        btns.insertAdjacentHTML("beforeend", getBTN(data[i]))
    }
    data.push('0')
    let orange = ['AC','+/-','%','/','+','-','*','=']
    for (let i = 0; i < data.length; i++) {
        if(orange.includes(data[i])){
            document.getElementById(data[i]).classList.add('orange')
        }
        document.getElementById(data[i]).addEventListener("click", () => {
            clickButton(data[i])
        })
    }

}

let isPositive = false
let expression = []
function addToExpression(data, type) {
    let last = expression[expression.length - 1]
    if (!last) {
        expression.push({
            type: 'operand',
            value: '',
            unary: '+'
        })
        last = expression[expression.length - 1]
    }
    switch (type) {
        case 'operator':
            if (last.type == 'operand') {
                expression.push({
                    type: 'operator',
                    value: data
                })
            } else {
                let { unary } = last
                unary = data
                expression[expression.length - 1] = {
                    ...last,
                    unary
                }
            }
            break
        case 'number':
            if (last.type == 'operand') {
                if(data == "."){
                    if(last.value.indexOf('.')!=-1){
                        break
                    }
                }
                let { value } = last
                value = `${value}${data}`
                expression[expression.length - 1] = {
                    ...last,
                    value
                }
            } else {
                expression.push({
                    type: 'operand',
                    value: data,
                    unary: '+'
                })
            }
            break
        case 'unary':
            if (last.type == 'operand') {
                let { unary } = last
                unary = unary == '-' ? '+' : '-'
                expression[expression.length - 1] = {
                    ...last,
                    unary
                }
            } else {
                expression.push({
                    type: 'operand',
                    value: '',
                    unary: data == '-' ? '+' : '-'
                })
            }
            break
    }
    let val = expression.map(val => val.type=='operand'?`${val.unary=="+"?"":val.unary}${val.value}`:`${val.value}`).join(" ")
    insertText(val)
}

function clickButton(data) {
    if (/[0-9\.]/gi.test(data)) {
        addToExpression(data, 'number')
    } else if (/^\+\/\-/gi.test(data)) {
        addToExpression(data, 'unary')
    } else if (/[\*\/\+\-\%]/gi.test(data)) {
        addToExpression(data, 'operator')
    } else if(data == "AC"){
        expression = []
        addToExpression()
    } else if(data="="){
        cal()
    }
}
function insertText(data) {
    document.getElementById("exp").innerHTML = data
}
function cal() {
    let exp = expression.map(val => val.type=='operand'?`${val.unary=="+"?"":val.unary}${val.value}`:`${val.value}`).join(" ")
    let ans = eval(exp)
    expression=[]
    ans.toFixed(3)
    console.log(typeof ans)
    if(ans < 0){
        addToExpression('-','unary')
        addToExpression(ans*-1,'number')
        // console.log(expression)
    }else{
        addToExpression(ans,'number')

    }
    insertText(ans)
    console.log(expression)
}

init()