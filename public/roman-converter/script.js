function convertToRoman(num) {
    console.log('zzz')

    if(num != parseInt(num)){
        throw new Error('Not integer')
    }
    if(num > 3000 || num < 0 ){
        throw new Error('Lower than 3000')
    }
    num = parseInt(num)
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = '';

    for (let i of Object.keys(roman)) {
        let q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}
let output = document.getElementById("num")
let input = document.getElementById("decimal")
function init() {
    document.getElementById("decimal").addEventListener("input", () => {
        try {
            let data = convertToRoman(input.value)
            output.innerHTML = data || "Where magic happens"
            console.log(data)
            input.classList.add("is-valid")
            input.classList.remove("is-invalid")
        
        } catch (err) {
            if (err.message == 'Not integer' || err.message == 'Lower than 3000') {
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }
        }
    })
}
init()