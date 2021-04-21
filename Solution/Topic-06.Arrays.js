let Pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
];

// console.log(Pokemon[5])
// Pokemon.pop()
// Pokemon.push("pikachu")
// Pokemon.unshift("meow 2")

// Đếm để xác định xem là mảng đây là toàn lẻ (và có 1 chẵn là outlier) hay là toàn chẵn (1 lẻ là outlier)
function outlierNumber(inputArray) {
    let no_even = 0
    let no_odd = 0
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 == 0) {
            no_even = no_even + 1
        } else {
            no_odd = no_odd + 1
        }
    }
    // 
    if (no_odd == 1) {
        // đây là mảng toàn chẵn và có 1 lẻ làm outlier
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] % 2 == 1) {
                return inputArray[i]
            }
        }
    }

    if (no_even == 1) {
        // đây là mảng toàn lẻ và có 1 chẵn làm outlier
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i] % 2 == 0) {
                return inputArray[i]
            }
        }
    }

    return false

}

// let result = outlierNumber([3, 1, 3, 5, 9,2])
// console.log(result)
console.log(typeof 1)
function arrayValuesTypes(inputArray) {
    let result = []
    for (let i = 0; i < inputArray.length; i++) {
        result.push(typeof inputArray[i])
    }
    return result
}
// let result = arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// console.log(result)
function difference(arrayA, arrayB) {
    // làm sao để kiểm tra 1 phần có tồn tại trong mảng chưa?
    // sử dụng indexOf 
    let result = []

    for (let i = 0; i < arrayA.length; i++) {
        if (result.indexOf(arrayA[i]) == -1) {
            // có nghĩa là không tồn tại trong mảng result
            result.push(arrayA[i])
        }
    }

    for (let i = 0; i < arrayB.length; i++) {
        if (result.indexOf(arrayB[i]) == -1) {
            // có nghĩa là không tồn tại trong mảng result
            result.push(arrayB[i])
        }
    }

    return result
}

// let result = difference([1, 2, 3], [100, 2, 1, 10])
// console.log(result)

function pairElement(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        // if (str[i] == 'A') {
        //     result = result + 'T'
        // } else if (str[i] == 'T') {
        //     result = result + 'A'
        // } else if (str[i] == 'C') {
        //     result = result + 'G'
        // } else if (str[i] == 'G') {
        //     result = result + 'C'
        // }
        switch (str[i]) {
            case 'A':
                result = result + 'T'
                break
            case 'T':
                result = result + 'A'
                break;
            case 'C':
                result = result + 'G'
                break
            case 'G':
                result = result + 'C'
                break
        }
    }
    return result;
}
// let result = pairElement("ATGC"); //CGC
// console.log(result)

// function sumMinimums(matrix){
//     let s = 0;
//     for(let row = 0;row < matrix.length ;row++){
//         // console.log(matrix[row])
//         s = s + Math.min(...matrix[row])
//         // rest operator
//     }
//     return s
// }
// let r = sumMinimums(
//     [
//         [1, 2, 3, 4, 5],
//         [5, 6, 7, 8, 9],
//         [20, 21, 34, 56, 100]
//       ]
// )
function sumMinimums(matrix) {
    let s = 0
    for (let col = 0; col < matrix[0].length; col++) {
        let min = 10000000
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[row][col] < min) {
                min = matrix[row][col]
            }
        }
        s = s + min
    }
    return s
}
// let r  = sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100]
//   ])
//   console.log(r)

function diffArray(arr1, arr2) {
    let newArr = [];
    // cần phải lặp qua mảng nào nhiều phần tử hơn
    // mình tạo 1 mảng chứa tất cả phần tử ở mảng 1 và 2 
    //  kiểm tra lại xem phần tử đó co thuộc về arr1 hoặc arr2 không?
    let arr = [].concat(arr1).concat(arr2)
    for (let i = 0; i < arr.length; i++) {
        if (!(arr1.indexOf(arr[i]) != -1 && arr2.indexOf(arr[i]) != -1)) {
            newArr.push(arr[i])
        }

    }
    return newArr;
}
// let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
// console.log(result)

function tuckIn(arr1,arr2){
    // mảng đầu tiên có 2 phần tử
    let last = arr1.pop()
    let result = arr1.concat(arr2)
    result = result.concat([last])
    // làm mọi thứ nhất 
    return result
}

let r = tuckIn([[1, 2], [5, 6]], [[3, 4]])
console.log(r)