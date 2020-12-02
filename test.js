class Test{
    constructor(){
        this.a = 10
        this.b = 100
    }
    add(c){
        console.log(c)
        console.log(this.a)
        console.log(this.b)
        console.log(this)
    }
}
let temp = new Test()

temp.add.call({a:'?',b:'!'},'...')
var a ='?'
var b ='!'