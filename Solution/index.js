// let employee = {
//     name:'Son',
//     salary:'10tr',
//     falcuty:'Xschool',
//     family:{

//     }
// }

// // array cho phép chúng ta truy cập tới giá trị bằng index (số thứ tự)
// // object cho phép chúng ta truy cập tới giá trị bằng name của property

// let emps = [
//     {
//         name:'Son',
//         salary:'10tr',
//         falcuty:'Xschool'
//     },
//     {
//         name:'Quang',
//         salary:'10tr',
//         falcuty:'Xschool'
//     },
//     {
//         name:'Hung',
//         salary:'10tr',
//         falcuty:'Xschool'
//     },
//     {
//         name:'Hieu',
//         salary:'10tr',
//         falcuty:'Xschool',
//         the_legend_of_zelda:['this is legend of zelda']
//     },
// ]
// employee.salary = '20tr'
// // console.log(employee.family.dad)
// // employee.sports[2]

// // emps[0].name[0]
// let key = 'the-legend-of-zelda'
// // console.log(emps[3][key])
// // console.log(emps[3].the_legend_of_zelda)
// // console.log(emps[3]['the_legend_of_zelda'])
// // cách lặp 

// for(let key in employee){
//     // console.log(key, employee[key])

// }

// employee['role']= 'boss'
// console.log(employee)
// delete employee['role']
// console.log(employee)


// Bài 1 
let pokemon = {
    name: "Pikachu",
    stats: {
        hp: 100,
        level: 50,
        attack: 86,
        spattack: 150,
        speed: 5000000000,
        belongTo: "Red"
    },
}
let pikachuSkill = ["Bite", "Thunder Bolt", "Volt Tackle", "Thunderrrr!"]

// pokemon.stats.speed =60;
// pokemon.skill = pikachuSkill
// delete pokemon.stats.belongTo;
// console.log(pokemon)

// Bài 2 
let inventory = {
    gold: 500,
    pouch: ['flint', 'twine', 'gemstone'],
    backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}

// inventory.pocket = ["seashell", "strange berry", "lint"]
// inventory.backpack = [].concat(inventory.backpack.slice(0,1)).concat(inventory.backpack.slice(2))
// inventory.gold = inventory.gold + 50
// delete inventory.pouch
// console.log(inventory)

let contacts = [{
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
},
{
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
},
{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
},
{
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
}
];
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if (name == contacts[i].firstName){
            // Nếu cái có ai đó trùng firstName với tên thì sẽ tiếp tục
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop]
            }else{
                return "No such property"
            }   
        }
    }

    return "No such contact"
}
// let result = lookUpProfile('Sherlock','likes')
// console.log(result)

// Bài 4

function getBudgets(people){
    let sum = 0
    for(let i =0;i<people.length;i++){
        sum = sum + people[i].budget
    }
    return sum
}
// let result=  getBudgets([
// { name: "John", age: 21, budget: 23000 },
// { name: "Steve",  age: 32, budget: 40000 },
// { name: "Martin",  age: 16, budget: 2700 }
// ])
// console.log(result)
//   getBudgets([
//     { name: "John",  age: 21, budget: 29000 },
//     { name: "Steve",  age: 32, budget: 32000 },
//     { name: "Martin",  age: 16, budget: 1600 }
//   ])

// Bài  5 

function getDistance(pointA,pointB){
    let sum_of_square = (pointA.x-pointB.x)**2 + (pointA.y-pointB.y)**2
    return sum_of_square ** 0.5
}

// let result = getDistance({x: -2, y: 1}, {x: 4, y: 3})
// console.log(result)

// Bài 6

function inkLevels(inks){
    let min = 1000000
    for(let key in inks){
        if (inks[key]<min){
            min = inks[key]
        }
    }
    return min
}

// let result = inkLevels({
// "cyan": 23,
// "magenta": 12,
// "yellow": 10
// })
// console.log(result)

// Bài 7
const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }


function greeting(person){
    if(GUEST_LIST.hasOwnProperty(person)){
        return "Hi! I'm "+ person+", and I'm from "+GUEST_LIST[person]+"."
    }else{
        return "Hi! I'm a guest."
    }
}