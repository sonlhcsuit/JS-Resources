function decimal2roman(number){

}

function padovan(number){

}

function telephoneValid(telephone){

}

function cashRegister(){

}

function phoneLetter(str){



}

function digitalDrome(number){
    let temp = number.toString();
    // console.log(temp);
    let arr = temp.split("");
    let checktrung = 0;
    let checkduong = 0;
    let checkam = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i + 1 < arr.length) {
            let checkhieu = parseInt(arr[i + 1]) - parseInt(arr[i]);
            if (checkhieu > 0) {
                checkduong += 1;
            }
            if (checkhieu < 0) {
                checkam += 1;
            }
            if (checkhieu == 0) {
                checktrung += 1;
            }
        }
    }
    if (checktrung == 0) {
        if (checkduong > 0 && checkam == 0) {
            // alert("is Metadrome")
            return `${number} is Metadrome`;
        }
        if (checkduong == 0 && checkam > 0) {
            // alert("is Katadrome");
            return `${number} is Katadrome`;
        }
    } else if (checktrung > 0) {
        if (checkduong > 0 && checkam == 0) {
            // alert("is Plaindrome")
            return `${number} is Plaindrome`;
        }
        if (checkduong == 0 && checkam > 0) {
            // alert("is Nialpdrome");
            return `${number} is Nialpdrome`;
        }
        if (checkduong == 0 && checkam == 0) {
            // alert("is Repdrome")
            return `${number} is Repdrome`;
        }
    }
    // alert("is Nondrome")
    return `${number} is Nondrome`;
}

// console.log(digitalDrome(1357));

function pokerFlush(handcards,deskcards){
    let cards = handcards.concat(deskcards);
    console.log(cards);
    let soluongS = 0;
    let soluongH = 0;
    let soluongD = 0;
    let soluongC = 0;
    for (i = 0; i < cards.length; i++) {
        let element = cards[i].split("");
        element = element[2];
        if (element == "S") {
            soluongS += 1;
        }
        if (element == "H") {
            soluongH += 1;
        }
        if (element == "D") {
            soluongD += 1;
        }
        if (element == "C") {
            soluongC += 1;
        }
    }
    if (soluongD >= 5) {
        return `diamond flush`;
    } else if (soluongS >= 5) {
        return `spade flush`;
    }
    else if (soluongH >= 5) {
        return `heart flush`;
    }
    else if (soluongC >= 5) {
        return `club flush`;
    } else {
        return false;
    }
        

}
// console.log(pokerFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]));
// console.log(pokerFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]));v
function diceGambling(roll_result){
    let result = 0;
    for (let i = roll_result.length-1; i >= 0; i--) {
        if (roll_result[i - 1] == 1) {
            roll_result[i] = 0;
            result = result + roll_result[i];
        }
        if (roll_result[i - 1] == 6) {
            roll_result[i] = roll_result[i];
            result = result + roll_result[i];
        } 
        result = result + roll_result[i];
    }
    return result;

}
// console.log(diceGambling([1,2,3]));

function jug(){

}
function cycle(){


}
