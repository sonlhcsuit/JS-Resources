// let cat = {
//     name:'kitty',
//     meow:function (){
//         console.log(this)
//         console.log(this.name)
//     }
// }
// cat.meow = cat.meow.bind(cat)
// meow = cat.meow
// meow.call({name:'nisha'})
// Default
// 'this' refers to global its call no matter where it invoked 
function Yep(a){
    console.log(a)
    console.log(this)
}
// Yep()
// Direct
// we can specific that, which context (or object) we wanna 'this' refer to
Yep.apply()