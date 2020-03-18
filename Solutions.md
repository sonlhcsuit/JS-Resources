### Panlidrome Checker 
```js 
function palindrome(str) {
  var mystr = str.toLowerCase()
  mystr = mystr.split(/[\s,.?!():\/\\\-\_\|\@\#\$\%\^\&\*\>\<]/).join("");
  var str1 = mystr.split("").reverse().join("")
  return str1===mystr;
}
console.log(palindrome("five|\_/|four"));
```
### Roman
```javascript
function getDigit(num, base = 1) {
    var remain = num % 10;
    for (var i = 1; i < base; i++) {
        num = parseInt((num - num % 10) / 10);
        remain = num % 10;
    }
    return remain;
}
function convertDigit(num, base) {
    if (base == 4) {
        switch (num) {
            case 1:
                return "M"
            case 2:
                return "MM"
            case 3:
                return "MMM"
            default:
                return "";
        }
    }
    let romanNumber = "";
    const romanLetterSet = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
    let romanPair = romanLetterSet[base - 1];
    let romanLetter;
    switch (num) {
        case 5:
            romanNumber = romanPair[1]; break;
        case 4:
            romanNumber = romanPair[0] + romanPair[1]; break;
        case 9:
            romanNumber = romanPair[0] + romanLetterSet[base][0]; break;
        case 3:
            romanNumber += romanPair[0];
        case 2:
            romanNumber += romanPair[0];
        case 1:
            romanNumber += romanPair[0];
            break;
        case 8:
            romanNumber += romanPair[0];
        case 7:
            romanNumber += romanPair[0];
        case 6:
            romanNumber += romanPair[0];
            romanNumber = romanPair[1]+romanNumber;
    }
    return romanNumber;
}
function convertToRoman(num) {
    if (num >= 4000 || num == 0) {
        return "Cannot Convert to Roman"
    }
    let digit = [];
    digit.push(getDigit(num, 4))
    digit.push(getDigit(num, 3))
    digit.push(getDigit(num, 2))
    digit.push(getDigit(num, 1))
    let answer = [];
    answer.push(convertDigit(digit[0], 4));
    answer.push(convertDigit(digit[1], 3));
    answer.push(convertDigit(digit[2], 2));
    answer.push(convertDigit(digit[3], 1));
    return answer.join("");
}
console.log(convertToRoman(891));
```
### rot13
```javascript
function rot13(str) {
  var letter = str.split("");
  var letterCharCode = letter.map((ele)=>{
    return ele.charCodeAt(0) >= 65 && ele.charCodeAt(0)<=90?(ele.charCodeAt(0)>77?ele.charCodeAt(0)-13:ele.charCodeAt(0)+13):ele.charCodeAt(0);
  })

  return String.fromCharCode(...letterCharCode);
}

console.log(rot13("SERR CVMMN!"));
```
### Cash Register
```javascript
function sumOfcid(cid) {
  return cid.reduce((acc, ele) => {
    return acc + ele[1]
  }, 0).toFixed(2);
}
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let cashInDrawer = sumOfcid(cid);
  if (change > cashInDrawer) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  }
  if (change == cashInDrawer) {
    return {
      status: "CLOSED",
      change: cid
    };
  }
  if (change < cashInDrawer) {
    let currencyUnit = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      ONEHUNDRED: 100
    }
    cid = cid.reverse();
    let answer = cid.map((coin) => {
      let name = coin[0], drawerCash = coin[1];
      let currencyValue = currencyUnit[name.split(" ").join("")]
      let changeUnit = 0;
      while (change >= currencyValue && drawerCash >= currencyValue) {
        drawerCash = drawerCash - currencyValue;
        change = change - currencyValue;
        change = change.toFixed(2)
        changeUnit = changeUnit + currencyValue;
      }
      if (changeUnit == 0) {
        return null;
      } else {
        return [name, changeUnit]
      }
    })
    answer = answer.filter(ele => ele);
    if ((cash - price).toFixed(2) != sumOfcid(answer)) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    return {
      status: "OPEN",
      change: answer
    }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

```